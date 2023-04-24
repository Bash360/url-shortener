function generateStatistics(originalUrl,shortUrl) {
  const originalUrlBytes = getStringSize(originalUrl);
  const shortUrlBytes = getStringSize(shortUrl);
  const createdAt = new Date().toISOString();
  return {
    originalUrlBytes,
    shortUrlBytes,
    createdAt
  }
}


function getStringSize(str) {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);
  return bytes.length;
}

module.exports = generateStatistics;