import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

import { categories } from "@/data/constants" 

export function Model() {
  return (
    <>
      <div className="flex gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="model_name">Modèle</Label>
          <Input type="text" id="model_name" placeholder="Austral" maxlength={50} />
        </div>
        <div className="grid w-50 max-w-sm items-center gap-1.5">
          <Label htmlFor="model_code">Code Modèle</Label>
          <Input type="text" id="model_name" placeholder="RN1" maxlength={3} />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex items-center space-x-2">
          <Checkbox id="new" />
          <Label htmlFor="new">Nouveau</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="male" />
          <Label htmlFor="male">Masculin</Label>
        </div>
      </div>
      <div className="flex gap-2 flex-col">
        <p className="text-sm text-gray-500">Catégories</p>
        {categories.map((category) => (
          <div key={category.slug} className="flex items-center space-x-2">
            <Checkbox id={`cat_v${category.slug}`} />
            <Label htmlFor={`cat_v${category.slug}`}>{category.name}</Label>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="consumption">Consommation</Label>
          <Input type="text" id="consumption" placeholder="4,6 - 4,9" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="emission">Emission CO<sub>2</sub></Label>
          <Input type="text" id="emission" placeholder="104 - 110" />
        </div>
      </div>
    </>
  )
}