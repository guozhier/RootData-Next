'use client'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button, Input, Link, Tab, Tabs } from '@nextui-org/react'
import type { SubmitHandler } from 'react-hook-form'
import { Controller, useForm } from 'react-hook-form'
import { useTheme } from 'next-themes'
import clsx from 'clsx'
import { PasswordValidator } from './components/password-validator'

interface FormProps {
  email: string
  code: string
  loginPwd: string
}

export default function LoginPage() {
  const { register, control, getValues, watch, formState: { errors }, handleSubmit, clearErrors } = useForm<FormProps>()

  const t = useTranslations()
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const [isSendBtnDisabled, setisSendBtnDisabled] = useState<boolean>(false)
  const watchEmail = watch('email', '')

  useEffect(() => {
    if (!watchEmail || !emailRegex.test(watchEmail))
      setisSendBtnDisabled(true)
    else
      setisSendBtnDisabled(false)
  }, [watchEmail])

  const onLogin: SubmitHandler<FormProps> = (data) => {
    console.log(data)
  }

  const onSignup: SubmitHandler<FormProps> = (data) => {
    console.log(data)
  }

  return (
    <>
      <Tabs
        aria-label="Options"
        classNames={{
          tabList: 'bg-transparent relative rounded-none p-0 gap-0',
          cursor: '!bg-transparent rounded-none shadow-none border-b-primary border-b-[0.25rem] w-[2rem] !left-1/2 !translate-x-[-50%]',
          tab: 'max-w-fit px-[1.8rem] pb-4 h-12 font relative',
          tabContent: 'group-data-[selected=true]:text-text_primary dark:group-data-[selected=true]:text-white text-[1.38rem] text-text_secondary font-medium',
        }}
        onSelectionChange={(e) => {
          console.log('Selection change', e)
          clearErrors(['email', 'code', 'loginPwd'])
        }}
      >
        <Tab className="flex flex-col w-full items-center" key={0} title={t('login.signin')}>
          <form className="flex flex-col items-center h-full w-full max-w-[476px] px-0 md:px-8" onSubmit={handleSubmit(onLogin)}>
            {/* 登录 */}
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => {
                return (
                  <Input
                    className="w-full mt-4 mb-4"
                    label={t('login.email')}
                    placeholder={t('login.emailPlaceholder')}
                    labelPlacement="outside"
                    isInvalid={errors.email ? true : undefined}
                    errorMessage={errors.email ? t('login.emailPlaceholder') : ''}
                    autoComplete="off"
                    {...field}
                    {...register('email', { required: true })}
                  />
                )
              }}
            />

            <Controller
              name="loginPwd"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <div className="w-full flex flex-row justify-between">
                    <span className="text-small font-medium">{t('login.password')}</span>
                    <Link className="text-[#999999] text-sm">{t('login.forgot')}</Link>
                  </div>

                  <Input
                    className="w-full mt-2"
                    placeholder={t('login.passwordPlaceholder')}
                    labelPlacement="outside"
                    type="password"
                    isInvalid={errors.loginPwd ? true : undefined}
                    errorMessage={errors.loginPwd ? t('login.passwordPlaceholder') : ''}
                    autoComplete="off"
                    {...field}
                    {...register('loginPwd', { required: true })}
                  />
                </>
              )}
            />

            <Button className="bg-primary text-white mt-8 w-full" type="submit">{t('login.signin')}</Button>
          </form>
        </Tab>
        <Tab className="flex flex-col w-full items-center" key={1} title={t('login.signup')}>
          <form className="flex flex-col items-center h-full w-full max-w-[476px] px-0 md:px-8" onSubmit={handleSubmit(onSignup)}>
            {/* 注册 */}
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => {
                return (
                  <Input
                    className="w-full mt-4 mb-4"
                    label={t('login.email')}
                    placeholder={t('login.emailPlaceholder')}
                    labelPlacement="outside"
                    isInvalid={errors.email ? true : undefined}
                    errorMessage={errors.email ? t('login.emailPlaceholder') : ''}
                    autoComplete="off"
                    {...field}
                    {...register('email', { required: true })}
                  />
                )
              }}
            />

            <Controller
              name="code"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div className="flex flex-row items-end w-full mb-4">
                  <Input
                    className="flex flex-1 mt-8 mr-4"
                    label={t('login.code')}
                    placeholder={t('login.codePlaceholder')}
                    labelPlacement="outside"
                    type="password"
                    isInvalid={errors.code ? true : undefined}
                    errorMessage={errors.code ? t('login.codePlaceholder') : ''}
                    autoComplete="off"
                    {...field}
                    {...register('code', { required: true })}
                  />

                  <Button
                    className={clsx(
                      errors.code && 'mb-5',
                      'bg-primary text-white mt-8',
                    )}
                    isDisabled={isSendBtnDisabled}
                    onClick={() => {
                      console.log(getValues())
                      // console.log('getCode')
                    }}
                  >
                    {t('login.send')}
                  </Button>
                </div>
              )}
            />

            <Controller
              name="loginPwd"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <Input
                    className="w-full mt-8"
                    label={t('login.password')}
                    placeholder={t('login.passwordPlaceholder')}
                    labelPlacement="outside"
                    type="password"
                    isInvalid={errors.loginPwd ? true : undefined}
                    errorMessage={errors.loginPwd ? t('login.passwordPlaceholder') : ''}
                    autoComplete="off"
                    {...field}
                    {...register('loginPwd', { required: true })}
                  />
                  <PasswordValidator password={field.value}></PasswordValidator>
                </>
              )}
            />

            <Button className="bg-primary text-white mt-8 w-full" type="submit">{t('login.signin')}</Button>
          </form>
        </Tab>
      </Tabs>

    </>
  )
}
