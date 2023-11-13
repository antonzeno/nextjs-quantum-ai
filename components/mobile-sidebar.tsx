"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";

const MobileSidebar = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

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
