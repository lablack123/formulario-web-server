import React, { useEffect, useState } from 'react';
import './App.css';

export default function DistritoForm() {
  const [distritos, setDistritos] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [fields, setFields] = useState({
    nome: '',
    populacao_total: '',
    masculino: '',
    feminino: '',
    urbano_total: '',
    urbano_masculino: '',
    urbano_feminino: '',
    rural_total: '',
    rural_masculino: '',
    rural_feminino: '',
    area_km2: ''
  });

  useEffect(() => {
    fetch('https://distrito-web-service-json.onrender.com/api/distritos/')
      .then(res => res.json())
      .then(data => setDistritos(data))
      .catch(err => console.error('Erro ao buscar distritos:', err));
  }, []);

  useEffect(() => {
    const distrito = distritos.find(d => String(d.id) === selectedId);
    if (distrito) {
      setFields({
        nome: distrito.nome,
        populacao_total: distrito.populacao_total,
        masculino: distrito.masculino,
        feminino: distrito.feminino,
        urbano_total: distrito.urbano.total,
        urbano_masculino: distrito.urbano.masculino,
        urbano_feminino: distrito.urbano.feminino,
        rural_total: distrito.rural.total,
        rural_masculino: distrito.rural.masculino,
        rural_feminino: distrito.rural.feminino,
        area_km2: distrito.area_km2
      });
    } else {
      setFields({
        nome: '', populacao_total: '', masculino: '', feminino: '',
        urbano_total: '', urbano_masculino: '', urbano_feminino: '',
        rural_total: '', rural_masculino: '', rural_feminino: '',
        area_km2: ''
      });
    }
  }, [selectedId, distritos]);




  return (
    <section class='secao' id='conte'>
      <div className="p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-lg">
        {/* Título principal */}
        <div className="mb-8" id="titulo">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Consulta de Distritos</h1>
          <p className="text-gray-600">Selecione um distrito para visualizar seus detalhes</p>
          <div className="mb-8" id="selection">
            {/* <label id='label' className="block text-sm font-medium text-gray-700 mb-3">Distrito</label> */}
            <select
              className=" w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              value={selectedId}
              onChange={e => setSelectedId(e.target.value)}
            >
              <option value="">Selecione um distrito...</option>
              {distritos.map(d => (
                <option key={d.id} value={d.id}>{d.nome}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Dropdown de seleção */}

        {/* Detalhes do distrito */}
        {selectedId && (
          <div className="space-y-8" id="conte">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inputs alinhados em duas colunas */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Nome do Distrito</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                    value={fields.nome}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Área (km²)</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                    value={fields.area_km2}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">População Total</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                    value={fields.populacao_total}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Masculino</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                    value={fields.masculino}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Feminino</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                    value={fields.feminino}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Zona Urbana - Total</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                    value={fields.urbano_total}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Zona Urbana - Masculino</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                    value={fields.urbano_masculino}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Zona Urbana - Feminino</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                    value={fields.urbano_feminino}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Zona Rural - Total</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                    value={fields.rural_total}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Zona Rural - Masculino</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                    value={fields.rural_masculino}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Zona Rural - Feminino</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                    value={fields.rural_feminino}
                    readOnly
                  />
                </div>
              </div>

              <div className="footer" >
                <p className="text-gray-500 text-sm mt-4">
                  Dados fornecidos pelo Web Service de Distritos. Para mais informações, consulte a documentação.
                </p>
              </div>
                
            </div>
          </div>
        )}
      </div>
    </section>
  );
}