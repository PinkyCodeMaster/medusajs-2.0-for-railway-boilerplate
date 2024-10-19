import { getCategoriesList } from "@lib/data/categories"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-12">
          <div className="flex flex-col gap-y-4">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Front Line Military
            </LocalizedClientLink>
            <Text className="text-ui-fg-subtle">
              Your trusted source for military equipment
            </Text>
          </div>
          <div className="text-small-regular grid grid-cols-2 gap-x-16">
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base font-semibold">Categories</span>
              <ul className="grid grid-cols-1 gap-2" data-testid="footer-categories">
                {product_categories?.slice(0, 6).map((c) => (
                  <li key={c.id} className="text-ui-fg-subtle">
                    <LocalizedClientLink
                      className="hover:text-ui-fg-base"
                      href={`/categories/${c.handle}`}
                    >
                      {c.name}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base font-semibold">Company</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle">
                <li>
                  <LocalizedClientLink href="/about" className="hover:text-ui-fg-base">
                    About Us
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/terms" className="hover:text-ui-fg-base">
                    Terms of Service
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/privacy" className="hover:text-ui-fg-base">
                    Privacy Policy
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/contact" className="hover:text-ui-fg-base">
                    Contact Us
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-8 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Front Line Military. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  )
}