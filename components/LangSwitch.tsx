"use client";

import React from 'react'
import { siteConfig } from '@/config/site'
import { useParams, useSearchParams } from 'next/navigation';
import { usePathname, useRouter } from '../navigation';
// import { usePathname, useRouter } from 'next-intl/client';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "@nextui-org/react";
import { useLocale } from 'next-intl'
import { FaGlobe } from "react-icons/fa";
export const LangSwitch = () => {

  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const locale = useLocale()
  const query = useSearchParams()

  return (
    <Dropdown
      classNames={{
        content: 'min-w-[auto]'
      }}>
      <DropdownTrigger>
        <Button
          variant="light"
          className="capitaliz min-w-[4rem]"
        >
          <FaGlobe />
          {locale.toLocaleUpperCase()}
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Dropdown Language"
      >
        <DropdownSection classNames={{ base: 'mb-0' }}>
          {
            siteConfig.langs.map((it) => {
              return (
                <DropdownItem
                  classNames={{
                    base: 'px-3',
                    title: 'text-center'
                  }}
                  key={'lang-' + it}
                  onClick={() => {
                    router.replace(
                      {
                        pathname: (pathname + '?' + query.toString()) as any,
                        params: params as any,
                      },
                      {
                        locale: it.toLowerCase(),
                      }
                    )
                    // changeLocale(it.toLocaleLowerCase())
                  }}
                >
                  {it}
                </DropdownItem>
              )
            })
          }
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )
}
