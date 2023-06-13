"use client"
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Version } from "@/components/versions";

export interface VersionProps {
  id: number;
  versions: Version[];
  setVersions: (versions: Version[]) => void;
}

export function Version({ id, versions, setVersions }: VersionProps) {
  const version = versions.find((version) => version.id === id);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const updatedVersions = versions.map((version) => {
      if (version.id === id) {
        return {
          ...version,
          [key]: key === "priceCatalog" ? parseFloat(event.target.value) : event.target.value,
        };
      }
      return version;
    });
    setVersions(updatedVersions);
  };
  const handleDiscountChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const updatedVersions = versions.map((version) => {
      if (version.id === id) {
        return {
          ...version,
          discounts: {
            ...version.discounts,
            [key]: key === "amount" ? parseFloat(event.target.value) : event.target.value,
          }
        };
      }
      return version;
    });
    setVersions(updatedVersions);
  };
  const priceFinal = () => {
    const version = versions.find((version) => version.id === id);
    let price = 0;
    if (version?.priceCatalog) {
      if (version?.discounts?.amount) {
        return price = version.priceCatalog - version.discounts.amount;
      }
      return price = version.priceCatalog;
    }
    return;
  }
  return (
    <>
      <h2 className="text-sm text-gray-500 pb-1 pt-1">
        Version {id}
        {version!.name != null || version!.motor != null ? (
          <span> – {version!.name} {version!.motor}</span>
        ) : null}
      </h2>
      <div className="flex gap-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="version_name">Nom</Label>
          <Input type="text" id="version_name" placeholder="techno" onChange={(event) => handleChange(event, 'name')} maxlength={50} />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="version_motor">Motorisation</Label>
          <Input type="text" id="version_motor" placeholder="mild hybrid advanced 130" onChange={(event) => handleChange(event, 'motor')} maxlength={50} />
        </div>
      </div>
      <div className="pt-4 flex gap-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor={`v${id}_price_catalog`}>Prix catalogue</Label>
          <Input type="number" step="0.01" min="0" id={`v${id}_price_catalog`} onChange={(event) => handleChange(event, 'priceCatalog')} />
        </div>
        <div className="grid w-full items-center gap-1.5">
        <Label htmlFor={`v${id}_price_final`}>Prix remisé</Label>
          <Input readOnly type="number" step="0.01" min="0" id={`v${id}_price_final`} value={priceFinal()} />
        </div>
      </div>
      <p className="pt-4 text-sm text-gray-500">Remises</p>
      <div className="pt-2 flex gap-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor={`v${id}_discount_type`}>Type</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Type de remise" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Conseillée</SelectItem>
              <SelectItem value="basic">Basic</SelectItem>
              <SelectItem value="stock">Stock</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full items-center gap-1.5">
        <Label htmlFor={`v${id}_discount_amount`}>Montant</Label>
          <Input type="number" step="0.01" min="0" id={`v${id}_discount_amount`} onChange={(event) => handleDiscountChange(event, 'amount')} />
        </div>
      </div>
    </>
  )
}