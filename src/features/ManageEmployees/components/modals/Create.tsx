import { DynamicForm } from "@/components/forms"
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger } from "@/components/ui/dialog"
import { IModalDefaultProps } from "./interfaces.structure";
import { userSchema } from "@/utils/validation";
import { employeeFormConfig } from "@/constants/employees";

interface ICreateModalProps extends IModalDefaultProps {
  onSubmit: (data: unknown) => void;
}

export const CreateModal = ({isOpen,setIsOpen,onSubmit}:ICreateModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button>Adicionar</Button>
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
          schema={userSchema}
        />
      </DialogContent>
    </Dialog>
  )
}