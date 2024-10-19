"use client"

import { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { Search, User, Menu, X } from "lucide-react"
import { Suspense } from "react"

export default function nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          {/* Left: Site Title */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase font-bold"
              data-testid="nav-store-link"
            >
              Front Line Military
            </LocalizedClientLink>
          </div>

          {/* Middle: Store Categories */}
          <div className="hidden md:flex items-center justify-center space-x-6">
            <LocalizedClientLink
              href="/store"
              className="hover:text-ui-fg-base"
            >
              All Products
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/categories"
              className="hover:text-ui-fg-base"
            >
              Categories
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/about"
              className="hover:text-ui-fg-base"
            >
              About Us
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/contact"
              className="hover:text-ui-fg-base"
            >
              Contact
            </LocalizedClientLink>
          </div>

          {/* Right: Account, Cart, Search */}
          <div className="flex items-center gap-x-6 h-full">
            <LocalizedClientLink
              className="hover:text-ui-fg-base hidden sm:flex items-center gap-x-2"
              href="/account"
              data-testid="nav-account-link"
            >
              <User size={20} />
              <span className="hidden lg:inline">Account</span>
            </LocalizedClientLink>

            {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
              <LocalizedClientLink
                className="hover:text-ui-fg-base hidden sm:flex items-center gap-x-2"
                href="/search"
                scroll={false}
                data-testid="nav-search-link"
              >
                <Search size={20} />
                <span className="hidden lg:inline">Search</span>
              </LocalizedClientLink>
            )}

            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex items-center gap-x-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>

            {/* Mobile menu */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu content */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-ui-border-base">
            <div className="p-4 space-y-4">
              <LocalizedClientLink
                href="/store"
                className="block py-1 hover:text-ui-fg-base"
                onClick={() => setIsMenuOpen(false)}
              >
                All Products
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/categories"
                className="block py-1 hover:text-ui-fg-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/about"
                className="block py-1 hover:text-ui-fg-base"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/contact"
                className="block py-1 hover:text-ui-fg-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/account"
                className="block py-1 hover:text-ui-fg-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Account
              </LocalizedClientLink>
              {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  href="/search"
                  className="block py-1 hover:text-ui-fg-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Search
                </LocalizedClientLink>
              )}
            </div>
          </div>
        )}
      </header>
    </div>
  )
}