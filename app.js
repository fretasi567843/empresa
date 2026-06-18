const materials = [
  // Mão de obra
  ["Mão de obra profissional - 24,60", "Mão de obra", 24.60, "hora"],
  ["Mão de obra profissional - 49,20", "Mão de obra", 49.20, "hora"],
  ["Deslocação", "Mão de obra", 30.00, "un"],

  // Tubos
  ["30x20", "Tubos quadrados", 13.50, "m/l"],
  ["80x40", "Tubos quadrados", 26.00, "m/l"],
  ["60x40", "Tubos quadrados", 23.00, "m/l"],
  ["50x20", "Tubos quadrados", 17.65, "m/l"],
  ["30", "Tubos quadrados", 13.00, "m/l"],
  ["35", "Tubos quadrados", 18.20, "m/l"],
  ["40", "Tubos quadrados", 18.50, "m/l"],
  ["16", "Tubos quadrados", 7.50, "m/l"],
  ["50x30", "Tubos quadrados", 18.00, "m/l"],
  ["150x150x3", "Tubos quadrados", 176.00, "m/l"],
  ["60x20", "Tubos quadrados", 20.00, "m/l"],
  ["60x60", "Tubos quadrados", 28.50, "m/l"],
  ["50x50", "Tubos quadrados", 24.50, "m/l"],
  ["100x50x3mm", "Tubos quadrados", 47.00, "m/l"],
  ["80x40x2mm", "Tubos quadrados", 33.40, "m/l"],
  ["200x200x4mm", "Tubos quadrados", 213.00, "m/l"],
  ["40x20", "Tubos quadrados", 11.50, "m/l"],
  ["25", "Tubos quadrados", 11.50, "m/l"],
  ["100x100x4mm", "Tubos quadrados", 96.00, "m/l"],
  ["80x80x3mm", "Tubos quadrados", 51.00, "m/l"],
  ["30x30x1.5", "Tubos quadrados", 13.00, "m/l"],
  ["60", "Tubos quadrados", 29.00, "m/l"],
  ["Tubo 35 inox", "Tubos quadrados", 15.00, "m/l"],
  ["Tubo 15", "Tubos quadrados", 11.00, "m/l"],
  ["120x120x3", "Tubos quadrados", 151.00, "m/l"],
  ["40", "Tubos redondos", 16.65, "m/l"],
  ["60", "Tubos redondos", 44.00, "m/l"],
  ["90x3mm", "Tubos redondos", 65.00, "m/l"],
  ["76x2.5mm", "Tubos redondos", 58.00, "m/l"],
  ["16x1.5", "Tubos redondos", 20.00, "m/l"],
  ["16", "Tubos redondos", 7.00, "m/l"],
  ["20", "Tubos redondos", 8.50, "m/l"],
  ["Ø 30", "Tubos redondos", 15.00, "m/l"],
  ["Ø 40", "Tubos redondos", 19.50, "m/l"],
  ["Tubo redondo 50", "Inox Mercanox", 19.50, "m/l"],
  ["Tubo redondo 40", "Inox Mercanox", 18.00, "m/l"],
  ["Tubo redondo 30", "Inox Mercanox", 19.50, "m/l"],
  ["Tubo redondo 20", "Inox Mercanox", 12.50, "m/l"],
  ["Espelho redondo 40", "Inox Mercanox", 1.85, "un"],
  ["Vergalhão 10 com 3m", "Inox Mercanox", 9.00, "un"],

  // Perfis e barras
  ["U 60x6", "Cantoneira", 0, "m/l"],
  ["Cantoneira 70x8", "Cantoneira", 0, "m/l"],
  ["Cantoneira 40x4", "Cantoneira", 20.00, "m/l"],
  ["Cantoneira 50x5", "Cantoneira", 27.50, "m/l"],
  ["Cantoneira 50x6", "Cantoneira", 44.00, "m/l"],
  ["Cantoneira 35x5", "Cantoneira", 21.00, "m/l"],
  ["Cantoneira 25x5", "Cantoneira", 12.00, "m/l"],
  ["Cantoneira 25x6", "Cantoneira", 20.00, "m/l"],
  ["Cantoneira 45x5", "Cantoneira", 23.00, "m/l"],
  ["Cantoneira 30x3", "Cantoneira", 11.50, "m/l"],
  ["Cantoneira 15x3", "Cantoneira", 10.50, "m/l"],
  ["Cantoneira 20x20x2mm", "Cantoneira", 10.00, "m/l"],
  ["Cantoneira 30x30x3mm", "Cantoneira", 15.00, "m/l"],
  ["Cantoneira 20x20x1.5mm", "Cantoneira", 10.00, "m/l"],
  ["Barra 150x10", "Barras", 105.00, "m/l"],
  ["Barra 40x8", "Barras", 23.50, "m/l"],
  ["Barra 30x5", "Barras", 12.00, "m/l"],
  ["Barra 40x10", "Barras", 23.00, "m/l"],
  ["Barra 200x10", "Barras", 120.00, "m/l"],
  ["Barra 150x5", "Barras", 77.00, "m/l"],
  ["Barra 50x8", "Barras", 29.00, "m/l"],
  ["Barra 25x5", "Barras", 11.00, "m/l"],
  ["Barra 40x10", "Barras", 24.00, "m/l"],
  ["Barra 200x10", "Barras", 140.00, "m/l"],
  ["Barra 40x4", "Barras", 19.00, "m/l"],
  ["Barra 80x5", "Barras", 38.00, "m/l"],
  ["Barra 30x10", "Barras", 27.00, "m/l"],
  ["Barra 50x10", "Barras", 34.00, "m/l"],
  ["Barra 25x10", "Barras", 16.00, "m/l"],
  ["Barra 5x40", "Barras", 18.00, "m/l"],
  ["IP 180", "IP", 161.00, "m/l"],
  ["IP 200", "IP", 180.00, "m/l"],
  ["IP 120", "IP", 140.00, "m/l"],
  ["IP 240", "IP", 540.00, "m/l"],
  ["IP 220", "IP", 266.00, "m/l"],
  ["U 200", "UPN", 455.00, "m/l"],
  ["U 100", "UPN", 168.00, "m/l"],
  ["U 160", "UPN", 302.74, "m/l"],
  ["U 220", "UPN", 520.00, "m/l"],
  ["Perfil T R15 3 abas 35", "Tubo PT", 26.50, "m/l"],
  ["Perfil T R15 1 aba 35", "Tubo PT", 31.00, "m/l"],

  // Chapas
  ["Chapa 2000x1000x1.5", "Chapas", 39.00, "un"],
  ["Chapa 2500x1250x1.5", "Chapas", 65.00, "un"],
  ["Chapa 3000x1500x1.5", "Chapas", 80.00, "un"],
  ["Chapa 2000x1000x1.5", "Chapas", 43.00, "un"],
  ["Chapa 2500x1250x1.5", "Chapas", 67.00, "un"],
  ["Chapa 3000x1500x1.5", "Chapas", 98.00, "un"],
  ["Chapa 2000x1000x2", "Chapas", 55.00, "un"],
  ["Chapa alumínio 2mm 3000x1500", "Chapas", 175.00, "un"],
  ["Chapa 5mm x 2", "Chapas", 120.00, "un"],
  ["Chapa ondulada largura 1100", "Chapas", 14.10, "m/l"],
  ["Chapa canelada baixa", "Chapas", 13.00, "m/l"],

  // Construção e acessórios
  ["Varão 30", "Vergalhão", 0, "m/l"],
  ["Varão 16 quadrado", "Vergalhão", 14.80, "m/l"],
  ["Varão 20 redondo", "Vergalhão", 23.00, "m/l"],
  ["Varão 16 redondo", "Vergalhão", 12.50, "m/l"],
  ["Varão 10x10", "Vergalhão", 10.70, "m/l"],
  ["M8 roscado", "Varão roscado", 2.00, "m/l"],
  ["M16 roscado", "Varão roscado", 3.00, "m/l"],
  ["Painel branco 2500x1000", "Painéis 3D", 31.80, "un"],
  ["Fonte vedação branco 4000x1000", "Painéis 3D", 24.40, "un"],
  ["PVC 110", "PVC", 14.00, "un"],
  ["Curva 110", "PVC", 4.85, "un"],
  ["Pê 90", "PVC", 12.00, "un"],
  ["Curva 90", "PVC", 2.00, "un"],
  ["Boquilha 90 cinza", "PVC", 0, "un"],
  ["Abraçadeira 90", "PVC", 1.50, "un"],
  ["PVC 75", "PVC", 8.30, "un"],
  ["Curva 75", "PVC", 1.40, "un"],
  ["Boquilha 75 cinza", "PVC", 0, "un"],
  ["PVC 110", "PVC", 25.00, "un"],
  ["Radiô axial final furo 75", "Rodízios", 3.10, "un"],
  ["Radiô axial giratório c/ travão", "Rodízios", 4.10, "un"],
  ["Radiô plástico correr 60", "Rodízios", 6.00, "un"],
  ["MDF 16mm 3.66x1.33", "MDF", 50.00, "placa"],
  ["MDF 22mm 2.75x1.85", "MDF", 92.00, "placa"],

  // Caldeiros e consumíveis
  ["Calote máquina alumínio", "Vieira Caldeiros", 11.00, "un"],
  ["Condutor em alumínio", "Vieira Caldeiros", 11.00, "un"],
  ["Suporte calhas para painel 40mm", "Vieira Caldeiros", 4.20, "un"],
  ["Suporte calhas tubo normal", "Vieira Caldeiros", 7.00, "un"],
  ["Tubo alumínio para calhas", "Vieira Caldeiros", 7.00, "m/l"],
  ["Roda calhas", "Vieira Caldeiros", 3.00, "un"],
  ["Fixador em alumínio", "Vieira Caldeiros", 1.00, "un"],
  ["Capitel", "Vieira Caldeiros", 16.25, "un"],
  ["Motor teto com cremalheira", "Motores", 290.00, "un"],
  ["Motor braços Unico 400", "Motores", 400.00, "un"],
  ["Motor braços Unico 600", "Motores", 480.00, "un"],
  ["Motor correr Bravo 500", "Motores", 450.00, "un"],
  ["Motor correr 800K", "Motores", 400.00, "un"],
  ["Comando", "Motores", 30.00, "un"],
  ["Cremalheira plástica", "Motores", 10.00, "m/l"],
  ["Cremalheira metal", "Motores", 25.00, "m/l"],
  ["Fotocélulas", "Motores", 20.00, "par"],

  // Rucofer
  ["Painel branco malha 40mm", "Rucofer", 32.00, "un"],
  ["Painel malha verde 40mm", "Rucofer", 29.50, "un"],
  ["Painel branco 3 ondas 30mm", "Rucofer", 23.80, "un"],
  ["Painel verde 3 ondas 30mm", "Rucofer", 22.50, "un"],
  ["Painel verde 5 ondas 30mm", "Rucofer", 26.00, "un"],
  ["Tapa juntas policarbonato", "Rucofer", 24.20, "un"],
  ["Painel fechado Parafuso à vista", "Rucofer", 22.50, "un"],
  ["Painel fechado Parafuso oculto", "Rucofer", 25.00, "un"],
  ["Chapa perfilada cobertura", "Rucofer", 14.50, "m/l"],
  ["Chapa policarbonato cristal", "Rucofer", 21.45, "m/l"],
  ["Cumeeira 4 águas", "Rucofer", 14.38, "un"],
  ["Rufos laterais", "Rucofer", 10.84, "m/l"],
  ["Tapa juntas painel", "Rucofer", 11.50, "un"],
  ["Calha sanduíche", "Rucofer", 13.00, "m/l"],
  ["Calha metálica", "Rucofer", 16.50, "m/l"]
].map(([name, category, price, unit], id) => ({ id, name, category, price, unit }));

