/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { SquarePen, Trash2 } from "lucide-react"
import { IEmployee } from "../../types"
import { UpdateModal } from "../modals/Update"
import { DeleteModal } from "../modals/Delete"

interface EmployeeTableProps {
  data: IEmployee[]
  onDelete: (item: IEmployee) => void
  onEdit: (item: IEmployee) => void
  schema?: Zod.ZodObject<any>
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ data, onDelete, onEdit, schema }) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false)
  const [isDeleting, setIsDeleting] = React.useState<boolean>(false)
  const [selectedEmployee, setSelectedEmployee] = React.useState({} as IEmployee)
  const [filter, setFilter] = React.useState<string>("")

  const filteredData = data.filter((emp) =>
    emp.name.toLowerCase().includes(filter.toLowerCase()) ||
    emp.document.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="rounded-2xl border p-4 shadow-sm overflow-x-auto space-y-4">
      <input
        type="text"
        placeholder="Filtrar por nome ou CPF"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
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
          {filteredData.length > 0 ? (
            filteredData.map((emp) => (
              <TableRow key={emp.id}>
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
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                Nenhum funcionário listado.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <UpdateModal 
        isOpen={isEditing}
        schema={schema}
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
