import { DynamicForm } from "@/components/forms"
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger } from "@/components/ui/dialog"
import { employeeFormConfig } from "@/constants/form";

export const CreateModal = () => {
  return (
    <Dialog>
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
          onSubmit={(data) => {
            console.log(data);
          }}
        />
      </DialogContent>
    </Dialog>
  )
}