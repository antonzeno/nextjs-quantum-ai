"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";

const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" className="md:hidden" size={"icon"}>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="p-0" side={"left"}>
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
};

export default MobileSidebar;
