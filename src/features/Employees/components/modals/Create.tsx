/* eslint-disable @typescript-eslint/no-explicit-any */
import { DynamicForm } from "@/components/forms"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger } from "@/components/ui/dialog"
import { IModalDefaultProps } from "./interfaces.structure";
import { employeeFormConfig } from "../../constants";

interface ICreateModalProps extends IModalDefaultProps {
  onSubmit: (data: unknown) => void;
  schema?: Zod.ZodObject<any>
}

export const CreateModal = ({isOpen,setIsOpen,onSubmit,schema}:ICreateModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <span
          className="w-40 bg-zinc-950 rounded-md text-white font-medium text-sm text-center cursor-pointer hover:bg-zinc-800 transition duration-300 p-2"
        >
          Adicionar
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar novo funcionário</DialogTitle>
          <DialogDescription>
            Preencha os campos com as informações do funcionário para adiciona-lo a tabela.
          </DialogDescription>
        </DialogHeader>
        <DynamicForm 
          fields={employeeFormConfig}
          onSubmit={onSubmit}
          schema={schema}
        />
      </DialogContent>
    </Dialog>
  )
}