import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-muted px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-2 text-2xl font-semibold">Página não encontrada</h2>
        <p className="mt-4 text-muted-foreground">Desculpe, a página que você está procurando não existe ou for movida.</p>
        <Button onClick={() => navigate("/")} className="mt-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para a Home
        </Button>
      </div>
    </div>
  )
}
