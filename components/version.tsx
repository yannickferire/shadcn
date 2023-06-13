import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';

export function Version() {
  return (
    <>
      <div className="flex gap-4">
        <Button variant="outline"><Plus className="mr-2 h-4 w-4" /> Ajouter une version</Button>
      </div>
    </>
  )
}