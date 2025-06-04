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
  <div className="mb-8">
    <h1 className="text-3xl font-bold text-gray-800 mb-2">Consulta de Distritos</h1>
    <p className="text-gray-600">Selecione um distrito para visualizar seus detalhes</p>
  </div>

  {/* Dropdown de seleção */}
  <div className="mb-8">
    <label id='label' className="block text-sm font-medium text-gray-700 mb-3">Distrito</label>
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

  {/* Detalhes do distrito */}
  {selectedId && (
    <div className="space-y-8" id="conte">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Coluna 1 - Informações Básicas */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Informações Básicas</h3>

          <div class='content'>
            <label id='label' className=" text-center block text-sm font-medium text-gray-600 mb-1">Nome do Distrito</label>
            <input
            id='input'
              type="text"
              className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
              value={fields.nome}
              readOnly
            />
          </div>

          <div>
            <label  id='label' className="block text-sm font-medium text-gray-600 mb-1">Área (km²)</label>
            <input
             id='input'
              type="text"
              className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
              value={fields.area_km2}
              readOnly
            />
          </div>
        </div>

        {/* Coluna 2 - População Geral */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">População Geral</h3>

          <div>
            <label id='label' className="block text-sm font-medium text-gray-600 mb-1">Total</label>
            <input
             id='input'
              type="text"
              className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
              value={fields.populacao_total}
              readOnly
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label id='label' className="block text-sm font-medium text-gray-600 mb-1">Masculino</label>
              <input
               id='input'
                type="text"
                className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                value={fields.masculino}
                readOnly
              />
            </div>
            <div>
              <label id='label' className="block text-sm font-medium text-gray-600 mb-1">Feminino</label>
              <input
               id='input'
                type="text"
                className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                value={fields.feminino}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Coluna 3 - Zona Urbana */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Zona Urbana</h3>

          <div>
            <label id='label' className="block text-sm font-medium text-gray-600 mb-1">Total</label>
            <input
             id='input'
              type="text"
              className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
              value={fields.urbano_total}
              readOnly
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label id='label' className="block text-sm font-medium text-gray-600 mb-1">Masculino</label>
              <input
               id='input'
                type="text"
                className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                value={fields.urbano_masculino}
                readOnly
              />
            </div>
            <div>
              <label  id='label' className="block text-sm font-medium text-gray-600 mb-1">Feminino</label>
              <input
               id='input'
                type="text"
                className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                value={fields.urbano_feminino}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* Segunda linha - Zona Rural */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4 md:col-span-3">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Zona Rural</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label id='label' className="block text-sm font-medium text-gray-600 mb-1">Total</label>
              <input
               id='input'
                type="text"
                className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                value={fields.rural_total}
                readOnly
              />
            </div>
            <div>
              <label id='label' className="block text-sm font-medium text-gray-600 mb-1">Masculino</label>
              <input
               id='input'
                type="text"
                className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                value={fields.rural_masculino}
                readOnly
              />
            </div>
            <div>
              <label  id='label' className="flex text-lg font-medium text-gray-600 mb-1">Feminino</label>
              <input
               id='input'
                type="text"
                className="w-full px-3 py-2 bg-gray-100 rounded border border-gray-300"
                value={fields.rural_feminino}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

     
    </div>
  )}
</div>
</section>
  );
}