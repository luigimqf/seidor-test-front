import { DynamicForm } from "@/components/forms"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
} from "@/components/ui/dialog"
import { IModalDefaultProps } from "./interfaces.structure";
import { IEmployee } from "@/types/employee";
import { employeeFormConfig } from "@/constants/employees";

interface IUpdateModalProps extends IModalDefaultProps {
  onSubmit: (data: unknown) => void;
  employee: IEmployee;
}

export const UpdateModal = ({employee,isOpen,onSubmit,setIsOpen}:IUpdateModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
          defaultValues={employee}
        />
      </DialogContent>
    </Dialog>
  )
}