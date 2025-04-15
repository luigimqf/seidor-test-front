import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
} from "@/components/ui/dialog"
import { IModalDefaultProps } from "./interfaces.structure";

interface IDeleteModalProps extends IModalDefaultProps {
  onConfirm: () => void;
}

export const DeleteModal = ({onConfirm, isOpen,setIsOpen}:IDeleteModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tem certeza que deseja excluir o funcionário?</DialogTitle>
          <DialogDescription>
            A exclusão de um funcionário é permanente e não poderá ser revertida em caso de arrependimento.
          </DialogDescription>
        </DialogHeader>
        <Button 
          onClick={() => {
            setIsOpen(false);
            onConfirm()
          }}
          variant="destructive"
          className="w-30"
        >
          Excluir
        </Button>
      </DialogContent>
    </Dialog>
  )
}