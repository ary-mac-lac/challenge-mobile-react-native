const timeout = (ms: number): Promise<null> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default timeout
