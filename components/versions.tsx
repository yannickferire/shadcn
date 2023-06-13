"use client"
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from 'lucide-react';
import { X } from 'lucide-react';

interface Version {
  id: number;
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
          <article key={version.id} className="mb-4 grid w-full items-center gap-1.5 relative">
            <h2 className="text-sm text-gray-500 pb-1 pt-1">Version {version.id}</h2>
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="version_name">Nom</Label>
                <Input type="text" id="version_name" placeholder="techno" maxlength={50} />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="version_motor">Motorisation</Label>
                <Input type="text" id="version_motor" placeholder="mild hybrid advanced 130" maxlength={50} />
              </div>
            </div>
            <Button 
              className="absolute right-0 top-0" 
              variant="destructive" size="sm"
              onClick={() => removeVersion(version.id)}
            ><X className="h-4 w-4" /></Button>
          </article>
        ))}
        <Button variant="outline" onClick={() => addVersion()}><Plus className="mr-2 h-4 w-4" /> Ajouter une version</Button>
      </div>
    </>
  )
}