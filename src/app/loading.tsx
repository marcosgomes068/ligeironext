export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex min-h-[100dvh] flex-col items-center justify-center bg-white px-4 dark:bg-gray-900 sm:px-6">
      <div className="relative w-full max-w-[280px] text-center">
        {/* Círculo externo pulsante */}
        <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform">
          <div className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-75"></div>
        </div>
        
        {/* Círculo interno girando */}
        <div className="relative mx-auto h-12 w-12 animate-spin rounded-full border-b-2 border-blue-500"></div>
        
        {/* Texto de loading com fade */}
        <div className="mt-6 text-center">
          <p className="animate-pulse text-base font-medium text-gray-600 dark:text-gray-300">
            Carregando...
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Por favor, aguarde
          </p>
        </div>

        {/* Barra de progresso */}
        <div className="relative mt-8 h-1 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <div className="absolute left-0 h-full w-1/2 animate-[loading_1s_ease-in-out_infinite] bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
}
