import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IEmployee } from "@/types/employee"
import { DeleteModal } from "@/features/ManageEmployees/components/modals/Delete"
import { UpdateModal } from "@/features/ManageEmployees/components/modals/Update"
import { SquarePen, Trash2 } from "lucide-react"

interface EmployeeTableProps {
  data: IEmployee[]
  onDelete: (item: IEmployee) => void
  onEdit: (item: IEmployee) => void
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ data, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [isDeleting, setIsDeleting] = React.useState<boolean>(false);
  const [selectedEmployee, setSelectedEmployee] = React.useState({} as IEmployee)

  if (data.length === 0) {
    return <div className="text-center text-muted-foreground">Nenhum funcionário listado.</div>
  }

  return (
    <div className="rounded-2xl border p-4 shadow-sm overflow-x-auto">
      <Table className="table-fixed border-separate border-spacing-x-4">
        <TableHeader>
          <TableRow>
            <TableHead className="px-4 py-2">Nome</TableHead>
            <TableHead className="px-4 py-2">CPF</TableHead>
            <TableHead className="px-4 py-2 text-right">Salário</TableHead>
            <TableHead className="px-4 py-2 text-right">Desconto</TableHead>
            <TableHead className="px-4 py-2 text-center">Dependentes</TableHead>
            <TableHead className="px-4 py-2 text-center">IRRF</TableHead>
            <TableHead className="px-4 py-2 text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((emp, index) => (
            <TableRow key={index}>
              <TableCell className="px-4 py-2">{emp.name}</TableCell>
              <TableCell className="px-4 py-2">{emp.document}</TableCell>
              <TableCell className="px-4 py-2 text-right">R$ {emp.salary.toFixed(2)}</TableCell>
              <TableCell className="px-4 py-2 text-right">R$ {emp.discount.toFixed(2)}</TableCell>
              <TableCell className="px-4 py-2 text-center">{emp.dependents}</TableCell>
              <TableCell className="px-4 py-2 text-center">
                {emp.irrf_discount !== undefined ? `R$ ${emp.irrf_discount.toFixed(2)}` : "—"}
              </TableCell>
              <TableCell className="px-4 py-2 text-center space-x-2">
                <button
                  onClick={() => {
                    setSelectedEmployee(emp)
                    setIsEditing(true)
                  }}
                  className="text-zinc-500 hover:text-zinc-900 transition cursor-pointer"
                  title="Editar"
                >
                  <SquarePen size={18} />
                </button>
                <button
                  onClick={() => {
                    setSelectedEmployee(emp)
                    setIsDeleting(true)
                  }}
                  className="text-red-500 hover:text-red-700 transition cursor-pointer"
                  title="Excluir"
                >
                  <Trash2 size={18} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <UpdateModal 
        isOpen={isEditing}
        employee={selectedEmployee}
        setIsOpen={setIsEditing}
        onSubmit={(data) => {
          setIsEditing(false)
          onEdit(data as IEmployee)
        }}
      />
      <DeleteModal 
        isOpen={isDeleting}
        setIsOpen={setIsDeleting}
        onConfirm={() => {
          setIsDeleting(false)
          onDelete(selectedEmployee)
        }}
      />
    </div>
  )
}

export default EmployeeTable
