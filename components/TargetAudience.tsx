import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* For Whom */}
        <div className="bg-[#0f0f0f] p-8 rounded-2xl border border-green-900/30 shadow-[0_0_30px_rgba(0,255,0,0.05)]">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle className="text-green-500" /> Pra quem é
            </h3>
            <ul className="space-y-4">
                {[
                    "Quer nova fonte de renda",
                    "Está negativado ou conhece quem está",
                    "Quer atuar no mercado de crédito",
                    "Quer estruturar operação digital",
                    "Busca faturar 10K+ nos próximos meses"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>

        {/* Not For Whom */}
        <div className="bg-[#0f0f0f] p-8 rounded-2xl border border-red-900/30 shadow-[0_0_30px_rgba(255,0,0,0.05)]">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <XCircle className="text-red-500" /> Pra quem NÃO é
            </h3>
            <ul className="space-y-4">
                {[
                    "Quer dinheiro fácil",
                    "Não quer aprender",
                    "Busca promessa milagrosa",
                    "Não quer lidar com pessoas"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                        <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;