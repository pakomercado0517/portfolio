export default function ServiceCard({ item }) {
  return (
    <section>
      <div
        className={`w-32 h-32 flex justify-center items-center ${item.color}`}
      >
        {item.icon}
      </div>
    </section>
  );
}
