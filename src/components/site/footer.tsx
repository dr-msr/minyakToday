'use client' 

import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from "@/components/ui/menubar";

import { useEffect, useState } from "react";
import { useData } from "@/data/context";
import { backupData } from "@/data/actions";
import { AlertTriangle } from "lucide-react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { RestoreFile } from "../footer_dialog/restoreFile";
import { EditPreset } from "../footer_dialog/editPreset";
import { toast } from "sonner";
import { ResetData } from "../footer_dialog/resetData";


export const Footer = () => {
	const context = useData();
	const [closeRestore, setCloseRestore] = useState(false);
	const [closeReset, setCloseReset] = useState(false);
	const [menuValue, setMenuValue]	= useState("");

	async function initBackup() {
		let payload = localStorage.getItem('data');
		if (!payload) {
			toast.error("No data found in local storage.");
			return
		};

		const result = backupData(payload);
		if (result.status == "SUCCESS") {
			toast.success(result.message);
		} else {
			toast.error(result.message);
		}
	}

	useEffect(() => {
		if (closeReset) {
			context.initData();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[closeReset])

	return (


		<Menubar className="min-w-[400px] justify-center mt-2" value={menuValue} onValueChange={(value) => setMenuValue(value)}>
			<MenubarMenu>
				<MenubarTrigger>Setting</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>Unit Preference</MenubarItem>
					<MenubarRadioGroup value={context.data.Setting.unit}
						onValueChange={(e: string) => context.updateUnit(e)}>
						<MenubarRadioItem value="RM">RM</MenubarRadioItem>
						<MenubarRadioItem value="L">Litre</MenubarRadioItem>
					</MenubarRadioGroup>
					<MenubarSeparator />

					<MenubarItem>Petrol Preference</MenubarItem>
					<MenubarRadioGroup value={context.data.Setting.ron}
						onValueChange={(e: string) => context.updateRon(e)}>
						<MenubarRadioItem value="RON95">RON95</MenubarRadioItem>
						<MenubarRadioItem value="RON97">RON97</MenubarRadioItem>
					</MenubarRadioGroup>
					<MenubarSeparator />

					<Dialog>
						<DialogTrigger asChild>
							<MenubarItem onSelect={(e) => e.preventDefault()}>
								Edit Preset
							</MenubarItem>
						</DialogTrigger>
						<EditPreset />
					</Dialog>

				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Data</MenubarTrigger>
				<MenubarContent>
					<MenubarItem onClick={() => initBackup()}>
						Backup
					</MenubarItem>

					<Dialog open={closeRestore} onOpenChange={setCloseRestore}>
						<DialogTrigger asChild>
							<MenubarItem onSelect={(e) => e.preventDefault()}>
								Restore
							</MenubarItem>
						</DialogTrigger>
						<RestoreFile close={(value) => {
							setCloseRestore(!value);
							if (value) { setMenuValue(""); }
						} } />
					</Dialog>


					<MenubarSeparator />
					<MenubarSub>
						<MenubarSubTrigger>Export</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarItem>CSV</MenubarItem>
							<MenubarItem>PDF</MenubarItem>
							<MenubarItem>HTML</MenubarItem>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />

					<Dialog open={closeReset} onOpenChange={setCloseReset}>
						<DialogTrigger asChild>
							<MenubarItem onSelect={(e) => e.preventDefault()} className="text-red">
								<AlertTriangle className="mr-2 stroke-red-900" /> Reset
							</MenubarItem>
						</DialogTrigger>
						<ResetData success={(value) => {
							setCloseReset(!value);
							if (value) {
								setMenuValue("");
							}
						} } />
					</Dialog>



				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>About</MenubarTrigger>
				<MenubarContent>
					<MenubarItem inset>About This App </MenubarItem>
					<MenubarSeparator />
					<MenubarItem inset>About drmsr</MenubarItem>
					<MenubarSeparator />
					<MenubarItem inset>Open Source</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>



	);
}
