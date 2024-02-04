"use client"

import { useEffect, useState } from 'react'
import clsx from "clsx";
import { useTranslations } from 'next-intl';
import zxcvbn from 'zxcvbn'

interface VaildatorProps {
  password: string
}

interface ColorProps {
  color: string,
  bg: string,
  text: string,
}


export const PasswordValidator = ({ password }: VaildatorProps) => {
  const t = useTranslations();
  const [strength, setStrength] = useState(0);

  const strengthColors: Record<string, ColorProps> = {
    strong: {
      color: "text-[#34a853]",
      bg: '!bg-[#34a853]',
      text: t('login.passwordStrong')
    },
    medium: {
      color: 'text-[#fbbc05]',
      bg: '!bg-[#fbbc05]',
      text: t('login.passwordMedium')
    },
    weak: {
      color: 'text-[#ea4335]',
      bg: '!bg-[#ea4335]',
      text: t('login.passwordWeak')
    },
  }

  const scoreMap: Record<number, string> = {
    0: 'weak',
    1: 'weak',
    2: 'medium',
    3: 'strong', 4: 'strong',
  }


  useEffect(() => {
    const { score } = zxcvbn(password);
    setStrength(score);
  }, [password])


  return (
    <div className="flex flex-row items-center justify-start self-start mt-4">
      {(
        Array(5).fill(null).map((_, index) => {
          return (
            <div className={clsx(
              'w-8 md:w-12 h-1 rounded-sm bg-[#c0c0c0] mr-2',
              strength >= index - 1 && `${strengthColors[scoreMap[strength]].bg}`
            )} key={'strength_bar' + index}></div>
          )
        })
      )}
      <div className={strengthColors[scoreMap[strength]].color}>{strengthColors[scoreMap[strength]].text}</div>
    </div >
  )
}