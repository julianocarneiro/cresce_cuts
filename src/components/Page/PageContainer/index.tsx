"use client";
import { ReactNode, useCallback, useEffect, useState } from "react";
import Sidebar from "../SideBar";

interface PageProps {
    children?: ReactNode;
  }

export default function PageContainer({
    children,
  }: PageProps)
{
    return (
        <div className="page-container">
            <Sidebar />
            {children}
        </div>
      );
}
