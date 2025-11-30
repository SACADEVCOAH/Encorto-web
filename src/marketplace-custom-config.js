/*
 * Filtros y orden para EnCorto (Delivery)
 */

export const filters = [
  // ✂️ Si NO usas calendario para comida, puedes comentar este bloque de fechas
  // {
  //   id: 'dates',
  //   label: 'Fechas',
  //   type: 'BookingDateRangeFilter',
  //   group: 'primary',
  //   queryParamNames: ['dates'],
  //   config: {},
  // },

  {
    id: 'price',
    label: 'Precio',
    type: 'PriceFilter',
    group: 'primary',
    queryParamNames: ['price'],
    config: { min: 0, max: 2000, step: 5 },
  },

  {
    id: 'keyword',
    label: 'Buscar',
    type: 'KeywordFilter',
    group: 'primary',
    queryParamNames: ['keywords'],
    config: {},
  },

  // Categoría principal (lo que antes era “sauna type”)
  {
    id: 'category',
    label: 'Categoría',
    type: 'SelectSingleFilter',
    group: 'secondary',
    queryParamNames: ['pub_category'],
    config: {
      options: [
        { key: 'alimentos', label: 'Alimentos' },
        { key: 'super', label: 'Súper' },
        { key: 'farmacia', label: 'Farmacia' },
        { key: 'enviar', label: 'Enviar artículos' },
        { key: 'motomandado', label: 'Moto Mandado' },
      ],
    },
  },

  // Ejemplo de multi-selección (opcional)
  // p. ej. tiempos de entrega / promos / pago en efectivo (si lo habilitaras)
  {
    id: 'features',
    label: 'Características',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_features'],
    config: {
      searchMode: 'has_any',
      options: [
        { key: 'envio_express', label: 'Envío express' },
        { key: 'promos', label: 'Promociones' },
        { key: '24h', label: 'Abierto 24h' },
      ],
    },
  },
];

export const sortConfig = {
  active: true,
  queryParamName: 'sort',
  relevanceKey: 'relevance',
  conflictingFilters: ['keyword'],
  options: [
    { key: 'createdAt', label: 'Más nuevos' },
    { key: '-createdAt', label: 'Más antiguos' },
    { key: '-price', label: 'Menor precio' },
    { key: 'price', label: 'Mayor precio' },
    { key: 'relevance', label: 'Relevancia', longLabel: 'Relevancia (búsqueda por texto)' },
  ],
};
