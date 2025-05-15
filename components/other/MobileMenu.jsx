"use client";
import { useState } from "react";
import Link from "next/link";
import { Layers, Star, Phone, Chat, Map } from "@/components/icons/icons";
import LanguageSwitcher from "@/components/other/LanguageSwitcher";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        className="lg:hidden flex items-center justify-center h-full px-6 py-2 gap-2 border-2 border-secondary rounded-xl"
      >
        <Layers />
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <nav
            className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-white shadow-xl p-4 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-4 text-xl"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <Link
              className="flex items-center gap-2 border-b border-default pb-2"
              href="#"
            >
              <span className="font-semibold">Channakorn</span>
              <span className="text-neutral-500">
                Office&nbsp;For&nbsp;Rent
              </span>
            </Link>
            <Link
              href="tel:+66"
              className="flex items-center gap-2 py-2 border-b border-default"
            >
              <Phone />
              <span>Phone</span>
            </Link>
            <Link
              href="/chat"
              className="flex items-center gap-2 py-2 border-b border-default"
            >
              <Chat />
              <span>Chat</span>
            </Link>
            <Link
              href="/map"
              className="flex items-center gap-2 py-2 border-b border-default"
            >
              <Map />
              <span>Map</span>
            </Link>
            <Link
              href="/menu"
              className="flex items-center gap-2 py-2 border-b border-default"
            >
              <Star />
              <span>Menu</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 py-2 border-b border-default"
            >
              <span>Contact&nbsp;Us</span>
            </Link>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
