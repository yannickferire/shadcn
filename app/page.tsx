import { Model } from "@/components/model"
import { Version } from "@/components/version"
import { Actions } from "@/components/actions"

export default function Home() {
  return (
    <main className="container p-20">
      <form className="flex gap-8 flex-col">
        <Model />
        <Version />
        <Actions />
      </form>
    </main>
    // "model_code": "RN1",
    // "model_admin_id": "espace-rhn-ph1",
    // "has_catalog_link": false,
    // "category": ["vp", "vh"],
    // "type": ["famille", "premium"],
    // "linked_models": ["austral-e-tech-hybrid", "grand-scenic", "koleos"],
    // "consumption": "4,6 - 4,9",
    // "emission": "104 - 110",
    // "translations": {
    //   "fr": {
    //     "name": "Nouveau Renault Espace E&#8209;Tech full hybrid",
    //     "config_link": "https://fr.renault.be/vehicules-hybrides/nouveau-espace/pre-configurateur.html?modelAdminId=espace-rhn-ph1"
    //   },
    //   "nl": {
    //     "name": "Nieuwe Renault Espace E&#8209;Tech full hybrid",
    //     "config_link": "https://nl.renault.be/hybride-wagens/nieuwe-espace/pre-configurator.html?modelAdminId=espace-rhn-ph1"
    //   }
    // },
    // "promos": [],
    // "avantage_max": null,
    // "tradein": 1500,
    // "offers": 
  )
}
