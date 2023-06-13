"use client"
import { useState } from "react";

import { Version } from "@/components/version";
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import { X } from 'lucide-react';

export interface Version {
  id: number;
  name?: string;
  motor?: string;
  priceCatalog?: number;
  priceFinal?: number;
  discounts?: Record<string, any>;
}

export function Versions() {
  const [versions, setVersions] = useState<Version[]>([]);

  const addVersion = () => {
    setVersions([...versions, { id: versions.length + 1 }]);
  };
  const removeVersion = (id: number) => {
    setVersions((prevVersions) => {
      const updatedVersions = prevVersions.filter((version) => version.id !== id);
      const updatedVersionsWithNewIds = updatedVersions.map((version, index) => ({
        ...version,
        id: index + 1,
      }));
      return updatedVersionsWithNewIds;
    });
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        {versions.map((version) => (
          <article key={version.id} className="mb-2 grid w-full items-center gap-1.5 relative border-b pb-8">
            <Version id={version.id} versions={versions} setVersions={setVersions} />
            <Button 
              className="absolute right-0 top-0" 
              variant="destructive" size="sm"
              onClick={() => removeVersion(version.id)}
            ><X className="h-4 w-4" /></Button>
          </article>
        ))}
        <Button className="mt-3" variant="outline" onClick={() => addVersion()}><Plus className="mr-2 h-4 w-4" /> Ajouter une version</Button>
      </div>
			{/* "catalog_price": 19100,
			"discounts": {
				"discount": {
					"type": "season",
					"amount": 2750,
					"legal_slug": "vp-1"
				},
				"stock": {
					"type": "stock",
					"amount": 550,
					"legal_slug": "vp-stock"
				}
			},
			"final_price": 15800,
			"private_lease": null,
			"financial_leasing": null,
			"easyfin_type": "3Ways",
			"easyfin_amount": 399,
			"easyfin_ballon": 21910,
			"easyfin_my_warranty": 0,
			"easyfin_advance": 9324.32,
			"easyfin_length": 48,
			"easyfin_extension": 0, */}
    </>
  )
}