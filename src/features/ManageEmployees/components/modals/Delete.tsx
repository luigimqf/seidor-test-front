import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger } from "@/components/ui/dialog"
import { Trash2 } from "lucide-react";
import { IModalDefaultProps } from "./interfaces.structure";

interface IDeleteModalProps extends IModalDefaultProps {
  onConfirm: () => void;
}

export const DeleteModal = ({onConfirm, isOpen,setIsOpen}:IDeleteModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <button
          className="text-red-500 hover:text-red-700 transition cursor-pointer"
          title="Excluir"
        >
          <Trash2 size={18} />
        </button>
      </DialogTrigger>
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