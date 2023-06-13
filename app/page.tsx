import { Model } from "@/components/model"
import { Versions } from "@/components/versions"
import { Actions } from "@/components/actions"

export default function Home() {
  return (
    <main className="container p-20">
      <form className="flex gap-8 flex-col">
        <Model />
        <Versions />
        <Actions />
      </form>
    </main>
  )
}
