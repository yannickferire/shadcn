import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Model } from "@/components/model"
import { Versions } from "@/components/versions"
import { Actions } from "@/components/actions"

export default function Home() {
  return (
    <main className="container p-20">
      <Table>
        <TableCaption>Offers where you need to contribute</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Contributors</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Dacia VP BE</TableCell>
            <TableCell>WIP</TableCell>
            <TableCell className="flex items-center text-xs py-6">
              <Avatar className="-mr-2">
                <AvatarImage src="https://www.challenges.fr/assets/img/2023/04/19/cover-r4x3w1200-643ffc091e5a7-renault-clio-2023.jpg" />
                <AvatarFallback>LD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>RD</AvatarFallback>
              </Avatar>
              <span className="ml-1 mr-2 opacity-60">Lucie and Ruth validated</span>
              <Avatar>
                <AvatarImage src="https://i.pinimg.com/564x/4d/57/a2/4d57a277cef4ae8ea42b39ec9d15d24b.jpg" />
                <AvatarFallback>YV</AvatarFallback>
              </Avatar>
              <span className="ml-1 opacity-60">Yves still needs to validate</span>
            </TableCell>
            <TableCell className="text-right"><Button variant="outline">Open</Button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Dacia Business BE</TableCell>
            <TableCell>Ready to go live in 2 days</TableCell>
            <TableCell className="flex items-center text-xs py-6">
              <Avatar className="-mr-2">
                <AvatarImage src="https://www.challenges.fr/assets/img/2023/04/19/cover-r4x3w1200-643ffc091e5a7-renault-clio-2023.jpg" />
                <AvatarFallback>LD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://i.pinimg.com/564x/4d/57/a2/4d57a277cef4ae8ea42b39ec9d15d24b.jpg" />
                <AvatarFallback>YV</AvatarFallback>
              </Avatar>
              <span className="ml-1 mr-2 opacity-60">Lucie and Yves validated</span>
            </TableCell>
            <TableCell className="text-right"><Button variant="outline">Open</Button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* <hr className="my-8" />
      <form className="flex gap-8 flex-col">
        <Model />
        <Versions />
        <Actions />
      </form> */}
    </main>
  )
}
