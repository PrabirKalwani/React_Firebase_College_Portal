import React from "react";
import Nav from "../../Components/Faculty/Nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import Footer from "../../Components/Footer";

const Facattendance = () => {
  return (
    <div className>
      <Nav />
      <div className="p-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Attendance</CardTitle>
            <CardContent>
              <div className="flex mt-2 justify-between">
                <div className="border p-2 mx-3 my-3 w-36 rounded text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger>Course</DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>MBA TECH (CE) </DropdownMenuLabel>
                      <DropdownMenuLabel>MBA TECH (AI/DS) </DropdownMenuLabel>
                      <DropdownMenuLabel>MBA TECH (MECH) </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>B.TECH (CE) </DropdownMenuItem>
                      <DropdownMenuItem>B.TECH (AI/DS)</DropdownMenuItem>
                      <DropdownMenuItem>B.TECH (MECH)</DropdownMenuItem>
                      <DropdownMenuItem>B.TECH (EXTC)</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="border p-2 mx-3 my-3 w-36 rounded text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger>Subject</DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>DBMS</DropdownMenuLabel>
                      {/* <DropdownMenuSeparator /> */}
                      <DropdownMenuItem>OS</DropdownMenuItem>
                      <DropdownMenuItem>WP</DropdownMenuItem>
                      <DropdownMenuItem>MPMC</DropdownMenuItem>
                      <DropdownMenuItem>CN</DropdownMenuItem>
                      <DropdownMenuItem>COA</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="border p-2 mx-3 my-3 w-36 rounded text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger>Date</DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="border p-2 mx-3 my-3 w-36 rounded text-center">
                  <button className="btn-primary">Generate QR</button>
                </div>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Facattendance;
