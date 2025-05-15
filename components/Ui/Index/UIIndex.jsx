"use client";

import { useTranslations } from "next-intl";

export default function UIIndex() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
      <div className="flex flex-col items-center justify-center w-full min-h-[500px] p-2 gap-2 border-2 border-dark border-dashed rounded-3xl">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <span>1</span>
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <span>{t("header")}</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <span>3</span>
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <span>4</span>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-center w-full min-h-[500px] p-2 gap-2 border-2 border-dark border-dashed bg-default rounded-3xl">
        {t('good')}
      </div>
      <div className="flex items-center justify-center w-full min-h-[500px] p-2 gap-2 border-2 border-dark border-dashed rounded-3xl">
        {t('black')}
      </div> */}
    </div>
  );
}
