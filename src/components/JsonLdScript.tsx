export default function JsonLdScript({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item) => (
        <script
          key={String(item["@type"])}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
