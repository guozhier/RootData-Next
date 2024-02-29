import { Link } from '@nextui-org/link'
import NextLink from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { Suspense } from 'react'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { LangSwitch } from '@/components/LangSwitch'
import { Logo } from '@/components/Logo'

export function PageHeader() {
  return (
    <div className={clsx(
      'flex flex-row justify-between',
    )}
    >
      <div className="w-full px-4 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <Link
            href="https://www.rootdata.com"
            target="_blank"
          >
            {/* <Image
              src="/images/logo.png"
              priority={true} width={196}
              height={69} alt="logo"
            ></Image> */}
            <Logo />
          </Link>
        </div>

        <div className="flex flex-row items-center">
          <ThemeSwitch>

          </ThemeSwitch>

          <Suspense>
            <LangSwitch></LangSwitch>
          </Suspense>
        </div>

      </div>
    </div>
  )
}
