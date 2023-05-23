const getEntry = async (entryId) => {
  const url =
    process.env.REACT_APP_CONTENTFUL_MODE === 'PROD'
      ? `https://cdn.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/master/entries/${entryId}?access_token=${process.env.REACT_APP_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN}`
      : `https://preview.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/master/entries/${entryId}?access_token=${process.env.REACT_APP_CONTENTFUL_PREVIEW_API_ACCESS_TOKEN}`

  const response = await fetch(url, {
    method: 'GET',
  })
  try {
    return (await response.json())?.fields || {}
  } catch (e) {
    console.log(e)
    return {}
  }
}

export const getContentfulEntryFields = async (entryId) => {
  return await getEntry(entryId)
}
