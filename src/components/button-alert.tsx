'use client'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { useToast } from "@/hooks/use-toast";


export const ButtonAlert = ({className, value}: {className: string, value: string}) => {
    const { toast } = useToast()

    const handleDownload = () => {
        // Create a hidden anchor element
        const link = document.createElement("a");
        link.href = "/zenspire.apk";
        link.download = "zenspire.apk";
        link.click();
        setTimeout(() => {
          toast({
            title: "Berhasil Download Aplikasi",
            description: "Kamu telah berhasil men-download aplikasi Zenspire, silahkan tunggu proses selesai",
          });
        }, 800)

      };
  return (
    <>
    <AlertDialog>
        <AlertDialogTrigger className={className}>{value}</AlertDialogTrigger>
        <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
                <AlertDialogTitle>Apakah kamu yakin untuk men-download aplikasi Dentalint?</AlertDialogTitle>
                <AlertDialogDescription>
                    Aplikasi mungkin akan meminta izin untuk diinstal, tenang saja Dentalint telah terjamin bebas dari malware dan aman untuk diinstal. Kamu bisa langsung mengizinkan instalasinya tanpa khawatir. 😊            
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Tidak</AlertDialogCancel>
                <AlertDialogAction onClick={handleDownload}  className="bg-[#394E85]">Ya</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>  
    </>
  )
}