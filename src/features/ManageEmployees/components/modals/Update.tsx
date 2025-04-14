import { DynamicForm } from "@/components/forms"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger } from "@/components/ui/dialog"
import { SquarePen } from "lucide-react";
import { IModalDefaultProps } from "./interfaces.structure";
import { IEmployee } from "@/types/employee";
import { employeeFormConfig } from "@/constants/form";

interface IUpdateModalProps extends IModalDefaultProps {
  onSubmit: (data: unknown) => void;
  employee: IEmployee;
}

export const UpdateModal = ({isOpen,onSubmit,setIsOpen}:IUpdateModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <button
          onClick={() => {}}
          className="text-zinc-500 hover:text-zinc-900 transition cursor-pointer"
          title="Editar"
        >
          <SquarePen size={18} />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Atualizar informações funcionário</DialogTitle>
          <DialogDescription>
            Preencha os campos com as novas informações do funcionário para atualizar a tabela.
          </DialogDescription>
        </DialogHeader>
        <DynamicForm 
          fields={employeeFormConfig}
          onSubmit={onSubmit}
        />
      </DialogContent>
    </Dialog>
  )
}