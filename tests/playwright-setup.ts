export async function enableMSW() {
  if (process.env.NEXT_PUBLIC_ALLOW_MSW?.toString() !== 'true') {
    return
  }

  if (typeof window !== 'undefined') {
    const { worker } = await import('./playwright-worker-mock')

    await worker.start()
  }
}
