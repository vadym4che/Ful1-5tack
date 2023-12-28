const formatProjectStructure = (project) => {
  const buildStructure = (currentStructure, path = '', isLast = false) => {
    let result = ''

    Object.keys(currentStructure).forEach((key, index, array) => {

      let isLast = index === array.length - 1
      const fullPath = path ? `${path}/${key}` : key
      const isDirectory = typeof currentStructure[key] === 'object' && Object.keys(currentStructure[key]).length > 0

      result += `${'│'.repeat(path.split('/').length - 1)}${isLast ? '└' : '├'}${isDirectory ? '┬' : ''}${key}\n`

      if (isDirectory) {
        const last = index === array.length - 1
        result += buildStructure(currentStructure[key], fullPath, last)
      }
    })

    return result
  }

  return buildStructure(project.structure, project.path)
}

export default formatProjectStructure
