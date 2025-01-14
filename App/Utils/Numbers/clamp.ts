const clamp = (val: number, min: number, max: number): number => {
  return Math.min(Math.max(min, val), max)
}

export default clamp