const state = {
  items: [],
  attachments: [],
  editingId: null,
  number: createQuoteNumber(),
  selectedMaterialCategory: null,
  selectedMaterialId: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const loginCredentials = {
  user: "inoxferro@gmail.com",
  password: "claudia26"
};
const dataAreaPassword = "2317";
const money = (value) => new Intl.NumberFormat("pt-PT", {
  style: "currency", currency: "EUR"
}).format(value);

function createQuoteNumber() {
  const year = new Date().getFullYear();
  const saved = getSavedQuotes();
  const sequence = String(saved.length + 1).padStart(4, "0");
  return `${year}/${sequence}`;
}

function getSavedQuotes() {
  try {
    return JSON.parse(localStorage.getItem("inox-ferro-quotes") || "[]");
  } catch {
    return [];
  }
}

function getEmployees() {
  try {
    return JSON.parse(localStorage.getItem("inox-ferro-employees") || "[]");
  } catch {
    return [];
  }
}

function setEmployees(employees) {
  localStorage.setItem("inox-ferro-employees", JSON.stringify(employees));
}

function getFinanceData() {
  try {
    const data = JSON.parse(localStorage.getItem("inox-ferro-finance") || "{}");
    return {
      payments: data.payments && typeof data.payments === "object" ? data.payments : {},
      expenses: Array.isArray(data.expenses) ? data.expenses : []
    };
  } catch {
    return { payments: {}, expenses: [] };
  }
}

function setFinanceData(data) {
  localStorage.setItem("inox-ferro-finance", JSON.stringify(data));
}

function setSavedQuotes(quotes) {
  try {
    localStorage.setItem("inox-ferro-quotes", JSON.stringify(quotes));
    return true;
  } catch {
    return false;
  }
}

function populateCategories() {
  const categories = [...new Set(materials.map(item => item.category))]
    .sort((a, b) => a.localeCompare(b, "pt"));
  const selected = $("#categoryFilter").value;
  $("#categoryFilter").innerHTML =
    '<option value="">Todas as categorias</option>' +
    categories.map(category => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("");
  $("#categoryFilter").value = categories.includes(selected) ? selected : "";
}

function renderCatalog() {
  const search = normalize($("#searchInput").value);
  const category = $("#categoryFilter").value;
  const filtered = materials.filter(item =>
    (!category || item.category === category) &&
    (!search || normalize(`${item.name} ${item.category}`).includes(search))
  );

  $("#resultsCount").innerHTML = `<strong>${filtered.length}</strong> <span>MATERIAIS</span>`;
  $("#catalogEmpty").classList.toggle("hidden", filtered.length > 0);
  $("#catalogBody").innerHTML = filtered.map(item => `
    <tr>
      <td class="material-name">${escapeHtml(item.name)}</td>
      <td class="material-category" title="${escapeHtml(item.category)}">${escapeHtml(item.category.toUpperCase())}</td>
      <td class="material-price">${item.price ? money(item.price) : "A definir"}<span class="unit">/${escapeHtml(item.unit)}</span></td>
      <td><button class="add-btn" data-id="${item.id}" title="Adicionar ${escapeHtml(item.name)}">+</button></td>
    </tr>
  `).join("");
}

function addItem(id) {
  const existing = state.items.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    const material = materials.find(item => item.id === id);
    state.items.push({ ...material, qty: 1 });
  }
  renderQuote();
  showToast("Material adicionado ao orçamento.");
}

function renderQuote() {
  const container = $("#quoteItems");
  $("#quotePlaceholder").classList.toggle("hidden", state.items.length > 0);
  container.querySelectorAll(".quote-item").forEach(item => item.remove());

  $("#quoteAttachments").insertAdjacentHTML("beforebegin", state.items.map(item => `
    <div class="quote-item" data-id="${item.id}">
      <div class="quote-item-name" title="${escapeHtml(item.name)}">
        ${escapeHtml(item.name)}
        <small>${escapeHtml(item.category)} · ${money(item.price)}/${escapeHtml(item.unit)}</small>
      </div>
      <div class="qty-control">
        <button data-action="minus" aria-label="Diminuir">−</button>
        <input data-action="qty" type="number" min="0.01" step="0.01" value="${item.qty}">
        <button data-action="plus" aria-label="Aumentar">+</button>
      </div>
      <div class="item-total">${money(item.price * item.qty)}</div>
      <button class="remove-btn" data-action="remove" aria-label="Remover">×</button>
    </div>
  `).join(""));

  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const taxRate = Number($("#taxRate").value) || 0;
  const tax = subtotal * taxRate / 100;
  $("#subtotal").textContent = money(subtotal);
  $("#taxAmount").textContent = money(tax);
  $("#total").textContent = money(subtotal + tax);
  renderAttachments();
}

function renderAttachments() {
  const container = $("#quoteAttachments");
  container.classList.toggle("hidden", state.attachments.length === 0);
  container.innerHTML = state.attachments.map((attachment, index) => `
    <figure class="quote-attachment">
      <img src="${attachment.data}" alt="${escapeHtml(attachment.name || `Anexo ${index + 1}`)}">
      <button class="remove-attachment" data-attachment-index="${index}" title="Remover anexo">×</button>
    </figure>
  `).join("");
}

async function addAttachments(files) {
  const images = [...files].filter(file => file.type.startsWith("image/"));
  if (!images.length) return;
  const available = Math.max(0, 6 - state.attachments.length);
  if (!available) {
    showToast("O limite é de 6 imagens por orçamento.");
    return;
  }

  try {
    const compressed = await Promise.all(images.slice(0, available).map(compressImage));
    state.attachments.push(...compressed);
    renderAttachments();
    showToast(`${compressed.length} ${compressed.length === 1 ? "imagem adicionada" : "imagens adicionadas"}.`);
  } catch {
    showToast("Não foi possível adicionar uma das imagens.");
  }
}

function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const image = new Image();
      image.onerror = reject;
      image.onload = () => {
        const maxSize = 1200;
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve({
          name: file.name,
          data: canvas.toDataURL("image/jpeg", 0.7)
        });
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function changeQuantity(id, action, value) {
  const item = state.items.find(entry => entry.id === id);
  if (!item) return;
  if (action === "plus") item.qty += 1;
  if (action === "minus") item.qty = Math.max(0.01, item.qty - 1);
  if (action === "qty") item.qty = Math.max(0.01, Number(value) || 0.01);
  renderQuote();
}

function removeItem(id) {
  state.items = state.items.filter(item => item.id !== id);
  renderQuote();
}

function quotePayload() {
  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const taxRate = Number($("#taxRate").value) || 0;
  return {
    id: state.editingId || crypto.randomUUID(),
    number: state.number,
    createdAt: new Date().toISOString(),
    client: $("#clientName").value.trim(),
    contact: $("#clientContact").value.trim(),
    notes: $("#notes").value.trim(),
    attachments: state.attachments,
    taxRate,
    items: state.items,
    subtotal,
    total: subtotal * (1 + taxRate / 100)
  };
}

function saveQuote() {
  if (!$("#clientName").value.trim()) {
    $("#clientName").focus();
    showToast("Indica o nome do cliente.");
    return;
  }
  if (!state.items.length) {
    showToast("Adiciona pelo menos um material.");
    return;
  }

  const payload = quotePayload();
  payload.createdAt = new Date().toISOString();
  const saved = getSavedQuotes();
  const index = saved.findIndex(quote => quote.id === payload.id);
  payload.status = index >= 0 ? saved[index].status || "processing" : "processing";
  if (index >= 0) saved[index] = payload;
  else saved.unshift(payload);
  if (!setSavedQuotes(saved)) {
    showToast("As imagens ocupam demasiado espaço. Remove um anexo e tenta novamente.");
    return;
  }
  state.editingId = payload.id;
  $("#quoteStatus").textContent = "GUARDADO";
  updateSavedCount();
  showToast("Orçamento guardado localmente.");
}

function resetQuote() {
  state.items = [];
  state.attachments = [];
  state.editingId = null;
  state.number = createQuoteNumber();
  $("#clientName").value = "";
  $("#clientContact").value = "";
  $("#notes").value = "";
  $("#taxRate").value = 23;
  $("#attachmentInput").value = "";
  $("#quoteStatus").textContent = "NOVO";
  renderQuote();
  switchView("quotes");
}

function renderSaved() {
  const saved = getSavedQuotes();
  const search = normalize($("#savedSearchInput").value);
  const filtered = saved.filter(quote =>
    !search || normalize(quote.client || "").includes(search)
  );
  $("#savedResultsCount").textContent = `${filtered.length} ${filtered.length === 1 ? "orçamento" : "orçamentos"}`;
  $("#savedEmpty").textContent = saved.length
    ? "Nenhum orçamento encontrado para este cliente."
    : "Ainda não existem orçamentos guardados.";
  $("#savedEmpty").classList.toggle("hidden", filtered.length > 0);
  $("#savedGrid").innerHTML = filtered.map(quote => `
    <tr>
      <td class="saved-client">
        <strong>${escapeHtml(quote.client || "Sem cliente")}</strong>
        <small>ORÇAMENTO ${escapeHtml(quote.number || "—")}</small>
      </td>
      <td class="saved-contact">${escapeHtml(quote.contact || "—")}</td>
      <td class="saved-materials">${quote.items.length} ${quote.items.length === 1 ? "material" : "materiais"}</td>
      <td class="saved-date">${new Date(quote.createdAt).toLocaleDateString("pt-PT")}</td>
      <td class="saved-total">${money(quote.total)}</td>
      <td>
        <select class="saved-status ${quote.status === "validated" ? "validated" : "processing"}" data-quote-status="${quote.id}">
          <option value="processing" ${quote.status !== "validated" ? "selected" : ""}>Em processamento</option>
          <option value="validated" ${quote.status === "validated" ? "selected" : ""}>Validado</option>
        </select>
      </td>
      <td class="saved-actions">
        <button class="open-saved" data-load="${quote.id}" title="Abrir orçamento">ABRIR</button>
        <button class="delete-saved" data-delete="${quote.id}" title="Eliminar orçamento">ELIMINAR</button>
      </td>
    </tr>
  `).join("");
}

function loadQuote(id) {
  const quote = getSavedQuotes().find(item => item.id === id);
  if (!quote) return;
  state.editingId = quote.id;
  state.number = quote.number;
  state.items = quote.items;
  state.attachments = quote.attachments || [];
  $("#clientName").value = quote.client;
  $("#clientContact").value = quote.contact;
  $("#notes").value = quote.notes;
  $("#taxRate").value = quote.taxRate;
  $("#quoteStatus").textContent = "GUARDADO";
  renderQuote();
  switchView("quotes");
}

function deleteQuote(id) {
  setSavedQuotes(getSavedQuotes().filter(quote => quote.id !== id));
  if (state.editingId === id) state.editingId = null;
  renderSaved();
  updateSavedCount();
  showToast("Orçamento eliminado.");
}

function updateQuoteStatus(id, status) {
  const saved = getSavedQuotes();
  const quote = saved.find(item => item.id === id);
  if (!quote || !["processing", "validated"].includes(status)) return;
  quote.status = status;
  setSavedQuotes(saved);
  renderSaved();
  showToast(status === "validated" ? "Orçamento validado." : "Orçamento em processamento.");
}

function getMaterialCategories() {
  return [...new Set(materials.map(item => item.category))]
    .sort((a, b) => a.localeCompare(b, "pt"));
}

function setDefaultStatisticsMonth() {
  if ($("#statisticsMonth").value) return;
  const now = new Date();
  $("#statisticsMonth").value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

function renderStatistics() {
  setDefaultStatisticsMonth();
  const selectedMonth = $("#statisticsMonth").value;
  const monthlyQuotes = getSavedQuotes().filter(quote =>
    String(quote.createdAt || "").slice(0, 7) === selectedMonth
  );
  const subtotal = monthlyQuotes.reduce((sum, quote) => sum + (Number(quote.subtotal) || 0), 0);
  const revenue = monthlyQuotes.reduce((sum, quote) => sum + (Number(quote.total) || 0), 0);
  const tax = revenue - subtotal;
  const clients = new Set(monthlyQuotes
    .map(quote => normalize(quote.client || ""))
    .filter(Boolean));
  const monthDate = selectedMonth ? new Date(`${selectedMonth}-01T12:00:00`) : new Date();
  const monthLabel = monthDate.toLocaleDateString("pt-PT", { month: "long", year: "numeric" });

  $("#statsRevenue").textContent = money(revenue);
  $("#statsSubtotal").textContent = money(subtotal);
  $("#statsTax").textContent = money(tax);
  $("#statsQuoteCount").textContent = monthlyQuotes.length;
  $("#statsClientCount").textContent = clients.size;
  $("#statsAverage").textContent = `Média: ${money(monthlyQuotes.length ? revenue / monthlyQuotes.length : 0)}`;
  $("#statsMonthLabel").textContent = monthLabel;
  $("#statsTableCount").textContent = `${monthlyQuotes.length} ${monthlyQuotes.length === 1 ? "orçamento" : "orçamentos"}`;
  $("#statisticsEmpty").classList.toggle("hidden", monthlyQuotes.length > 0);
  $("#statisticsTableBody").innerHTML = monthlyQuotes.map(quote => {
    const quoteSubtotal = Number(quote.subtotal) || 0;
    const quoteTotal = Number(quote.total) || 0;
    return `
      <tr>
        <td>${escapeHtml(quote.client || "Sem cliente")}</td>
        <td>${escapeHtml(quote.contact || "—")}</td>
        <td>${new Date(quote.createdAt).toLocaleDateString("pt-PT")}</td>
        <td>${money(quoteSubtotal)}</td>
        <td>${money(quoteTotal - quoteSubtotal)}</td>
        <td>${money(quoteTotal)}</td>
      </tr>
    `;
  }).join("");
}

function isDataAreaUnlocked() {
  return sessionStorage.getItem("inox-ferro-data-unlocked") === "true";
}

function renderDataAccess() {
  const unlocked = isDataAreaUnlocked();
  $("#dataLock").classList.toggle("hidden", unlocked);
  $("#dataContent").classList.toggle("hidden", !unlocked);
  if (unlocked) renderEmployees();
  else setTimeout(() => $("#dataPassword").focus(), 0);
}

function renderEmployees() {
  const employees = getEmployees();
  const search = normalize($("#employeeSearch").value);
  const filtered = employees.filter(employee =>
    !search || normalize(`${employee.name} ${employee.role} ${employee.contact}`).includes(search)
  );
  const roles = new Set(employees.map(employee => normalize(employee.role)).filter(Boolean));

  $("#employeeTotal").textContent = employees.length;
  $("#employeeActive").textContent = employees.filter(employee => employee.status === "Ativo").length;
  $("#employeeDepartments").textContent = roles.size;
  $("#employeeEmpty").textContent = employees.length
    ? "Nenhum funcionário corresponde à pesquisa."
    : "Ainda não existem funcionários registados.";
  $("#employeeEmpty").classList.toggle("hidden", filtered.length > 0);
  $("#employeeTableBody").innerHTML = filtered.map(employee => `
    <tr>
      <td>${escapeHtml(employee.name)}</td>
      <td>${escapeHtml(employee.role || "—")}</td>
      <td>${escapeHtml(employee.contact || "—")}</td>
      <td><span class="employee-status ${employee.status === "Ativo" ? "active" : ""}">${escapeHtml(employee.status)}</span></td>
      <td class="employee-actions">
        <button data-edit-employee="${employee.id}" title="Editar">✎</button>
        <button class="delete-employee" data-delete-employee="${employee.id}" title="Eliminar">×</button>
      </td>
    </tr>
  `).join("");
}

function resetEmployeeForm() {
  $("#employeeForm").reset();
  $("#employeeEditId").value = "";
  $("#employeeFormTitle").textContent = "NOVO FUNCIONÁRIO";
  $("#cancelEmployeeEdit").classList.add("hidden");
  $("#employeeStatus").value = "Ativo";
}

function saveEmployee(event) {
  event.preventDefault();
  const employees = getEmployees();
  const editId = $("#employeeEditId").value;
  const employee = {
    id: editId || crypto.randomUUID(),
    name: $("#employeeName").value.trim(),
    role: $("#employeeRole").value.trim(),
    contact: $("#employeeContact").value.trim(),
    nif: $("#employeeNif").value.trim(),
    startDate: $("#employeeStartDate").value,
    status: $("#employeeStatus").value,
    notes: $("#employeeNotes").value.trim()
  };
  if (!employee.name) return;

  const index = employees.findIndex(item => item.id === employee.id);
  if (index >= 0) employees[index] = employee;
  else employees.unshift(employee);
  setEmployees(employees);
  resetEmployeeForm();
  renderEmployees();
  showToast(index >= 0 ? "Funcionário atualizado." : "Funcionário guardado.");
}

function editEmployee(id) {
  const employee = getEmployees().find(item => item.id === id);
  if (!employee) return;
  $("#employeeEditId").value = employee.id;
  $("#employeeName").value = employee.name;
  $("#employeeRole").value = employee.role;
  $("#employeeContact").value = employee.contact;
  $("#employeeNif").value = employee.nif;
  $("#employeeStartDate").value = employee.startDate;
  $("#employeeStatus").value = employee.status;
  $("#employeeNotes").value = employee.notes;
  $("#employeeFormTitle").textContent = "EDITAR FUNCIONÁRIO";
  $("#cancelEmployeeEdit").classList.remove("hidden");
  $("#employeeName").focus();
}

function deleteEmployee(id) {
  const employee = getEmployees().find(item => item.id === id);
  if (!employee || !confirm(`Eliminar o funcionário "${employee.name}"?`)) return;
  setEmployees(getEmployees().filter(item => item.id !== id));
  if ($("#employeeEditId").value === id) resetEmployeeForm();
  renderEmployees();
  showToast("Funcionário eliminado.");
}

function renderFinanceAccess() {
  const unlocked = isDataAreaUnlocked();
  $("#financeLock").classList.toggle("hidden", unlocked);
  $("#financeContent").classList.toggle("hidden", !unlocked);
  if (unlocked) renderFinance();
  else setTimeout(() => $("#financePassword").focus(), 0);
}

function paymentRate(status) {
  return status === "paid" ? 1 : status === "half" ? 0.5 : 0;
}

function renderFinance() {
  const quotes = getSavedQuotes();
  const finance = getFinanceData();
  const search = normalize($("#financeQuoteSearch").value);
  const filteredQuotes = quotes.filter(quote =>
    !search || normalize(quote.client || "").includes(search)
  );

  const quoted = quotes.reduce((sum, quote) => sum + (Number(quote.total) || 0), 0);
  const received = quotes.reduce((sum, quote) => {
    const status = finance.payments[quote.id]?.status || "unpaid";
    return sum + (Number(quote.total) || 0) * paymentRate(status);
  }, 0);
  const paidExpenses = finance.expenses
    .filter(expense => expense.status === "Pago")
    .reduce((sum, expense) => sum + Number(expense.amount), 0);
  const pendingExpenses = finance.expenses
    .filter(expense => expense.status !== "Pago")
    .reduce((sum, expense) => sum + Number(expense.amount), 0);

  $("#financeQuoted").textContent = money(quoted);
  $("#financeReceived").textContent = money(received);
  $("#financeReceivable").textContent = money(quoted - received);
  $("#financePendingExpenses").textContent = money(pendingExpenses);
  $("#financeBalance").textContent = money(received - paidExpenses);
  $("#financeQuotesEmpty").classList.toggle("hidden", filteredQuotes.length > 0);
  $("#financeQuotesBody").innerHTML = filteredQuotes.map(quote => {
    const total = Number(quote.total) || 0;
    const status = finance.payments[quote.id]?.status || "unpaid";
    const rate = paymentRate(status);
    return `
      <tr>
        <td>${escapeHtml(quote.client || "Sem cliente")}</td>
        <td>${new Date(quote.createdAt).toLocaleDateString("pt-PT")}</td>
        <td>${money(total)}</td>
        <td>
          <select class="payment-status-select" data-payment-quote="${quote.id}">
            <option value="unpaid" ${status === "unpaid" ? "selected" : ""}>Não pago</option>
            <option value="half" ${status === "half" ? "selected" : ""}>50% pago</option>
            <option value="paid" ${status === "paid" ? "selected" : ""}>Tudo pago</option>
          </select>
        </td>
        <td>${money(total * rate)}</td>
        <td>${money(total * (1 - rate))}</td>
      </tr>
    `;
  }).join("");

  $("#expensesEmpty").classList.toggle("hidden", finance.expenses.length > 0);
  $("#expensesBody").innerHTML = finance.expenses.map(expense => `
    <tr>
      <td>${escapeHtml(expense.description)}</td>
      <td>${expense.dueDate ? new Date(`${expense.dueDate}T12:00:00`).toLocaleDateString("pt-PT") : "—"}</td>
      <td>${money(Number(expense.amount))}</td>
      <td><span class="expense-state ${expense.status === "Pago" ? "paid" : ""}">${escapeHtml(expense.status)}</span></td>
      <td>
        <button class="expense-action" data-toggle-expense="${expense.id}" title="Alternar estado">✓</button>
        <button class="expense-action delete" data-delete-expense="${expense.id}" title="Eliminar">×</button>
      </td>
    </tr>
  `).join("");
}

function saveExpense(event) {
  event.preventDefault();
  const finance = getFinanceData();
  finance.expenses.unshift({
    id: crypto.randomUUID(),
    description: $("#expenseDescription").value.trim(),
    amount: Number($("#expenseAmount").value),
    dueDate: $("#expenseDueDate").value,
    status: $("#expenseStatus").value
  });
  setFinanceData(finance);
  $("#expenseForm").reset();
  $("#expenseStatus").value = "Pendente";
  renderFinance();
  showToast("Pagamento da empresa registado.");
}

function toggleExpense(id) {
  const finance = getFinanceData();
  const expense = finance.expenses.find(item => item.id === id);
  if (!expense) return;
  expense.status = expense.status === "Pago" ? "Pendente" : "Pago";
  setFinanceData(finance);
  renderFinance();
}

function deleteExpense(id) {
  const finance = getFinanceData();
  finance.expenses = finance.expenses.filter(item => item.id !== id);
  setFinanceData(finance);
  renderFinance();
  showToast("Pagamento eliminado.");
}

function renderMaterialsManager() {
  const categories = getMaterialCategories();
  if (!categories.includes(state.selectedMaterialCategory)) {
    state.selectedMaterialCategory = categories[0] || null;
    state.selectedMaterialId = null;
  }

  $("#categoryList").innerHTML = categories.map(category => {
    const count = materials.filter(item => item.category === category).length;
    return `
      <button class="category-item ${category === state.selectedMaterialCategory ? "active" : ""}"
        data-category="${escapeHtml(category)}">
        ${escapeHtml(category.toUpperCase())}<small>${count}</small>
      </button>
    `;
  }).join("");

  $("#selectedCategoryTitle").textContent =
    state.selectedMaterialCategory?.toUpperCase() || "MATERIAIS";

  const search = normalize($("#materialsSearchInput").value);
  const filtered = materials.filter(item =>
    item.category === state.selectedMaterialCategory &&
    (!search || normalize(item.name).includes(search))
  );

  $("#materialsEmpty").classList.toggle("hidden", filtered.length > 0);
  $("#materialsTableBody").innerHTML = filtered.map(item => `
    <tr data-material-id="${item.id}" class="${item.id === state.selectedMaterialId ? "selected" : ""}">
      <td class="materials-table-name">${escapeHtml(item.name.toUpperCase())}</td>
      <td class="materials-table-price">${item.price ? item.price.toFixed(2) : "A definir"}</td>
      <td class="materials-table-unit">${escapeHtml(item.unit)}</td>
      <td class="materials-table-date">${escapeHtml(item.updated || "—")}</td>
    </tr>
  `).join("");
}

function populateMaterialCategorySelect(selectedCategory, includeNewCategory = true) {
  const categories = getMaterialCategories();
  $("#materialFormCategory").innerHTML = categories.map(category => `
    <option value="${escapeHtml(category)}">${escapeHtml(category)}</option>
  `).join("") + (includeNewCategory ? '<option value="__new__">+ Nova categoria</option>' : "");
  $("#materialFormCategory").value = selectedCategory && categories.includes(selectedCategory)
    ? selectedCategory
    : categories[0] || "__new__";
  toggleNewCategoryField();
}

function toggleNewCategoryField() {
  const isNew = $("#materialFormCategory").value === "__new__";
  $("#newCategoryField").classList.toggle("hidden", !isNew);
  $("#materialFormNewCategory").required = isNew;
}

function openMaterialModal(item = null, forceNewCategory = false) {
  $("#materialForm").reset();
  $("#materialModalTitle").textContent = item ? "EDITAR MATERIAL" : "NOVO MATERIAL";
  $("#materialForm").dataset.editId = item?.id ?? "";
  populateMaterialCategorySelect(item?.category || state.selectedMaterialCategory);
  if (forceNewCategory) $("#materialFormCategory").value = "__new__";
  toggleNewCategoryField();

  if (item) {
    $("#materialFormName").value = item.name;
    $("#materialFormPrice").value = item.price;
    $("#materialFormUnit").value = item.unit;
    if (!$("#materialFormUnit").value) {
      $("#materialFormUnit").insertAdjacentHTML("beforeend",
        `<option value="${escapeHtml(item.unit)}">${escapeHtml(item.unit)}</option>`);
      $("#materialFormUnit").value = item.unit;
    }
  }
  $("#materialModal").classList.remove("hidden");
  setTimeout(() => (forceNewCategory ? $("#materialFormNewCategory") : $("#materialFormName")).focus(), 0);
}

function closeMaterialModal() {
  $("#materialModal").classList.add("hidden");
  $("#materialForm").reset();
  delete $("#materialForm").dataset.editId;
}

function addMaterialCategory() {
  openMaterialModal(null, true);
}

function renameSelectedCategory() {
  const currentCategory = state.selectedMaterialCategory;
  if (!currentCategory) {
    showToast("Seleciona primeiro uma categoria.");
    return;
  }

  const newCategory = prompt("Novo nome da categoria:", currentCategory)?.trim();
  if (!newCategory || newCategory === currentCategory) return;

  const exists = getMaterialCategories().some(category =>
    normalize(category) === normalize(newCategory) && category !== currentCategory
  );
  if (exists) {
    showToast("Já existe uma categoria com esse nome.");
    return;
  }

  materials.forEach(material => {
    if (material.category === currentCategory) material.category = newCategory;
  });
  state.selectedMaterialCategory = newCategory;
  state.selectedMaterialId = null;
  populateCategories();
  renderMaterialsManager();
  renderCatalog();
  showToast("Nome da categoria atualizado.");
}

function addMaterial() {
  openMaterialModal();
}

function editSelectedMaterial() {
  const item = materials.find(material => material.id === state.selectedMaterialId);
  if (!item) {
    showToast("Seleciona primeiro um material.");
    return;
  }
  openMaterialModal(item);
}

function saveMaterialFromForm(event) {
  event.preventDefault();
  const editId = $("#materialForm").dataset.editId;
  const category = $("#materialFormCategory").value === "__new__"
    ? $("#materialFormNewCategory").value.trim()
    : $("#materialFormCategory").value;
  if (!category) return;

  const materialData = {
    name: $("#materialFormName").value.trim(),
    category,
    price: Number($("#materialFormPrice").value),
    unit: $("#materialFormUnit").value,
    updated: new Date().toLocaleDateString("pt-PT")
  };
  if (editId !== "") {
    const item = materials.find(material => material.id === Number(editId));
    if (!item) return;
    Object.assign(item, materialData);
  } else {
    materials.push({
      id: Math.max(-1, ...materials.map(item => item.id)) + 1,
      ...materialData
    });
  }
  state.selectedMaterialCategory = category;
  state.selectedMaterialId = null;
  closeMaterialModal();
  renderMaterialsManager();
  renderCatalog();
  showToast(editId !== "" ? "Material atualizado." : "Material adicionado.");
}

function deleteSelectedMaterial() {
  const index = materials.findIndex(material => material.id === state.selectedMaterialId);
  if (index < 0) {
    showToast("Seleciona primeiro um material.");
    return;
  }
  if (!confirm(`Eliminar "${materials[index].name}"?`)) return;
  materials.splice(index, 1);
  state.selectedMaterialId = null;
  renderMaterialsManager();
  renderCatalog();
  showToast("Material eliminado.");
}

function switchView(view) {
  const leavingConfidentialArea =
    !["data", "finance"].includes(view) ||
    ($(".nav-item.active")?.dataset.view === "data" && view !== "data") ||
    ($(".nav-item.active")?.dataset.view === "finance" && view !== "finance");
  if (leavingConfidentialArea) {
    sessionStorage.removeItem("inox-ferro-data-unlocked");
    $("#dataPassword").value = "";
    $("#financePassword").value = "";
    $("#dataLockError").classList.add("hidden");
    $("#financeLockError").classList.add("hidden");
  }

  $$(".view").forEach(element => element.classList.remove("active"));
  $$(".nav-item").forEach(element => element.classList.toggle("active", element.dataset.view === view));
  $(`#${view}View`).classList.add("active");
  $("#pageTitle").textContent = {
    quotes: "GERAR ORÇAMENTO",
    saved: "ORÇAMENTOS GUARDADOS",
    materials: "GESTÃO DE MATERIAIS",
    statistics: "ESTATÍSTICAS",
    data: "DADOS INTERNOS",
    finance: "FINANÇAS"
  }[view];
  if (view === "saved") renderSaved();
  if (view === "materials") renderMaterialsManager();
  if (view === "statistics") renderStatistics();
  if (view === "data") renderDataAccess();
  if (view === "finance") renderFinanceAccess();
  if (view === "quotes") renderQuote();
  $("#sidebar").classList.remove("open");
}

function exportPdf() {
  if (!state.items.length) {
    showToast("Adiciona materiais antes de guardar o PDF.");
    return;
  }
  showToast('Escolha "Guardar como PDF" e selecione a pasta.');
  setTimeout(() => window.print(), 150);
}

function sendQuote() {
  if (!state.items.length) {
    showToast("Adiciona materiais antes de enviar.");
    return;
  }
  const quote = quotePayload();
  const recipient = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(quote.contact) ? quote.contact : "";
  const items = quote.items.map(item =>
    `- ${item.name}: ${item.qty} ${item.unit} x ${money(item.price)} = ${money(item.price * item.qty)}`
  ).join("\n");
  const subject = `Orçamento Dinis e claudia LDA - ${quote.client || quote.number}`;
  const body = [
    `Olá ${quote.client || ""},`,
    "",
    "Segue o resumo do orçamento da Dinis e claudia LDA:",
    "",
    items,
    "",
    `Subtotal: ${money(quote.subtotal)}`,
    `IVA (${quote.taxRate}%): ${money(quote.total - quote.subtotal)}`,
    `TOTAL: ${money(quote.total)}`,
    quote.notes ? `\nObservações:\n${quote.notes}` : "",
    "",
    "Com os melhores cumprimentos,",
    "Dinis e claudia LDA"
  ].join("\n");
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(gmailUrl, "_blank", "noopener");
}

function normalize(value) {
  return value.toLocaleLowerCase("pt").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function updateSavedCount() {
  $("#savedCount").textContent = getSavedQuotes().length;
}

function updateLoginState() {
  const authenticated = sessionStorage.getItem("inox-ferro-authenticated") === "true";
  $("#loginScreen").classList.toggle("authenticated", authenticated);
  $("#appShell").classList.toggle("auth-locked", !authenticated);
  if (!authenticated) setTimeout(() => $("#loginUser").focus(), 0);
}

$("#loginForm").addEventListener("submit", event => {
  event.preventDefault();
  const valid = $("#loginUser").value.trim().toLowerCase() === loginCredentials.user &&
    $("#loginPassword").value === loginCredentials.password;
  $("#loginError").classList.toggle("hidden", valid);
  if (!valid) return;
  sessionStorage.setItem("inox-ferro-authenticated", "true");
  $("#loginPassword").value = "";
  updateLoginState();
});
$("#logoutBtn").addEventListener("click", () => {
  sessionStorage.removeItem("inox-ferro-authenticated");
  $("#loginForm").reset();
  updateLoginState();
});

$("#catalogBody").addEventListener("click", event => {
  const button = event.target.closest(".add-btn");
  if (button) addItem(Number(button.dataset.id));
});
$("#quoteItems").addEventListener("click", event => {
  const action = event.target.dataset.action;
  if (!action || action === "qty") return;
  const id = Number(event.target.closest(".quote-item").dataset.id);
  if (action === "remove") removeItem(id);
  else changeQuantity(id, action);
});
$("#quoteItems").addEventListener("change", event => {
  if (event.target.dataset.action !== "qty") return;
  const id = Number(event.target.closest(".quote-item").dataset.id);
  changeQuantity(id, "qty", event.target.value);
});
$("#searchInput").addEventListener("input", renderCatalog);
$("#categoryFilter").addEventListener("change", renderCatalog);
$("#taxRate").addEventListener("input", renderQuote);
$("#saveBtn").addEventListener("click", saveQuote);
$("#printBtn").addEventListener("click", () => window.print());
$("#pdfBtn").addEventListener("click", exportPdf);
$("#sendBtn").addEventListener("click", sendQuote);
$("#attachmentInput").addEventListener("change", event => {
  addAttachments(event.target.files);
  event.target.value = "";
});
$("#viewAttachmentsBtn").addEventListener("click", () => {
  if (!state.attachments.length) {
    $("#attachmentInput").click();
    return;
  }
  $("#quoteAttachments").scrollIntoView({ behavior: "smooth", block: "center" });
});
$("#quoteAttachments").addEventListener("click", event => {
  const button = event.target.closest("[data-attachment-index]");
  if (!button) return;
  state.attachments.splice(Number(button.dataset.attachmentIndex), 1);
  renderAttachments();
});
$("#newQuoteBtn").addEventListener("click", resetQuote);
$("#brandHome").addEventListener("click", () => switchView("quotes"));
$("#mobileMenu").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
$$(".nav-item").forEach(button => button.addEventListener("click", () => switchView(button.dataset.view)));
$("#savedGrid").addEventListener("click", event => {
  if (event.target.dataset.load) loadQuote(event.target.dataset.load);
  if (event.target.dataset.delete) deleteQuote(event.target.dataset.delete);
});
$("#savedGrid").addEventListener("change", event => {
  const select = event.target.closest("[data-quote-status]");
  if (select) updateQuoteStatus(select.dataset.quoteStatus, select.value);
});
$("#savedSearchInput").addEventListener("input", renderSaved);
$("#statisticsMonth").addEventListener("change", renderStatistics);
$("#dataUnlockForm").addEventListener("submit", event => {
  event.preventDefault();
  const valid = $("#dataPassword").value === dataAreaPassword;
  $("#dataLockError").classList.toggle("hidden", valid);
  if (!valid) return;
  sessionStorage.setItem("inox-ferro-data-unlocked", "true");
  $("#dataPassword").value = "";
  renderDataAccess();
});
$("#lockDataBtn").addEventListener("click", () => {
  sessionStorage.removeItem("inox-ferro-data-unlocked");
  resetEmployeeForm();
  renderDataAccess();
});
$("#employeeForm").addEventListener("submit", saveEmployee);
$("#cancelEmployeeEdit").addEventListener("click", resetEmployeeForm);
$("#employeeSearch").addEventListener("input", renderEmployees);
$("#employeeTableBody").addEventListener("click", event => {
  const editButton = event.target.closest("[data-edit-employee]");
  const deleteButton = event.target.closest("[data-delete-employee]");
  if (editButton) editEmployee(editButton.dataset.editEmployee);
  if (deleteButton) deleteEmployee(deleteButton.dataset.deleteEmployee);
});
$("#financeUnlockForm").addEventListener("submit", event => {
  event.preventDefault();
  const valid = $("#financePassword").value === dataAreaPassword;
  $("#financeLockError").classList.toggle("hidden", valid);
  if (!valid) return;
  sessionStorage.setItem("inox-ferro-data-unlocked", "true");
  $("#financePassword").value = "";
  renderFinanceAccess();
});
$("#lockFinanceBtn").addEventListener("click", () => {
  sessionStorage.removeItem("inox-ferro-data-unlocked");
  renderFinanceAccess();
});
$("#financeQuoteSearch").addEventListener("input", renderFinance);
$("#financeQuotesBody").addEventListener("change", event => {
  const select = event.target.closest("[data-payment-quote]");
  if (!select) return;
  const finance = getFinanceData();
  finance.payments[select.dataset.paymentQuote] = {
    status: select.value,
    updatedAt: new Date().toISOString()
  };
  setFinanceData(finance);
  renderFinance();
});
$("#expenseForm").addEventListener("submit", saveExpense);
$("#expensesBody").addEventListener("click", event => {
  const toggleButton = event.target.closest("[data-toggle-expense]");
  const deleteButton = event.target.closest("[data-delete-expense]");
  if (toggleButton) toggleExpense(toggleButton.dataset.toggleExpense);
  if (deleteButton) deleteExpense(deleteButton.dataset.deleteExpense);
});
$("#categoryList").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.selectedMaterialCategory = button.dataset.category;
  state.selectedMaterialId = null;
  renderMaterialsManager();
});
$("#materialsTableBody").addEventListener("click", event => {
  const row = event.target.closest("[data-material-id]");
  if (!row) return;
  state.selectedMaterialId = Number(row.dataset.materialId);
  renderMaterialsManager();
});
$("#materialsSearchInput").addEventListener("input", renderMaterialsManager);
$("#addCategoryBtn").addEventListener("click", addMaterialCategory);
$("#editCategoryBtn").addEventListener("click", renameSelectedCategory);
$("#addMaterialBtn").addEventListener("click", addMaterial);
$("#editMaterialBtn").addEventListener("click", editSelectedMaterial);
$("#deleteMaterialBtn").addEventListener("click", deleteSelectedMaterial);
$("#materialFormCategory").addEventListener("change", toggleNewCategoryField);
$("#materialForm").addEventListener("submit", saveMaterialFromForm);
$$("[data-close-material-modal]").forEach(element =>
  element.addEventListener("click", closeMaterialModal)
);

populateCategories();
renderCatalog();
renderQuote();
updateSavedCount();
updateLoginState();
