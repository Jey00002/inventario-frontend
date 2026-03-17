import { useEffect, useState } from "react";
import { getProducts, createProduct, deleteProduct, updateProduct } from "./services/productService";

function ProductPage() {

  const [products, setProducts] = useState([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [editingId, setEditingId] = useState(null);
  const role = localStorage.getItem('role');
  const isAdmin = role === 'ADMIN';

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const saveProduct = async () => {
    const product = {
      description: description,
      price: parseFloat(price),
      stock: parseInt(stock)
    };
    if (editingId) {
      await updateProduct(editingId, product);
      setEditingId(null);
    } else {
      await createProduct(product);
    }
    loadProducts();
    setDescription("");
    setPrice("");
    setStock("");
  };

  const editProduct = (p) => {
    setEditingId(p.id);
    setDescription(p.description);
    setPrice(p.price);
    setStock(p.stock);
  };

  const removeProduct = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-3xl font-bold">Gestión de Productos</h2>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${isAdmin ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-slate-700 text-slate-400'}`}>
            {isAdmin ? 'ADMIN' : 'USER'}
          </span>
        </div>

        {isAdmin && (
          <div className="bg-slate-800 p-6 rounded-xl mb-8 flex gap-4 flex-wrap">
            <input
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-600 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <input
              placeholder="Precio"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-32 bg-slate-900 border border-slate-600 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <input
              placeholder="Existencia"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="w-32 bg-slate-900 border border-slate-600 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={saveProduct}
              className={`font-semibold px-6 py-2 rounded-lg transition-colors text-white ${editingId ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              {editingId ? 'Actualizar' : 'Agregar'}
            </button>
          </div>
        )}

        <div className="bg-slate-800 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-slate-400 text-sm font-medium text-left px-6 py-4">Descripción</th>
                <th className="text-slate-400 text-sm font-medium text-left px-6 py-4">Precio</th>
                <th className="text-slate-400 text-sm font-medium text-left px-6 py-4">Existencia</th>
                {isAdmin && <th className="text-slate-400 text-sm font-medium text-left px-6 py-4">Acciones</th>}
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id} className="border-b border-slate-700 hover:bg-slate-700 transition-colors">
                  <td className="text-white px-6 py-4">{p.description}</td>
                  <td className="text-white px-6 py-4">S/. {p.price}</td>
                  <td className="text-white px-6 py-4">{p.stock}</td>
                  {isAdmin && (
                    <td className="px-6 py-4 flex gap-2">
                      <button onClick={() => editProduct(p)} className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-3 py-1 rounded-lg text-sm transition-colors">
                        Editar
                      </button>
                      <button onClick={() => removeProduct(p.id)} className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded-lg text-sm transition-colors">
                        Eliminar
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default ProductPage;