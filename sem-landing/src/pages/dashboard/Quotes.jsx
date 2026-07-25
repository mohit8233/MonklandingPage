import { Download, Receipt } from "lucide-react";

const quotes = [
  {
    id: "QT-001",
    service: "Website Development",
    amount: "$1200",
    status: "Pending",
  },
  {
    id: "QT-002",
    service: "SEO Package",
    amount: "$600",
    status: "Approved",
  },
];

export default function Quotes() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          My Quotes
        </h1>

        <p className="mt-2 text-slate-500">
          Review and download your quotations.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {quotes.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <Receipt className="text-emerald-600" />

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                {item.status}
              </span>
            </div>

            <h2 className="mt-5 text-xl font-bold">
              {item.service}
            </h2>

            <p className="mt-2 text-slate-500">
              Quote ID: {item.id}
            </p>

            <p className="mt-2 text-2xl font-bold text-emerald-600">
              {item.amount}
            </p>

            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-white">
              <Download size={18} />
              Download Quote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}