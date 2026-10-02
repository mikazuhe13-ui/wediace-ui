window.__ModuleLoader__.load({
	id: "wediace-ui",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let react_jsx_runtime = require("react/jsx-runtime");
		let react = require("react");
		let _deepseek_ai_dsh_client_runtime_client = require("@deepseek-ai/dsh-client-store");
		//#region \0dsh-css:D:\Hermes Work\deepseek-harness\packages\client\ui-aqua\src\client\AquaPluginCard.module.css.mjs
		const css$3 = ".EG3s1W_card{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);border-radius:12px;flex-direction:column;padding:16px;display:flex}.EG3s1W_head{justify-content:space-between;align-items:center;gap:16px;display:flex}.EG3s1W_text{flex-direction:column;gap:2px;min-width:0;display:flex}.EG3s1W_title{color:var(--dsw-alias-label-primary);font-size:14px;font-weight:500;line-height:22px}.EG3s1W_description{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.EG3s1W_toggle{border:1px solid var(--dsw-alias-border-l2);height:28px;color:var(--dsw-alias-label-primary);cursor:pointer;background:0 0;border-radius:14px;flex:none;align-items:center;gap:6px;padding:0 10px 0 6px;font-size:12px;line-height:18px;display:inline-flex}.EG3s1W_toggle:hover{background:var(--dsw-alias-interactive-bg-hover)}.EG3s1W_toggle[aria-pressed=true]{background:var(--dsw-alias-state-business-tertiary);color:var(--dsw-alias-state-business-primary);border-color:#0000}.EG3s1W_check{justify-content:center;align-items:center;width:16px;height:16px;display:inline-flex}";
		const tagId$3 = "wediace-ui/AquaPluginCard.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$3) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "wediace-ui";
			tag.dataset.pluginCss = tagId$3;
			tag.textContent = css$3;
			document.head.appendChild(tag);
		}
		var AquaPluginCard_module_css_default = {
			"check": "EG3s1W_check",
			"head": "EG3s1W_head",
			"title": "EG3s1W_title",
			"toggle": "EG3s1W_toggle",
			"description": "EG3s1W_description",
			"card": "EG3s1W_card",
			"text": "EG3s1W_text"
		};
		//#endregion
		//#region src/client/AquaPluginCard.tsx
		/**
		* Aqua card registered into the Plugins settings section's configurable tab
		* (`settings.plugin.item`): the master on/off switch — name, description, and
		* one toggle, in the section's card language. Every other knob lives in the
		* General settings' Appearance row, so the card stays the same shape as the
		* other plugin cards.
		*/
		/**
		* Render the Aqua plugin card.
		* @param props - composed slot props.
		* @returns the card list item.
		*/
		function AquaPluginCard(props) {
			const { t, setEnabled, useStore } = props;
			const enabled = useStore((s) => s.enabled);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", {
				className: AquaPluginCard_module_css_default.card,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: AquaPluginCard_module_css_default.head,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: AquaPluginCard_module_css_default.text,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: AquaPluginCard_module_css_default.title,
							children: t("aqua.title")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: AquaPluginCard_module_css_default.description,
							children: t("aqua.description")
						})]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						className: AquaPluginCard_module_css_default.toggle,
						"aria-pressed": enabled,
						onClick: () => {
							setEnabled(!enabled);
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: AquaPluginCard_module_css_default.check,
							children: enabled && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {})
						}), enabled ? t("aqua.enable") : t("aqua.disable")]
					})]
				})
			});
		}
		//#endregion
		//#region \0dsh-css:D:\Hermes Work\deepseek-harness\packages\client\ui-aqua\src\client\AquaAppearanceRow.module.css.mjs
		const css$2 = ".VYJBRq_group{border-bottom:1px solid var(--dsw-alias-border-l2);flex-direction:column;gap:14px;padding:8px 0 16px;display:flex}.VYJBRq_subGroup{flex-direction:column;gap:8px;display:flex}.VYJBRq_subTitle{color:var(--dsw-alias-label-primary);font-size:13px;font-weight:600;line-height:20px}.VYJBRq_controls{flex-direction:column;gap:10px;display:flex}.VYJBRq_row{align-items:center;gap:10px;display:flex}.VYJBRq_rowLabel{width:92px;color:var(--dsw-alias-label-secondary);flex:none;font-size:12px;line-height:18px}.VYJBRq_inlineLabel{color:var(--dsw-alias-label-secondary);flex:none;font-size:12px;line-height:18px}.VYJBRq_rowHint{color:var(--dsw-alias-label-tertiary);margin-top:-4px;margin-left:102px;font-size:12px;line-height:18px}.VYJBRq_groupHint{color:var(--dsw-alias-label-tertiary);margin-top:-4px;font-size:12px;line-height:18px}.VYJBRq_knobHint{color:var(--dsw-alias-label-tertiary);margin-top:-4px;margin-left:102px;font-size:12px;line-height:18px}.VYJBRq_toggle,.VYJBRq_toggleOn{border:1px solid var(--dsw-alias-border-l2);height:28px;color:var(--dsw-alias-label-primary);cursor:pointer;background:0 0;border-radius:14px;align-items:center;gap:6px;padding:0 10px 0 6px;font-size:12px;line-height:18px;display:inline-flex}.VYJBRq_toggle:hover{background:var(--dsw-alias-interactive-bg-hover)}.VYJBRq_toggleOn{background:var(--dsw-alias-state-business-tertiary);color:var(--dsw-alias-state-business-primary);border-color:#0000}.VYJBRq_check{justify-content:center;align-items:center;width:16px;height:16px;display:inline-flex}.VYJBRq_knob{align-items:center;gap:10px;display:flex}.VYJBRq_knobLabel{width:92px;color:var(--dsw-alias-label-secondary);flex:none;font-size:12px;line-height:18px}.VYJBRq_slider{min-width:0;accent-color:var(--dsw-alias-state-business-primary);flex:1}.VYJBRq_numberWrap{flex:none;align-items:center;gap:4px;display:inline-flex}.VYJBRq_number{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);width:56px;height:26px;color:var(--dsw-alias-label-primary);text-align:right;border-radius:8px;padding:0 6px;font-size:12px;line-height:18px}.VYJBRq_number::-webkit-outer-spin-button,.VYJBRq_number::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.VYJBRq_unit{width:18px;color:var(--dsw-alias-label-tertiary);flex:none;font-size:12px;line-height:18px}.VYJBRq_segmented{border:1px solid var(--dsw-alias-border-l2);border-radius:8px;display:inline-flex;overflow:hidden}.VYJBRq_seg,.VYJBRq_segActive{height:26px;color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:none;padding:0 12px;font-size:12px;line-height:18px}.VYJBRq_seg+.VYJBRq_seg,.VYJBRq_segActive+.VYJBRq_seg,.VYJBRq_seg+.VYJBRq_segActive{border-left:1px solid var(--dsw-alias-border-l2)}.VYJBRq_segActive{background:var(--dsw-alias-state-business-tertiary);color:var(--dsw-alias-state-business-primary)}.VYJBRq_wallpaperPick{align-items:center;gap:10px;display:flex}.VYJBRq_fileInput{display:none}.VYJBRq_pickButton{border:1px solid var(--dsw-alias-border-l2);height:26px;color:var(--dsw-alias-label-primary);cursor:pointer;background:0 0;border-radius:8px;padding:0 12px;font-size:12px;line-height:18px}.VYJBRq_pickButton:hover{background:var(--dsw-alias-interactive-bg-hover)}.VYJBRq_deleteButton{border:1px solid var(--dsw-alias-border-l2);height:26px;color:var(--dsw-alias-label-error);cursor:pointer;background:0 0;border-radius:8px;padding:0 12px;font-size:12px;line-height:18px}.VYJBRq_deleteButton:hover{background:var(--dsw-alias-interactive-bg-hover)}";
		const tagId$2 = "wediace-ui/AquaAppearanceRow.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$2) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "wediace-ui";
			tag.dataset.pluginCss = tagId$2;
			tag.textContent = css$2;
			document.head.appendChild(tag);
		}
		var AquaAppearanceRow_module_css_default = {
			"unit": "VYJBRq_unit",
			"toggle": "VYJBRq_toggle",
			"subGroup": "VYJBRq_subGroup",
			"knob": "VYJBRq_knob",
			"controls": "VYJBRq_controls",
			"groupHint": "VYJBRq_groupHint",
			"slider": "VYJBRq_slider",
			"subTitle": "VYJBRq_subTitle",
			"row": "VYJBRq_row",
			"rowHint": "VYJBRq_rowHint",
			"number": "VYJBRq_number",
			"toggleOn": "VYJBRq_toggleOn",
			"segmented": "VYJBRq_segmented",
			"group": "VYJBRq_group",
			"seg": "VYJBRq_seg",
			"segActive": "VYJBRq_segActive",
			"wallpaperPick": "VYJBRq_wallpaperPick",
			"rowLabel": "VYJBRq_rowLabel",
			"fileInput": "VYJBRq_fileInput",
			"deleteButton": "VYJBRq_deleteButton",
			"knobHint": "VYJBRq_knobHint",
			"numberWrap": "VYJBRq_numberWrap",
			"inlineLabel": "VYJBRq_inlineLabel",
			"check": "VYJBRq_check",
			"pickButton": "VYJBRq_pickButton",
			"knobLabel": "VYJBRq_knobLabel"
		};
		//#endregion
		//#region src/client/AquaControls.tsx
		/**
		* Shared controls for the Aqua General-settings appearance row: the Knob
		* (stepless slider + number box), a two-option Segmented picker, and the
		* wallpaper file reader. Kept in one file so the row stays a single surface.
		*/
		/** Render one knob row. */
		function Knob({ label, value, min, max, step, unit, onChange }) {
			const clamp = (n) => Math.min(max, Math.max(min, Number.isFinite(n) ? n : min));
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
				className: AquaAppearanceRow_module_css_default.knob,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: AquaAppearanceRow_module_css_default.knobLabel,
						children: label
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						type: "range",
						className: AquaAppearanceRow_module_css_default.slider,
						min,
						max,
						step,
						value,
						onChange: (e) => {
							onChange(clamp(Number(e.target.value)));
						}
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: AquaAppearanceRow_module_css_default.numberWrap,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							type: "number",
							className: AquaAppearanceRow_module_css_default.number,
							min,
							max,
							step,
							value,
							onChange: (e) => {
								onChange(clamp(Number(e.target.value)));
							}
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: AquaAppearanceRow_module_css_default.unit,
							children: unit
						})]
					})
				]
			});
		}
		/** Render a two-button segmented picker. */
		function Segmented({ label, value, options, onSelect }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: AquaAppearanceRow_module_css_default.segmented,
				role: "group",
				"aria-label": label,
				children: options.map((option) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: option.id === value ? AquaAppearanceRow_module_css_default.segActive : AquaAppearanceRow_module_css_default.seg,
					"aria-pressed": option.id === value,
					onClick: () => {
						onSelect(option.id);
					},
					children: option.label
				}, option.id))
			});
		}
		/** Read a file, downscale to ≤1920px, and return a compact JPEG data URL. */
		async function fileToDataUrl(file) {
			const raw = await new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onload = () => {
					resolve(String(reader.result));
				};
				reader.onerror = () => {
					reject(reader.error);
				};
				reader.readAsDataURL(file);
			});
			const image = await new Promise((resolve, reject) => {
				const im = new Image();
				im.onload = () => {
					resolve(im);
				};
				im.onerror = () => {
					reject(/* @__PURE__ */ new Error("image load failed"));
				};
				im.src = raw;
			});
			const scale = Math.min(1, 1920 / Math.max(image.width, image.height));
			const w = Math.max(1, Math.round(image.width * scale));
			const h = Math.max(1, Math.round(image.height * scale));
			const canvas = document.createElement("canvas");
			canvas.width = w;
			canvas.height = h;
			const ctx = canvas.getContext("2d");
			if (ctx === null) return raw;
			ctx.drawImage(image, 0, 0, w, h);
			return canvas.toDataURL("image/jpeg", .82);
		}
		//#endregion
		//#region src/client/wallpaper-store.ts
		/**
		* Large wallpaper storage: videos too big for localStorage (its ~5MB quota)
		* go into IndexedDB as raw blobs, while the setting keeps a tiny `idb:<id>`
		* marker. On boot the layer loads the blob, wraps it in an object URL and
		* hands it to the <video> element — no quota trouble, survives restarts.
		*/
		const DB_NAME = "dsh-aqua-media";
		const STORE = "wallpaper";
		const DB_VERSION = 1;
		/** Fixed key holding the File System Access handle (the browser's remembered
		*  file authorization — the closest the web allows to "remember the path"). */
		const HANDLE_KEY = "videoHandle";
		function openDb() {
			return new Promise((resolve, reject) => {
				const request = indexedDB.open(DB_NAME, DB_VERSION);
				request.onupgradeneeded = () => {
					const db = request.result;
					if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
				};
				request.onsuccess = () => {
					resolve(request.result);
				};
				request.onerror = () => {
					reject(request.error ?? /* @__PURE__ */ new Error("indexedDB open failed"));
				};
			});
		}
		function tx(db, mode) {
			return db.transaction(STORE, mode).objectStore(STORE);
		}
		/** Store a blob and return its `idb:<id>` marker ('' on failure → caller
		*  falls back to the data-URL path). */
		async function saveVideoBlob(blob) {
			try {
				const db = await openDb();
				const id = `v${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
				await new Promise((resolve, reject) => {
					const request = tx(db, "readwrite").put(blob, id);
					request.onsuccess = () => {
						resolve();
					};
					request.onerror = () => {
						reject(request.error ?? /* @__PURE__ */ new Error("blob put failed"));
					};
				});
				db.close();
				return `idb:${id}`;
			} catch {
				return "";
			}
		}
		/** Load a stored blob by id (null when absent). */
		async function loadVideoBlob(id) {
			try {
				const db = await openDb();
				const blob = await new Promise((resolve, reject) => {
					const request = tx(db, "readonly").get(id);
					request.onsuccess = () => {
						resolve(request.result);
					};
					request.onerror = () => {
						reject(request.error ?? /* @__PURE__ */ new Error("blob get failed"));
					};
				});
				db.close();
				return blob ?? null;
			} catch {
				return null;
			}
		}
		/** Drop a stored blob (ignores failures). */
		async function deleteVideoBlob(id) {
			try {
				const db = await openDb();
				await new Promise((resolve) => {
					const request = tx(db, "readwrite").delete(id);
					request.onsuccess = () => {
						resolve();
					};
					request.onerror = () => {
						resolve();
					};
				});
				db.close();
			} catch {}
		}
		/** Persist a File System Access handle so the next visit can re-read the
		*  ORIGINAL file without the user picking it again. */
		async function saveVideoHandle(handle) {
			try {
				const db = await openDb();
				await new Promise((resolve, reject) => {
					const request = tx(db, "readwrite").put(handle, HANDLE_KEY);
					request.onsuccess = () => {
						resolve();
					};
					request.onerror = () => {
						reject(request.error ?? /* @__PURE__ */ new Error("handle put failed"));
					};
				});
				db.close();
				return true;
			} catch {
				return false;
			}
		}
		/** Load the remembered file handle (null when absent or storage fails). */
		async function loadVideoHandle() {
			try {
				const db = await openDb();
				const handle = await new Promise((resolve, reject) => {
					const request = tx(db, "readonly").get(HANDLE_KEY);
					request.onsuccess = () => {
						resolve(request.result);
					};
					request.onerror = () => {
						reject(request.error ?? /* @__PURE__ */ new Error("handle get failed"));
					};
				});
				db.close();
				return handle ?? null;
			} catch {
				return null;
			}
		}
		//#endregion
		//#region src/client/AquaAppearanceRow.tsx
		/**
		* Aqua row registered into the General settings section
		* (`settings.general.item`, right under Appearance): every glass knob — mode
		* (mica / compatibility), blur/frost (mica mode only), fluid color,
		* background brightness, the backdrop source picker, and the wallpaper
		* picker with its two knobs. Every
		* write goes straight through to the layer, so the skin moves live. The
		* controls follow the Appearance cubes directly (no row title of their own),
		* and the whole row renders nothing while the master switch in the Plugins
		* section is off.
		*/
		/**
		* Render the Aqua appearance row.
		* @param props - composed slot props.
		* @returns the General section row.
		*/
		function AquaAppearanceRow(props) {
			const { t, setMode, setBlur, setFrost, setFluidHue, setFluidDepth, setBgBrightness, setBackground, setWallpaper, setWhale, setCritters, setMesh, setSpotlight, setPress, setWallpaperBlur, setWallpaperFrost, setVideoBlur, setVideoBrightness, authorizeVideo, useStore } = props;
			const enabled = useStore((s) => s.enabled);
			const mode = useStore((s) => s.mode);
			const blur = useStore((s) => s.blur);
			const frost = useStore((s) => s.frost);
			const fluidHue = useStore((s) => s.fluidHue);
			const fluidDepth = useStore((s) => s.fluidDepth);
			const bgBrightness = useStore((s) => s.bgBrightness);
			const dark = useStore((s) => s.dark);
			const background = useStore((s) => s.background);
			const whale = useStore((s) => s.whale);
			const critters = useStore((s) => s.critters);
			const mesh = useStore((s) => s.mesh);
			const spotlight = useStore((s) => s.spotlight);
			const press = useStore((s) => s.press);
			const wallpaper = useStore((s) => s.wallpaper);
			const wallpaperBlur = useStore((s) => s.wallpaperBlur);
			const wallpaperFrost = useStore((s) => s.wallpaperFrost);
			const videoBlur = useStore((s) => s.videoBlur);
			const videoBrightness = useStore((s) => s.videoBrightness);
			const fileRef = (0, react.useRef)(null);
			const videoRef = (0, react.useRef)(null);
			const isVideoWallpaper = wallpaper.startsWith("data:video/") || wallpaper.startsWith("idb:") || wallpaper.startsWith("fsa:");
			/** Pick a video. Chromium: File System Access — the browser remembers the
			*  file authorization, so later visits re-read the ORIGINAL file with no
			*  storage copy. Other browsers fall back to the plain file input. */
			const pickVideo = () => {
				if (window.showOpenFilePicker !== void 0) (async () => {
					try {
						const [handle] = await window.showOpenFilePicker({
							multiple: false,
							types: [{
								description: "Video",
								accept: { "video/*": [
									".mp4",
									".webm",
									".ogg",
									".mov",
									".m4v",
									".mkv"
								] }
							}]
						});
						if (handle === void 0) return;
						setBackground("wallpaper");
						if (await saveVideoHandle(handle)) setWallpaper(`fsa:${handle.name}`);
						else {
							const file = await handle.getFile();
							saveVideoBlob(file).then((id) => {
								if (id !== "") setWallpaper(id);
								else fileToDataUrl(file).then(setWallpaper);
							});
						}
					} catch {}
				})();
				else videoRef.current?.click();
			};
			/** 选择视频 click: an fsa: video with stale permission re-authorizes in
			*  one click (no picker); anything else opens the picker. */
			const onChooseVideo = () => {
				if (wallpaper.startsWith("fsa:")) (async () => {
					const handle = await loadVideoHandle();
					if (handle !== null) try {
						const permission = await handle.queryPermission({ mode: "read" });
						if (permission === "granted") {
							authorizeVideo();
							return;
						}
						if (permission === "prompt") {
							if (await handle.requestPermission({ mode: "read" }) === "granted") {
								authorizeVideo();
								return;
							}
						}
					} catch {}
					pickVideo();
				})();
				else pickVideo();
			};
			const bgMin = dark ? 0 : 50;
			const bgMax = dark ? 50 : 100;
			const bgDisplay = Math.min(bgMax, Math.max(bgMin, bgBrightness));
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: AquaAppearanceRow_module_css_default.group,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: AquaAppearanceRow_module_css_default.row,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: AquaAppearanceRow_module_css_default.rowLabel,
						children: t("aqua.title")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						className: enabled ? AquaAppearanceRow_module_css_default.toggleOn : AquaAppearanceRow_module_css_default.toggle,
						"aria-pressed": enabled,
						onClick: () => {
							// PATCH(0.2.0-rc.2): optional-call, so a missing injected action
							// can never take the whole settings row down with it.
							if (typeof props.setEnabled === "function") props.setEnabled(!enabled);
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: AquaAppearanceRow_module_css_default.check,
							children: enabled && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {})
						}), enabled ? t("aqua.enable") : t("aqua.disable")]
					})]
				}), enabled && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: AquaAppearanceRow_module_css_default.subGroup,
					children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: AquaAppearanceRow_module_css_default.subGroup,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: AquaAppearanceRow_module_css_default.subTitle,
							children: t("aqua.mode")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: AquaAppearanceRow_module_css_default.controls,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: AquaAppearanceRow_module_css_default.row,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Segmented, {
									label: t("aqua.mode"),
									value: mode,
									options: [{
										id: "mica",
										label: t("aqua.modeMica")
									}, {
										id: "compat",
										label: t("aqua.modeCompat")
									}],
									onSelect: setMode
								})
							})
						})]
					}),
					mode === "mica" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: AquaAppearanceRow_module_css_default.subGroup,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: AquaAppearanceRow_module_css_default.subTitle,
							children: t("aqua.materialGroup")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: AquaAppearanceRow_module_css_default.controls,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
								label: t("aqua.blur"),
								value: blur,
								min: 0,
								max: 40,
								step: .5,
								unit: "px",
								onChange: setBlur
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
								label: t("aqua.frost"),
								value: frost,
								min: 0,
								max: 100,
								step: 1,
								unit: "%",
								onChange: setFrost
							})]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: AquaAppearanceRow_module_css_default.subGroup,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: AquaAppearanceRow_module_css_default.subTitle,
							children: t("aqua.background")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: AquaAppearanceRow_module_css_default.controls,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: AquaAppearanceRow_module_css_default.row,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Segmented, {
										label: t("aqua.background"),
										value: background,
										options: [{
											id: "fluid",
											label: t("aqua.backgroundFluid")
										}, {
											id: "wallpaper",
											label: t("aqua.backgroundWallpaper")
										}],
										onSelect: setBackground
									})
								}),
								background === "fluid" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
									label: t("aqua.fluidHue"),
									value: fluidHue,
									min: 0,
									max: 360,
									step: 1,
									unit: "°",
									onChange: setFluidHue
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
									label: t("aqua.fluidDepth"),
									value: fluidDepth,
									min: 0,
									max: 100,
									step: 1,
									unit: "%",
									onChange: setFluidDepth
								})] }),
								background === "wallpaper" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: AquaAppearanceRow_module_css_default.row,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: AquaAppearanceRow_module_css_default.rowLabel,
											children: t("aqua.wallpaper")
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: AquaAppearanceRow_module_css_default.wallpaperPick,
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
													ref: fileRef,
													type: "file",
													accept: "image/*",
													className: AquaAppearanceRow_module_css_default.fileInput,
													onChange: (e) => {
														const file = e.target.files?.[0];
														if (file !== void 0) {
															setBackground("wallpaper");
															fileToDataUrl(file).then(setWallpaper);
														}
														e.target.value = "";
													}
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
													ref: videoRef,
													type: "file",
													accept: "video/mp4,video/webm,video/ogg,video/quicktime",
													className: AquaAppearanceRow_module_css_default.fileInput,
													onChange: (e) => {
														const file = e.target.files?.[0];
														if (file !== void 0) {
															setBackground("wallpaper");
															saveVideoBlob(file).then((id) => {
																if (id !== "") setWallpaper(id);
																else fileToDataUrl(file).then(setWallpaper);
															});
														}
														e.target.value = "";
													}
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
													type: "button",
													className: AquaAppearanceRow_module_css_default.pickButton,
													onClick: () => {
														fileRef.current?.click();
													},
													children: t("aqua.chooseImage")
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
													type: "button",
													className: AquaAppearanceRow_module_css_default.pickButton,
													onClick: onChooseVideo,
													children: t("aqua.chooseVideo")
												}),
												wallpaper !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
													type: "button",
													className: AquaAppearanceRow_module_css_default.deleteButton,
													onClick: () => {
														setWallpaper("");
													},
													children: t("aqua.deleteWallpaper")
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: AquaAppearanceRow_module_css_default.knobHint,
										children: t("aqua.wallpaperHint")
									}),
									!isVideoWallpaper && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
										label: t("aqua.wallpaperBlur"),
										value: wallpaperBlur,
										min: 0,
										max: 40,
										step: .5,
										unit: "px",
										onChange: setWallpaperBlur
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
										label: t("aqua.wallpaperFrost"),
										value: wallpaperFrost,
										min: 0,
										max: 100,
										step: 1,
										unit: "%",
										onChange: setWallpaperFrost
									})] }),
									isVideoWallpaper && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
											label: t("aqua.videoBlur"),
											value: videoBlur,
											min: 0,
											max: 40,
											step: .5,
											unit: "px",
											onChange: setVideoBlur
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
											label: t("aqua.videoBrightness"),
											value: videoBrightness,
											min: 0,
											max: 100,
											step: 1,
											unit: "%",
											onChange: setVideoBrightness
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
											className: AquaAppearanceRow_module_css_default.knobHint,
											children: t("aqua.videoHint")
										})
									] })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
									label: t("aqua.bgBrightness"),
									value: bgDisplay,
									min: bgMin,
									max: bgMax,
									step: 1,
									unit: "%",
									onChange: setBgBrightness
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: AquaAppearanceRow_module_css_default.knobHint,
									children: t(dark ? "aqua.bgBrightnessHintDark" : "aqua.bgBrightnessHintLight")
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: AquaAppearanceRow_module_css_default.subGroup,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: AquaAppearanceRow_module_css_default.subTitle,
							children: t("aqua.decorAmbient")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: AquaAppearanceRow_module_css_default.controls,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: AquaAppearanceRow_module_css_default.row,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: AquaAppearanceRow_module_css_default.rowLabel,
										children: t("aqua.whale")
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										className: whale ? AquaAppearanceRow_module_css_default.toggleOn : AquaAppearanceRow_module_css_default.toggle,
										"aria-pressed": whale,
										onClick: () => {
											setWhale(!whale);
										},
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: AquaAppearanceRow_module_css_default.check,
											children: whale && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {})
										}), whale ? t("aqua.enable") : t("aqua.disable")]
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: AquaAppearanceRow_module_css_default.row,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: AquaAppearanceRow_module_css_default.rowLabel,
										children: t("aqua.critters")
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										className: critters ? AquaAppearanceRow_module_css_default.toggleOn : AquaAppearanceRow_module_css_default.toggle,
										"aria-pressed": critters,
										onClick: () => {
											setCritters(!critters);
										},
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: AquaAppearanceRow_module_css_default.check,
											children: critters && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {})
										}), critters ? t("aqua.enable") : t("aqua.disable")]
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: AquaAppearanceRow_module_css_default.row,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: AquaAppearanceRow_module_css_default.rowLabel,
										children: t("aqua.mesh")
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										className: mesh ? AquaAppearanceRow_module_css_default.toggleOn : AquaAppearanceRow_module_css_default.toggle,
										"aria-pressed": mesh,
										onClick: () => {
											setMesh(!mesh);
										},
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: AquaAppearanceRow_module_css_default.check,
											children: mesh && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {})
										}), mesh ? t("aqua.enable") : t("aqua.disable")]
									})]
								})
							]
						})]
					}),
					mode === "mica" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: AquaAppearanceRow_module_css_default.subGroup,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: AquaAppearanceRow_module_css_default.subTitle,
							children: t("aqua.decorHover")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: AquaAppearanceRow_module_css_default.controls,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: AquaAppearanceRow_module_css_default.row,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: AquaAppearanceRow_module_css_default.rowLabel,
									children: t("aqua.spotlight")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									className: spotlight ? AquaAppearanceRow_module_css_default.toggleOn : AquaAppearanceRow_module_css_default.toggle,
									"aria-pressed": spotlight,
									onClick: () => {
										setSpotlight(!spotlight);
									},
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: AquaAppearanceRow_module_css_default.check,
										children: spotlight && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {})
									}), spotlight ? t("aqua.enable") : t("aqua.disable")]
								})]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: AquaAppearanceRow_module_css_default.row,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: AquaAppearanceRow_module_css_default.rowLabel,
									children: t("aqua.press")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									className: press ? AquaAppearanceRow_module_css_default.toggleOn : AquaAppearanceRow_module_css_default.toggle,
									"aria-pressed": press,
									onClick: () => {
										setPress(!press);
									},
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: AquaAppearanceRow_module_css_default.check,
										children: press && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {})
									}), press ? t("aqua.enable") : t("aqua.disable")]
								})]
							})]
						})]
					})
					]
				})]
			});
		}
		//#endregion
		//#region src/client/settings-store.ts
		/**
		* Aqua row slot store: a mirror of the layer's state (enable flag plus the
		* knobs and the backdrop source). The plugin's apply-world change listener is
		* the only writer; the row component reads via props.useStore.
		*/
		/**
		* Declares the Aqua row state and write surface.
		* @returns the store handle.
		*/
		function createAquaRowStore() {
			return (0, _deepseek_ai_dsh_client_runtime_client.defineStore)({
				init: () => ({
					enabled: true,
					mode: "compat",
					blur: 20,
					frost: 7,
					fluidHue: 320,
					fluidDepth: 25,
					bgBrightness: 50,
					dark: false,
					background: "fluid",
					wallpaper: "",
					whale: false,
					critters: false,
					mesh: false,
					spotlight: false,
					press: false,
					wallpaperBlur: 0,
					wallpaperFrost: 0,
					videoBlur: 6,
					videoBrightness: 45,
					revision: -1
				}),
				actions: { sync: (d, next, revision) => {
					if (revision <= d.revision) return;
					d.enabled = next.enabled;
					d.mode = next.mode;
					d.blur = next.blur;
					d.frost = next.frost;
					d.fluidHue = next.fluidHue;
					d.fluidDepth = next.fluidDepth;
					d.bgBrightness = next.bgBrightness;
					d.dark = next.dark;
					d.background = next.background;
					d.wallpaper = next.wallpaper;
					d.whale = next.whale;
					d.critters = next.critters;
					d.mesh = next.mesh;
					d.spotlight = next.spotlight;
					d.press = next.press;
					d.wallpaperBlur = next.wallpaperBlur;
					d.wallpaperFrost = next.wallpaperFrost;
					d.videoBlur = next.videoBlur;
					d.videoBrightness = next.videoBrightness;
					d.revision = revision;
				} }
			});
		}
		//#endregion
		//#region src/client/locales.ts
		/** `settings.aqua` namespace dictionaries (the settings-row copy). */
		/** Dictionary namespace owned by this plugin. */
		const NS = "settings.aqua";
		/** Simplified Chinese dictionary (the key-set source of truth). */
		const zh = {
			"aqua.title": "玻璃主题",
			"aqua.description": "全局玻璃质感，云母/兼容双模式，模糊度、磨砂度、背景与颜色都可自由调节",
			"aqua.enable": "开启",
			"aqua.disable": "关闭",
			"aqua.mode": "模式",
			"aqua.modeMica": "云母效果",
			"aqua.modeCompat": "兼容模式",
			"aqua.materialGroup": "玻璃材质",
			"aqua.decorAmbient": "环境装饰",
			"aqua.decorHover": "悬停效果",
			"aqua.whale": "粒子鲸鱼",
			"aqua.critters": "小鱼",
			"aqua.mesh": "网状交互",
			"aqua.spotlight": "鼠标辉光",
			"aqua.press": "悬停下压",
			"aqua.blur": "玻璃模糊度",
			"aqua.frost": "磨砂度",
			"aqua.fluidHue": "色调",
			"aqua.fluidDepth": "颜色深浅",
			"aqua.bgBrightness": "背景亮度",
			"aqua.bgBrightnessHintDark": "深色模式：0 压暗至纯黑，50 原样",
			"aqua.bgBrightnessHintLight": "浅色模式：50 原样，100 提亮至纯白",
			"aqua.background": "背景",
			"aqua.backgroundFluid": "流体",
			"aqua.backgroundWallpaper": "壁纸",
			"aqua.wallpaper": "壁纸",
			"aqua.wallpaperHint": "浅色壁纸用浅色模式，深色壁纸用深色模式⚠️",
			"aqua.chooseImage": "选择图片",
			"aqua.chooseVideo": "选择视频",
			"aqua.deleteWallpaper": "删除",
			"aqua.wallpaperBlur": "壁纸模糊度",
			"aqua.wallpaperFrost": "壁纸磨砂度",
			"aqua.videoBlur": "视频模糊度",
			"aqua.videoBrightness": "视频亮度",
			"aqua.videoHint": "⚠️视频会自动压暗以保证文字清晰，可用模糊度和亮度调节；刷新后未自动播放时点一下“选择视频”即可恢复"
		};
		/** English dictionary. */
		const en = {
			"aqua.title": "Glass theme",
			"aqua.description": "Global glassmorphism with mica/compatibility modes — blur, frost, backdrop, and color all adjustable",
			"aqua.enable": "On",
			"aqua.disable": "Off",
			"aqua.mode": "Mode",
			"aqua.modeMica": "Mica",
			"aqua.modeCompat": "Compatibility",
			"aqua.materialGroup": "Glass material",
			"aqua.decorAmbient": "Ambient",
			"aqua.decorHover": "Hover effects",
			"aqua.whale": "Particle whale",
			"aqua.critters": "Fish",
			"aqua.mesh": "Interactive mesh",
			"aqua.spotlight": "Cursor glow",
			"aqua.press": "Hover tilt",
			"aqua.blur": "Glass blur",
			"aqua.frost": "Frost",
			"aqua.fluidHue": "Hue",
			"aqua.fluidDepth": "Color depth",
			"aqua.bgBrightness": "Background brightness",
			"aqua.bgBrightnessHintDark": "Dark mode: 0 fades to pure black, 50 is unchanged",
			"aqua.bgBrightnessHintLight": "Light mode: 50 is unchanged, 100 brightens to pure white",
			"aqua.background": "Backdrop",
			"aqua.backgroundFluid": "Fluid",
			"aqua.backgroundWallpaper": "Wallpaper",
			"aqua.wallpaper": "Wallpaper",
			"aqua.wallpaperHint": "Use light mode for light wallpapers, dark mode for dark wallpapers ⚠️",
			"aqua.chooseImage": "Choose image",
			"aqua.chooseVideo": "Choose video",
			"aqua.deleteWallpaper": "Delete",
			"aqua.wallpaperBlur": "Wallpaper blur",
			"aqua.wallpaperFrost": "Wallpaper frost",
			"aqua.videoBlur": "Video blur",
			"aqua.videoBrightness": "Video brightness",
			"aqua.videoHint": "⚠️ The video is dimmed automatically to keep text readable — adjust blur and brightness here; if it does not play after a reload, click \"Choose video\" once to restore access"
		};
		//#endregion
		//#region src/client/critters.ts
		/**
		* Ambient marine-life scene: the markup the layer injects behind the app
		* frame — brand-fish silhouettes drifting, a shrimp or two crawling the
		* bottom, rising bubbles, twinkling plankton. Positions, sizes, and
		* per-critter timing ride inline styles; the motion itself lives in
		* aqua.module.css (and silences under prefers-reduced-motion).
		*/
		/** The DeepSeek brand fish silhouette (exact figma extract, scaled down). */
		const FISH_PATH = "M22.9168 1.43018C22.6713 1.31018 22.5658 1.53918 22.4223 1.65519C22.3733 1.69269 22.3318 1.74169 22.2903 1.78669C21.9317 2.1697 21.5127 2.42121 20.9657 2.39121C20.1657 2.34621 19.4827 2.59771 18.8787 3.20973C18.7502 2.45521 18.3236 2.0047 17.6746 1.71569C17.3351 1.56568 16.9916 1.41518 16.7536 1.08867C16.5876 0.856163 16.5421 0.597155 16.4591 0.341647C16.4061 0.187643 16.3536 0.0301382 16.1761 0.00363739C15.9836 -0.0263635 15.9081 0.135141 15.8326 0.270145C15.5306 0.822162 15.4136 1.43018 15.4251 2.0462C15.4516 3.43174 16.0366 4.53527 17.1991 5.3203C17.3311 5.4103 17.3651 5.5003 17.3236 5.63181C17.2441 5.90231 17.1501 6.16482 17.0671 6.43533C17.0141 6.60784 16.9351 6.64584 16.7501 6.57033C16.1121 6.30383 15.5611 5.90931 15.074 5.4328C14.2475 4.63328 13.5 3.75075 12.568 3.05973C12.349 2.89822 12.13 2.74822 11.9034 2.60522C10.9524 1.68169 12.028 0.923165 12.277 0.833162C12.5375 0.739159 12.3675 0.41615 11.5259 0.42015C10.6844 0.42365 9.91439 0.705658 8.93286 1.08117C8.78935 1.13767 8.63835 1.17867 8.48384 1.21267C7.59332 1.04367 6.66829 1.00617 5.70226 1.11517C3.88321 1.31768 2.43016 2.1777 1.36213 3.64575C0.0790928 5.4103 -0.222916 7.41536 0.146595 9.50642C0.535106 11.7105 1.66014 13.535 3.38869 14.9616C5.18125 16.4406 7.24581 17.1657 9.60138 17.0266C11.0319 16.9441 12.6245 16.7526 14.421 15.2321C14.874 15.4576 15.3496 15.5476 16.1381 15.6151C16.7456 15.6716 17.3306 15.5851 17.7836 15.4911C18.4931 15.3411 18.4441 14.6841 18.1876 14.5636C16.1081 13.595 16.5646 13.9891 16.1496 13.67C17.2061 12.42 18.8202 10.1979 19.3182 7.17235C19.3672 6.83834 19.4297 6.36783 19.4222 6.09732C19.4182 5.93231 19.4562 5.86831 19.6447 5.84931C20.1657 5.78931 20.6712 5.64681 21.1357 5.3913C22.4833 4.65528 23.0268 3.44624 23.1548 1.9972C23.1738 1.77569 23.1508 1.54668 22.9168 1.43018ZM11.1749 14.4736C9.15936 12.889 8.18184 12.3675 7.77832 12.39C7.40081 12.4125 7.46881 12.8445 7.55182 13.126C7.63882 13.404 7.75182 13.5955 7.91033 13.8396C8.01983 14.0011 8.09533 14.2411 7.80083 14.4216C7.15181 14.8231 6.02327 14.2866 5.97027 14.2601C4.65673 13.4865 3.5587 12.4655 2.78467 11.069C2.03715 9.72493 1.60314 8.28289 1.53164 6.74384C1.51264 6.37233 1.62214 6.24082 1.99215 6.17332C2.47916 6.08332 2.98118 6.06432 3.46769 6.13582C5.52476 6.43633 7.27581 7.35586 8.74385 8.8129C9.58188 9.64243 10.2159 10.634 10.8689 11.6025C11.5634 12.631 12.3105 13.611 13.262 14.4146C13.598 14.6961 13.866 14.9101 14.1225 15.0681C13.349 15.1546 12.058 15.1731 11.1749 14.4746L11.1749 14.4736ZM12.141 8.25988C12.141 8.09488 12.273 7.96338 12.439 7.96338C12.4765 7.96338 12.5105 7.97088 12.541 7.98188C12.5825 7.99688 12.6205 8.01938 12.6505 8.05338C12.7035 8.10588 12.7335 8.18088 12.7335 8.25988C12.7335 8.42489 12.6015 8.55639 12.4355 8.55639C12.2695 8.55639 12.141 8.42489 12.141 8.25988ZM15.1415 9.79893C14.949 9.87793 14.7565 9.94544 14.5715 9.95294C14.2845 9.96794 13.9715 9.85143 13.8015 9.70893C13.5375 9.48742 13.3485 9.36342 13.2695 8.97691C13.2355 8.8119 13.2545 8.55639 13.2845 8.40989C13.3525 8.09438 13.277 7.89187 13.0545 7.70787C12.8735 7.55786 12.643 7.51636 12.39 7.51636C12.2955 7.51636 12.209 7.47486 12.1445 7.44136C12.039 7.38886 11.9519 7.25735 12.035 7.09585C12.0615 7.04335 12.19 6.91584 12.22 6.89334C12.5635 6.69784 12.9595 6.76184 13.326 6.90834C13.6655 7.04735 13.9225 7.30236 14.292 7.66287C14.6695 8.09838 14.7375 8.21838 14.9525 8.54539C15.1225 8.8009 15.277 9.06341 15.3831 9.36392C15.4471 9.55142 15.3641 9.70493 15.1415 9.79893Z";
		/** A small shrimp: curved body, tail fan, two antenna strokes. (Retired — the
		*  scene ships fish, bubbles, and plankton only.) */
		/** One inline-svg critter. */
		function svg(critter, viewBox, width, style, body) {
			return `<svg data-aqua-critter="${critter}" viewBox="${viewBox}" width="${width}" style="${style}" aria-hidden="true">${body}</svg>`;
		}
		function fish(style, width) {
			return svg("fish", "0 0 23.16 17.04", width, style, `<path d="${FISH_PATH}" fill="currentColor"/>`);
		}
		function fishLeft(style, width) {
			return svg("fish-left", "0 0 23.16 17.04", width, style, `<path d="${FISH_PATH}" fill="currentColor"/>`);
		}
		function bubble(style, size) {
			return svg("bubble", "0 0 8 8", size, style, "<circle cx=\"4\" cy=\"4\" r=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/>");
		}
		function plankton(style) {
			return svg("plankton", "0 0 3 3", 3, style, "<circle cx=\"1.5\" cy=\"1.5\" r=\"1.5\" fill=\"currentColor\"/>");
		}
		/**
		* The complete ambient scene markup: one fixed, click-transparent container
		* the layer prepends to <body> while enabled and removes on disable. The
		* deepseek.com fluid shader canvas forms the board; marine life rides over it.
		*/
		const AMBIENT_SCENE = [
			"<canvas data-dsh-aqua-fluid-canvas></canvas>",
			fish("top:22%;left:58%;animation-duration:9s", 30),
			fishLeft("top:36%;left:10%;animation-duration:14s;animation-delay:-4s", 20),
			fish("top:64%;left:76%;animation-duration:19s;animation-delay:-9s;opacity:0.55", 14),
			bubble("bottom:8%;left:9%;animation-duration:8s", 7),
			bubble("bottom:5%;left:13%;animation-duration:10s;animation-delay:2.5s", 5),
			bubble("bottom:10%;left:17%;animation-duration:9s;animation-delay:5s", 6),
			bubble("bottom:9%;left:82%;animation-duration:11s;animation-delay:1.5s", 8),
			bubble("bottom:6%;left:87%;animation-duration:8s;animation-delay:4s", 5),
			plankton("top:14%;left:42%;animation-delay:-1s"),
			plankton("top:32%;left:70%;animation-delay:-3s"),
			plankton("top:72%;left:18%;animation-delay:-2s"),
			plankton("top:56%;left:86%;animation-delay:-4s")
		].join("");
		/** Build the ambient container element (or reuse an existing one). */
		function ensureAmbientScene() {
			const existing = document.querySelector("[data-dsh-aqua-ambient]");
			if (existing !== null) return existing;
			const holder = document.createElement("div");
			holder.innerHTML = `<div data-dsh-aqua-ambient aria-hidden="true">${AMBIENT_SCENE}</div>`;
			const node = holder.firstElementChild;
			if (!(node instanceof HTMLElement)) throw new Error("ui-aqua: ambient scene markup failed to parse");
			document.body.prepend(node);
			if (document.querySelector("[data-dsh-aqua-wallpaper-layer]") === null) {
				const wallpaper = document.createElement("div");
				wallpaper.setAttribute("data-dsh-aqua-wallpaper", "");
				wallpaper.setAttribute("data-dsh-aqua-wallpaper-layer", "");
				wallpaper.setAttribute("aria-hidden", "true");
				wallpaper.innerHTML = "<img data-dsh-aqua-wallpaper-img alt=\"\"><video data-dsh-aqua-wallpaper-video loop playsinline preload=\"auto\"></video>";
				document.body.prepend(wallpaper);
			}
			return node;
		}
		/** Remove the ambient container wherever it lives. */
		function removeAmbientScene() {
			for (const node of document.querySelectorAll("[data-dsh-aqua-ambient]")) node.remove();
			for (const node of document.querySelectorAll("[data-dsh-aqua-wallpaper-layer]")) node.remove();
		}
		/** Add the page edge-fade bands (5px gradient blur over the chat content). */
		function ensurePageFades() {
			if (document.querySelector("[data-dsh-aqua-fade]") !== null) return;
			const top = document.createElement("div");
			top.setAttribute("data-dsh-aqua-fade", "top");
			top.setAttribute("aria-hidden", "true");
			const bottom = document.createElement("div");
			bottom.setAttribute("data-dsh-aqua-fade", "bottom");
			bottom.setAttribute("aria-hidden", "true");
			document.body.appendChild(top);
			document.body.appendChild(bottom);
		}
		/** Remove the edge-fade bands. */
		function removePageFades() {
			for (const el of document.querySelectorAll("[data-dsh-aqua-fade]")) el.remove();
		}
		//#endregion
		//#region src/client/fluid-shader.ts
		/** The exact default parameter set shipped by the site. */
		const SITE_FLUID_PARAMS = {
			mouseRadius: .22,
			mouseStrength: 1.1,
			decay: .96,
			distortBoost: 1.35,
			noiseBoost: 0,
			swirlBoost: .45,
			speed: 14,
			distortion: 20,
			swirl: 12,
			swirlIterations: 8,
			scale: .5,
			rotation: -5,
			proportion: 50,
			softness: 100,
			shapeScale: 10,
			offsetX: 0,
			offsetY: 65,
			color1: "#8AA3D6",
			color2: "#FFFFFF",
			color3: "#FFFFFF"
		};
		const VERTEX_SHADER = `#version 300 es
in vec4 a_position;
out vec2 vUv;
void main() {
  vUv = a_position.xy * 0.5 + 0.5;
  gl_Position = a_position;
}
`;
		const FLOW_SHADER = `#version 300 es
precision mediump float;
in vec2 vUv;
uniform sampler2D u_prev;
uniform vec2 u_mouse;
uniform vec2 u_velocity;
uniform float u_brushRadius;
uniform float u_brushStrength;
uniform float u_decay;
out vec4 fragColor;

void main() {
  vec4 prev = texture(u_prev, vUv);

  prev.r *= u_decay;
  prev.gb = mix(vec2(0.5), prev.gb, u_decay);

  float dist = distance(vUv, u_mouse);

  float influence = exp(-dist * dist / (u_brushRadius * u_brushRadius * 0.5));
  influence = max(0.0, influence - 0.01);

  float speed = length(u_velocity);
  float presenceStrength = u_brushStrength * 0.3;
  float velBonus = min(speed * 3.0, 0.7) * u_brushStrength;
  float totalStrength = presenceStrength + velBonus;

  prev.r = max(prev.r, influence * totalStrength);
  float blendAmt = influence * min(totalStrength, 0.4) * 0.3;
  prev.g = mix(prev.g, clamp(u_velocity.x * 2.0 + 0.5, 0.0, 1.0), blendAmt);
  prev.b = mix(prev.b, clamp(u_velocity.y * 2.0 + 0.5, 0.0, 1.0), blendAmt);

  fragColor = prev;
}
`;
		const DISPLAY_SHADER = `#version 300 es
precision mediump float;
in vec2 vUv;
uniform float u_time;
uniform float u_pixelRatio;
uniform vec2 u_resolution;
uniform float u_scale;
uniform float u_rotation;
uniform vec4 u_color1, u_color2, u_color3;
uniform float u_colorCount;
uniform float u_proportion;
uniform float u_softness;
uniform float u_shape;
uniform float u_shapeScale;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_swirlIterations;
uniform vec2 u_offset;
uniform sampler2D u_flowmap;
uniform float u_distortBoost;
uniform float u_noiseBoost;
uniform float u_swirlBoost;
out vec4 fragColor;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

vec2 rotate(vec2 uv, float th) { return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv; }
float random(vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123); }
float noise(vec2 st) {
  vec2 i = floor(st); vec2 f = fract(st);
  float a = random(i), b = random(i + vec2(1,0)), c = random(i + vec2(0,1)), d = random(i + vec2(1,1));
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}

vec3 blend_multi(float mixer, float softness) {
  float edge = 1.0 - softness;
  vec3 col = u_color1.rgb;
  if (u_colorCount > 1.5) { col = mix(col, u_color2.rgb, smoothstep(0.0 + 0.35*edge, 0.7 - 0.35*edge, mixer)); }
  if (u_colorCount > 2.5) { col = mix(col, u_color3.rgb, smoothstep(0.3 + 0.35*edge, 1.0 - 0.35*edge, mixer)); }
  return col;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float t = .5 * u_time;
  float ns = .0005 + .006 * u_scale;
  uv -= .5; uv *= (ns * u_resolution); uv = rotate(uv, u_rotation * .5 * PI);
  uv /= u_pixelRatio; uv += .5; uv += u_offset;

  vec2 fragUV = gl_FragCoord.xy / u_resolution.xy;
  vec4 flow = texture(u_flowmap, fragUV);
  float influence = flow.r;
  vec2 flowDir = (flow.gb - 0.5) * 2.0;

  float n1 = noise(uv + t), n2 = noise(uv*2. - t);
  float angle = n1 * TWO_PI;

  float totalDistortion = u_distortion + influence * u_distortBoost;
  uv.x += 4. * totalDistortion * n2 * cos(angle);
  uv.y += 4. * totalDistortion * n2 * sin(angle);

  uv += flowDir * influence * 0.15;

  if (influence > 0.001) {
    float localNoise = noise(uv * 2.0 + t * 1.5);
    uv += influence * u_noiseBoost * vec2(cos(localNoise * TWO_PI), sin(localNoise * TWO_PI));
  }

  float iters = ceil(clamp(u_swirlIterations, 1., 30.));
  float swirlAmt = clamp(u_swirl, 0., 2.) + influence * u_swirlBoost;
  for (float i = 1.; i <= 30.0; i++) {
    if (i > iters) break;
    uv.x += swirlAmt / i * cos(t + i*1.5*uv.y);
    uv.y += swirlAmt / i * cos(t + i*1.*uv.x);
  }

  float proportion = clamp(u_proportion, 0., 1.);
  vec2 cuv = uv * (.5 + 3.5 * u_shapeScale);
  float shape = .5 + .5 * sin(cuv.x) * cos(cuv.y);
  float mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
  vec3 col = blend_multi(mixer, clamp(u_softness, 0., 1.));
  fragColor = vec4(col, 1.0);
}
`;
		function hexToRgb(value) {
			const hex = value.replace("#", "");
			return [
				parseInt(hex.slice(0, 2), 16) / 255,
				parseInt(hex.slice(2, 4), 16) / 255,
				parseInt(hex.slice(4, 6), 16) / 255
			];
		}
		/**
		* Mount the fluid simulation on a canvas and run it until disposed.
		* @param canvas - full-size canvas element (CSS-sized by the ambient layer).
		* @param params - simulation parameters (site defaults are the natural input).
		* @returns the live handle.
		*/
		function attachFluidShader(canvas, params) {
			const gl = canvas.getContext("webgl2", {
				alpha: true,
				premultipliedAlpha: false,
				powerPreference: "low-power"
			});
			if (gl === null) return {
				setParams: () => {},
				stir: () => {},
				dispose: () => {}
			};
			const compile = (type, source) => {
				const shader = gl.createShader(type);
				if (shader === null) return null;
				gl.shaderSource(shader, source);
				gl.compileShader(shader);
				if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
					console.error("ui-aqua fluid shader:", gl.getShaderInfoLog(shader));
					return null;
				}
				return shader;
			};
			const link = (fragment) => {
				const vertex = compile(gl.VERTEX_SHADER, VERTEX_SHADER);
				const frag = compile(gl.FRAGMENT_SHADER, fragment);
				if (vertex === null || frag === null) return null;
				const program = gl.createProgram();
				if (program === null) return null;
				gl.attachShader(program, vertex);
				gl.attachShader(program, frag);
				gl.linkProgram(program);
				if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
					console.error("ui-aqua fluid link:", gl.getProgramInfoLog(program));
					return null;
				}
				return program;
			};
			const flowProgram = link(FLOW_SHADER);
			const displayProgram = link(DISPLAY_SHADER);
			if (flowProgram === null || displayProgram === null) return {
				setParams: () => {},
				stir: () => {},
				dispose: () => {}
			};
			const flow = {
				prev: gl.getUniformLocation(flowProgram, "u_prev"),
				mouse: gl.getUniformLocation(flowProgram, "u_mouse"),
				velocity: gl.getUniformLocation(flowProgram, "u_velocity"),
				brushRadius: gl.getUniformLocation(flowProgram, "u_brushRadius"),
				brushStrength: gl.getUniformLocation(flowProgram, "u_brushStrength"),
				decay: gl.getUniformLocation(flowProgram, "u_decay")
			};
			const display = {
				time: gl.getUniformLocation(displayProgram, "u_time"),
				pixelRatio: gl.getUniformLocation(displayProgram, "u_pixelRatio"),
				resolution: gl.getUniformLocation(displayProgram, "u_resolution"),
				scale: gl.getUniformLocation(displayProgram, "u_scale"),
				rotation: gl.getUniformLocation(displayProgram, "u_rotation"),
				offset: gl.getUniformLocation(displayProgram, "u_offset"),
				color1: gl.getUniformLocation(displayProgram, "u_color1"),
				color2: gl.getUniformLocation(displayProgram, "u_color2"),
				color3: gl.getUniformLocation(displayProgram, "u_color3"),
				colorCount: gl.getUniformLocation(displayProgram, "u_colorCount"),
				proportion: gl.getUniformLocation(displayProgram, "u_proportion"),
				softness: gl.getUniformLocation(displayProgram, "u_softness"),
				shape: gl.getUniformLocation(displayProgram, "u_shape"),
				shapeScale: gl.getUniformLocation(displayProgram, "u_shapeScale"),
				distortion: gl.getUniformLocation(displayProgram, "u_distortion"),
				swirl: gl.getUniformLocation(displayProgram, "u_swirl"),
				swirlIterations: gl.getUniformLocation(displayProgram, "u_swirlIterations"),
				flowmap: gl.getUniformLocation(displayProgram, "u_flowmap"),
				distortBoost: gl.getUniformLocation(displayProgram, "u_distortBoost"),
				noiseBoost: gl.getUniformLocation(displayProgram, "u_noiseBoost"),
				swirlBoost: gl.getUniformLocation(displayProgram, "u_swirlBoost")
			};
			const quadBuffer = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
				-1,
				-1,
				1,
				-1,
				-1,
				1,
				1,
				1
			]), gl.STATIC_DRAW);
			const bindQuad = (program) => {
				const position = gl.getAttribLocation(program, "a_position");
				gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
				gl.enableVertexAttribArray(position);
				gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
			};
			const makeTarget = (width, height, initial) => {
				const tex = gl.createTexture();
				if (tex === null) throw new Error("ui-aqua fluid: texture allocation failed");
				gl.bindTexture(gl.TEXTURE_2D, tex);
				if (initial !== void 0) gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, initial);
				else gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
				const fbo = gl.createFramebuffer();
				gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
				gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
				gl.bindFramebuffer(gl.FRAMEBUFFER, null);
				return {
					fbo,
					tex
				};
			};
			let width = 0;
			let height = 0;
			let flowWidth = 0;
			let flowHeight = 0;
			let flip = false;
			let current = { ...params };
			const pointer = {
				x: .5,
				y: .5,
				smoothX: .5,
				smoothY: .5,
				vx: 0,
				vy: 0,
				svx: 0,
				svy: 0
			};
			const dprCap = Math.min(window.devicePixelRatio || 1, 1.5);
			width = Math.round(canvas.clientWidth * dprCap);
			height = Math.round(canvas.clientHeight * dprCap);
			canvas.width = width;
			canvas.height = height;
			flowWidth = Math.round(width / 4);
			flowHeight = Math.round(height / 4);
			const initial = new Uint8Array(flowWidth * flowHeight * 4);
			for (let i = 0; i < flowWidth * flowHeight; i += 1) {
				initial[4 * i] = 0;
				initial[4 * i + 1] = 128;
				initial[4 * i + 2] = 128;
				initial[4 * i + 3] = 255;
			}
			let targetA = makeTarget(flowWidth, flowHeight, initial);
			let targetB = makeTarget(flowWidth, flowHeight, initial);
			const coarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;
			const ua = navigator;
			const windows = ua.userAgentData ? ua.userAgentData.platform === "Windows" : navigator.userAgent.includes("Windows");
			const onMouseMove = (event) => {
				const rect = canvas.getBoundingClientRect();
				pointer.x = (event.clientX - rect.left) / rect.width;
				pointer.y = 1 - (event.clientY - rect.top) / rect.height;
			};
			if (!coarse && !windows) window.addEventListener("mousemove", onMouseMove);
			const start = performance.now();
			let raf = 0;
			let previous = 0;
			const step = 1e3 / 30;
			const frame = (now) => {
				raf = requestAnimationFrame(frame);
				if (now - previous < step) return;
				previous = now - (now - previous) % step;
				const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
				const nextWidth = Math.round(canvas.clientWidth * ratio);
				const nextHeight = Math.round(canvas.clientHeight * ratio);
				if (nextWidth !== width || nextHeight !== height) {
					width = nextWidth;
					height = nextHeight;
					canvas.width = width;
					canvas.height = height;
				}
				const p = current;
				const s = pointer;
				s.svx *= .94;
				s.svy *= .94;
				s.smoothX += (s.x - s.smoothX) * .12;
				s.smoothY += (s.y - s.smoothY) * .12;
				s.svx += ((s.x - s.smoothX) * .5 - s.svx) * .15;
				s.svy += ((s.y - s.smoothY) * .5 - s.svy) * .15;
				const read = flip ? targetA : targetB;
				const write = flip ? targetB : targetA;
				flip = !flip;
				gl.bindFramebuffer(gl.FRAMEBUFFER, write.fbo);
				gl.viewport(0, 0, flowWidth, flowHeight);
				gl.useProgram(flowProgram);
				bindQuad(flowProgram);
				gl.activeTexture(gl.TEXTURE0);
				gl.bindTexture(gl.TEXTURE_2D, read.tex);
				gl.uniform1i(flow.prev, 0);
				gl.uniform2f(flow.mouse, s.smoothX, s.smoothY);
				gl.uniform2f(flow.velocity, s.svx, s.svy);
				gl.uniform1f(flow.brushRadius, p.mouseRadius);
				gl.uniform1f(flow.brushStrength, p.mouseStrength);
				gl.uniform1f(flow.decay, p.decay);
				gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
				gl.bindFramebuffer(gl.FRAMEBUFFER, null);
				gl.viewport(0, 0, width, height);
				gl.useProgram(displayProgram);
				bindQuad(displayProgram);
				gl.activeTexture(gl.TEXTURE0);
				gl.bindTexture(gl.TEXTURE_2D, write.tex);
				gl.uniform1i(display.flowmap, 0);
				const time = (performance.now() - start) * .001 * (p.speed / 100);
				gl.uniform1f(display.time, time);
				gl.uniform1f(display.pixelRatio, window.devicePixelRatio || 1);
				gl.uniform2f(display.resolution, width, height);
				gl.uniform1f(display.scale, p.scale);
				gl.uniform1f(display.rotation, p.rotation / 90);
				gl.uniform2f(display.offset, p.offsetX / 100, p.offsetY / 100);
				const c1 = hexToRgb(p.color1 || "#2E58A4");
				const c2 = hexToRgb(p.color2 || "#D2E2EE");
				const c3 = hexToRgb(p.color3 || "#FFFFFF");
				gl.uniform4f(display.color1, c1[0], c1[1], c1[2], 1);
				gl.uniform4f(display.color2, c2[0], c2[1], c2[2], 1);
				gl.uniform4f(display.color3, c3[0], c3[1], c3[2], 1);
				gl.uniform1f(display.colorCount, 3);
				gl.uniform1f(display.proportion, p.proportion / 100);
				gl.uniform1f(display.softness, p.softness / 100);
				gl.uniform1f(display.shape, 0);
				gl.uniform1f(display.shapeScale, p.shapeScale / 100);
				gl.uniform1f(display.distortion, p.distortion / 100);
				gl.uniform1f(display.swirl, p.swirl / 50);
				gl.uniform1f(display.swirlIterations, p.swirlIterations);
				gl.uniform1f(display.distortBoost, p.distortBoost);
				gl.uniform1f(display.noiseBoost, p.noiseBoost);
				gl.uniform1f(display.swirlBoost, p.swirlBoost);
				gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
			};
			const handle = {
				setParams: (next) => {
					current = { ...next };
				},
				stir: (x, y, vx, vy) => {
					pointer.x += (x - pointer.x) * .35;
					pointer.y += (y - pointer.y) * .35;
					pointer.svx += (vx - pointer.svx) * .3;
					pointer.svy += (vy - pointer.svy) * .3;
				},
				dispose: () => {
					cancelAnimationFrame(raf);
					window.removeEventListener("mousemove", onMouseMove);
				}
			};
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				frame(performance.now());
				cancelAnimationFrame(raf);
				return handle;
			}
			raf = requestAnimationFrame(frame);
			return handle;
		}
		//#endregion
		//#region src/client/fluid-tones.ts
		/** hsl(h, s, l) → #rrggbb. */
		function hsl(h, s, l) {
			const c = (1 - Math.abs(2 * l - 1)) * s;
			const x = c * (1 - Math.abs(h / 60 % 2 - 1));
			const m = l - c / 2;
			let r = 0;
			let g = 0;
			let b = 0;
			if (h < 60) {
				r = c;
				g = x;
			} else if (h < 120) {
				r = x;
				g = c;
			} else if (h < 180) {
				g = c;
				b = x;
			} else if (h < 240) {
				g = x;
				b = c;
			} else if (h < 300) {
				r = x;
				b = c;
			} else {
				r = c;
				b = x;
			}
			const toHex = (v) => Math.round((v + m) * 255).toString(16).padStart(2, "0");
			return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
		}
		/**
		* Palette for the given hue (0-360) and depth (0-100), per scheme.
		* The depth ramp is piecewise: the lower half sweeps from the absolute
		* extreme — pure black in dark mode, the deep saturated shade (e.g. #8B0000
		* for red) in light mode — up to the shipped mid look; the upper half
		* sweeps from mid to pale (#FFCCCB for red). Stepless HSL interpolation.
		*/
		function fluidToneColors(dark, hue, depth) {
			const h = ((hue + 217) % 360 + 360) % 360;
			const d = Math.min(1, Math.max(0, depth / 100));
			const ramp = (deep, mid, pale) => d < .5 ? deep + (mid - deep) * d / .5 : mid + (pale - mid) * (d - .5) / .5;
			if (dark) return {
				color1: hsl(h, .85, ramp(0, .46, .62)),
				color2: hsl(h, .9, ramp(0, .305, .45)),
				color3: hsl(h, .5, ramp(0, .075, .1))
			};
			return {
				color1: hsl(h, 1, ramp(.27, .45, .9)),
				color2: hsl(h, .55, .86),
				color3: hsl(h, .25, .955)
			};
		}
		//#endregion
		//#region src/client/fluid-interactions.ts
		/** Normalized shader-space coordinates for one canvas. */
		function uv(canvas, clientX, clientY) {
			const rect = canvas.getBoundingClientRect();
			return {
				x: rect.width <= 0 ? .5 : (clientX - rect.left) / rect.width,
				y: rect.height <= 0 ? .5 : 1 - (clientY - rect.top) / rect.height
			};
		}
		/**
		* Attach the button ripple listeners.
		* @param targets - the fluid handle and its canvas.
		* @returns disposer removing every listener.
		*/
		function attachFluidInteractions(targets) {
			const { main, mainCanvas } = targets;
			const lastStir = /* @__PURE__ */ new WeakMap();
			const ripples = /* @__PURE__ */ new Set();
			const stirButton = (button, strength) => {
				const now = performance.now();
				if (now - (lastStir.get(button) ?? 0) < 160) return;
				lastStir.set(button, now);
				const rect = button.getBoundingClientRect();
				const point = uv(mainCanvas, rect.left + rect.width / 2, rect.top + rect.height / 2);
				main.stir(point.x, point.y, 0, -strength);
			};
			/** Slow radial ripple: a ring of gentle outward stirs expanding from the
			*  click point. Radius eases from zero so the influence creeps outward. */
			const ripple = (cx, cy) => {
				const rect = mainCanvas.getBoundingClientRect();
				if (rect.width <= 0 || rect.height <= 0) return;
				const ux = (cx - rect.left) / rect.width;
				const uy = 1 - (cy - rect.top) / rect.height;
				const start = performance.now();
				const duration = 1500;
				const maxRadius = 120;
				const count = 8;
				const step = () => {
					const t = performance.now() - start;
					if (t > duration) return;
					const k = t / duration;
					const radius = maxRadius * k * k;
					const strength = .05 * (1 - k);
					const spin = .4 * k;
					for (let i = 0; i < count; i += 1) {
						const angle = i / count * Math.PI * 2 + spin;
						const px = ux + radius * Math.cos(angle) / rect.width;
						const py = uy + radius * Math.sin(angle) / rect.height;
						main.stir(px, py, Math.cos(angle) * strength, -Math.sin(angle) * strength);
					}
					const id = requestAnimationFrame(step);
					ripples.add(id);
				};
				const id = requestAnimationFrame(step);
				ripples.add(id);
			};
			const onPointerOver = (event) => {
				const button = event.target?.closest?.("button");
				if (button !== void 0 && button !== null) stirButton(button, .04);
			};
			const onClick = (event) => {
				const button = event.target?.closest?.("button");
				if (button === void 0 || button === null) return;
				const now = performance.now();
				if (now - (lastStir.get(button) ?? 0) < 500) return;
				lastStir.set(button, now);
				const rect = button.getBoundingClientRect();
				ripple(rect.left + rect.width / 2, rect.top + rect.height / 2);
			};
			document.addEventListener("pointerover", onPointerOver, { capture: true });
			document.addEventListener("click", onClick, { capture: true });
			return () => {
				for (const id of ripples) cancelAnimationFrame(id);
				ripples.clear();
				document.removeEventListener("pointerover", onPointerOver, { capture: true });
				document.removeEventListener("click", onClick, { capture: true });
			};
		}
		//#endregion
		//#region src/client/seam-stamper.ts
		const SEAMS = [
			{
				attribute: "data-dsh-frame",
				selector: ":has(> [class*=\"sidebarCol\"])"
			},
			{
				attribute: "data-dsh-sidebar-root",
				selector: "[class*=\"sidebarCol\"] [class*=\"root\"]",
				first: true
			},
			{
				attribute: "data-dsh-surface",
				selector: "button[class*=\"newSession\"]"
			},
			{
				attribute: "data-dsh-trajectory",
				selector: "[data-conversation-composer-overlay]"
			},
			{
				attribute: "data-dsh-details",
				selector: "[class*=\"detailsCol\"] [class*=\"root\"]",
				first: true
			},
			{
				attribute: "data-dsh-inputbar",
				selector: ":has(> [data-composer-card])"
			},
			{
				attribute: "data-dsh-add",
				selector: "[data-composer-card] [class*=\"add\"]"
			},
			{
				attribute: "data-dsh-stats",
				selector: "[data-slot=\"conversation.composer.dock\"] [class*=\"root\"]"
			},
			{
				attribute: "data-dsh-aqua-spot",
				selector: "header",
				first: true
			},
			{
				attribute: "data-dsh-aqua-spot",
				selector: "[class*=\"sidebarCol\"]",
				first: true
			},
			{
				attribute: "data-dsh-aqua-spot",
				selector: "[data-dsh-inputbar]"
			},
			{
				attribute: "data-dsh-aqua-spot",
				selector: "[data-dsh-trajectory]"
			},
			{
				attribute: "data-dsh-aqua-spot",
				selector: "[data-dsh-surface]"
			},
			{
				attribute: "data-dsh-wordmark",
				selector: "[class*=\"sidebarCol\"] [class*=\"brand\"]",
				first: true
			}
		];
		function stamp(seam) {
			if (seam.first) {
				const el = document.querySelector(seam.selector);
				if (el !== null && !el.hasAttribute(seam.attribute)) el.setAttribute(seam.attribute, "");
				return;
			}
			for (const el of document.querySelectorAll(seam.selector)) if (!el.hasAttribute(seam.attribute)) el.setAttribute(seam.attribute, "");
		}
		function stampAll() {
			for (const seam of SEAMS) stamp(seam);
		}
		/**
		* Stamp the seams once, then keep them stamped as React remounts nodes.
		* @returns a disposer that disconnects the observer.
		*/
		function startSeamStamper() {
			stampAll();
			const observer = new MutationObserver(() => {
				stampAll();
			});
			observer.observe(document.documentElement, {
				childList: true,
				subtree: true
			});
			return () => {
				observer.disconnect();
			};
		}
		//#endregion
		//#region src/client/whale.ts
		/**
		* Particle whale: the deepseek.com/harness hero's centerpiece fish rendered
		* as particles — a faithful 2D port of the site's `HeroDigitileR3F` (chunk
		* 776) minus three.js. The 24×18 brand-fish SVG is sampled onto a 60×60
		* luminance grid, the particles scatter, then assemble into the silhouette
		* with the site's drift / tail-sway / light-shading / pointer-push math.
		* Additive canvas blending + `mix-blend-mode: screen` (as on the site).
		*/
		const WHALE_SVG = `<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.9168 1.43018C22.6713 1.31018 22.5658 1.53918 22.4223 1.65519C22.3733 1.69269 22.3318 1.74169 22.2903 1.78669C21.9317 2.1697 21.5127 2.42121 20.9657 2.39121C20.1657 2.34621 19.4827 2.59771 18.8787 3.20973C18.7502 2.45521 18.3236 2.0047 17.6746 1.71569C17.3351 1.56568 16.9916 1.41518 16.7536 1.08867C16.5876 0.856163 16.5421 0.597155 16.4591 0.341647C16.4061 0.187643 16.3536 0.0301382 16.1761 0.00363739C15.9836 -0.0263635 15.9081 0.135141 15.8326 0.270145C15.5306 0.822162 15.4136 1.43018 15.4251 2.0462C15.4516 3.43174 16.0366 4.53527 17.1991 5.3203C17.3311 5.4103 17.3651 5.5003 17.3236 5.63181C17.2441 5.90231 17.1501 6.16482 17.0671 6.43533C17.0141 6.60784 16.9351 6.64584 16.7501 6.57033C16.1121 6.30383 15.5611 5.90931 15.074 5.4328C14.2475 4.63328 13.5 3.75075 12.568 3.05973C12.349 2.89822 12.13 2.74822 11.9034 2.60522C10.9524 1.68169 12.028 0.923165 12.277 0.833162C12.5375 0.739159 12.3675 0.41615 11.5259 0.42015C10.6844 0.42365 9.91439 0.705658 8.93286 1.08117C8.78935 1.13767 8.63835 1.17867 8.48384 1.21267C7.59332 1.04367 6.66829 1.00617 5.70226 1.11517C3.88321 1.31768 2.43016 2.1777 1.36213 3.64575C0.0790928 5.4103 -0.222916 7.41536 0.146595 9.50642C0.535106 11.7105 1.66014 13.535 3.38869 14.9616C5.18125 16.4406 7.24581 17.1657 9.60138 17.0266C11.0319 16.9441 12.6245 16.7526 14.421 15.2321C14.874 15.4576 15.3496 15.5476 16.1381 15.6151C16.7456 15.6716 17.3306 15.5851 17.7836 15.4911C18.4931 15.3411 18.4441 14.6841 18.1876 14.5636C16.1081 13.595 16.5646 13.9891 16.1496 13.67C17.2061 12.42 18.8202 10.1979 19.3182 7.17235C19.3672 6.83834 19.4297 6.36783 19.4222 6.09732C19.4182 5.93231 19.4562 5.86831 19.6447 5.84931C20.1657 5.78931 20.6712 5.64681 21.1357 5.3913C22.4833 4.65528 23.0268 3.44624 23.1548 1.9972C23.1738 1.77569 23.1508 1.54668 22.9168 1.43018ZM11.1749 14.4736C9.15936 12.889 8.18184 12.3675 7.77832 12.39C7.40081 12.4125 7.46881 12.8445 7.55182 13.126C7.63882 13.404 7.75182 13.5955 7.91033 13.8396C8.01983 14.0011 8.09533 14.2411 7.80083 14.4216C7.15181 14.8231 6.02327 14.2866 5.97027 14.2601C4.65673 13.4865 3.5587 12.4655 2.78467 11.069C2.03715 9.72493 1.60314 8.28289 1.53164 6.74384C1.51264 6.37233 1.62214 6.24082 1.99215 6.17332C2.47916 6.08332 2.98118 6.06432 3.46769 6.13582C5.52476 6.43633 7.27581 7.35586 8.74385 8.8129C9.58188 9.64243 10.2159 10.634 10.8689 11.6025C11.5634 12.631 12.3105 13.611 13.262 14.4146C13.598 14.6961 13.866 14.9101 14.1225 15.0681C13.349 15.1546 12.058 15.1731 11.1749 14.4746V14.4736ZM12.141 8.25988C12.141 8.09488 12.273 7.96338 12.439 7.96338C12.4765 7.96338 12.5105 7.97088 12.541 7.98188C12.5825 7.99688 12.6205 8.01938 12.6505 8.05338C12.7035 8.10588 12.7335 8.18088 12.7335 8.25988C12.7335 8.42489 12.6015 8.55639 12.4355 8.55639C12.2695 8.55639 12.141 8.42489 12.141 8.25988ZM15.1415 9.79893C14.949 9.87793 14.7565 9.94544 14.5715 9.95294C14.2845 9.96794 13.9715 9.85143 13.8015 9.70893C13.5375 9.48742 13.3485 9.36342 13.2695 8.97691C13.2355 8.8119 13.2545 8.55639 13.2845 8.40989C13.3525 8.09438 13.277 7.89187 13.0545 7.70787C12.8735 7.55786 12.643 7.51636 12.39 7.51636C12.2955 7.51636 12.209 7.47486 12.1445 7.44136C12.039 7.38886 11.9519 7.25735 12.035 7.09585C12.0615 7.04335 12.19 6.91584 12.22 6.89334C12.5635 6.69784 12.9595 6.76184 13.326 6.90834C13.6655 7.04735 13.9225 7.30236 14.292 7.66287C14.6695 8.09838 14.7375 8.21838 14.9525 8.54539C15.1225 8.8009 15.277 9.06341 15.3831 9.36392C15.4471 9.55142 15.3641 9.70493 15.1415 9.79893Z" fill="#FFFFFF"/>
</svg>`;
		/** Sampling grid side (the site uses 60). */
		const GRID = 60;
		/** World units per grid cell (the site: (n - 30) * 0.18). */
		const UNIT = .18;
		/** Fixed light position (the whale's lightParams: x/y/z with followX). */
		const LIGHT_X = 4.5;
		const LIGHT_Y = 5.5;
		const LIGHT_RANGE = 14;
		const SHADE_MIN = .2;
		/** Site: shadeMax: 0.4 * P.shadeMax where P.shadeMax = 2.79. */
		const SHADE_MAX = .4 * 2.79;
		const FOLLOW_X = 1.05;
		const LOOSE = 1;
		/** Mouse params (DIGITILE_MOUSE_DEFAULTS). */
		const MOUSE_RADIUS = 4.9;
		const MOUSE_STRENGTH = .8;
		const MOUSE_DECAY = .2;
		const MOUSE_DISTORT = 5;
		/** Render cadence, matching the site's FPS prop. */
		const FPS$1 = 30;
		/** Camera viewport height in world units (z 18, fov 50). */
		const WORLD_H = 36 * Math.tan(50 * Math.PI / 360);
		/** Cheap per-particle hash noise in [-0.5, 0.5] (site's fract(sin) jitter). */
		function hash(n) {
			const s = Math.sin(n * 12.9898) * 43758.5453;
			return s - Math.floor(s) - .5;
		}
		/**
		* Mount the particle whale into `host` (the ambient scene) and start the
		* engine. The wrapper is centered on the MAIN column — the `[data-phase]`
		* conversation area, i.e. everything right of the sidebar — not the whole
		* viewport.
		* @param host - the container the whale wrapper is appended to.
		* @param dark - resolved scheme at mount (white particles on dark, gray on light).
		* @returns the handle.
		*/
		function mountWhale(host, dark) {
			const holder = document.createElement("div");
			holder.setAttribute("data-dsh-aqua-whale", "");
			holder.setAttribute("data-scheme", dark ? "dark" : "light");
			const canvas = document.createElement("canvas");
			canvas.setAttribute("aria-hidden", "true");
			holder.appendChild(canvas);
			host.appendChild(holder);
			const ctx = canvas.getContext("2d");
			if (ctx === null) {
				holder.remove();
				return {
					setDark: () => {},
					dispose: () => {}
				};
			}
			const reduced = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
			const particles = [];
			let raf = 0;
			let disposed = false;
			let startedAt = performance.now();
			let darkMode = dark;
			let mouseWorld = {
				x: 0,
				y: 0
			};
			let dpr = 1;
			let scale = 1;
			let width = 0;
			let height = 0;
			/** Center the wrapper on the main column (viewports minus the sidebar). */
			const positionHost = () => {
				const rect = document.querySelector("[data-phase]")?.getBoundingClientRect();
				const r = rect !== void 0 && rect.width > 0 ? rect : {
					left: 0,
					top: 0,
					width: window.innerWidth,
					height: window.innerHeight
				};
				const size = Math.round(Math.max(220, Math.min(660, window.innerHeight * .76, r.width * .8)));
				const left = Math.round(r.left + r.width / 2);
				const top = Math.round(r.top + r.height / 2);
				if (holder.style.width !== `${size}px`) holder.style.width = `${size}px`;
				if (holder.style.height !== `${size}px`) holder.style.height = `${size}px`;
				if (holder.style.left !== `${left}px`) holder.style.left = `${left}px`;
				if (holder.style.top !== `${top}px`) holder.style.top = `${top}px`;
			};
			/** Keep the canvas backing store in step with the holder box. */
			const resize = () => {
				positionHost();
				const rect = holder.getBoundingClientRect();
				width = Math.max(1, rect.width);
				height = Math.max(1, rect.height);
				dpr = Math.min(window.devicePixelRatio || 1, 1.5);
				canvas.width = Math.max(1, Math.round(width * dpr));
				canvas.height = Math.max(1, Math.round(height * dpr));
				scale = height / WORLD_H;
			};
			/** Sample the fish SVG onto the 60×60 grid and build the particle set. */
			const sample = (img) => {
				const off = document.createElement("canvas");
				off.width = GRID;
				off.height = GRID;
				const octx = off.getContext("2d");
				if (octx === null) return;
				octx.fillStyle = "#000";
				octx.fillRect(0, 0, GRID, GRID);
				const fit = Math.min(GRID / img.width, GRID / img.height);
				const w = img.width * fit;
				const h = img.height * fit;
				octx.drawImage(img, (GRID - w) / 2, (GRID - h) / 2, w, h);
				const data = octx.getImageData(0, 0, GRID, GRID).data;
				const lum = new Float32Array(GRID * GRID);
				for (let i = 0; i < GRID * GRID; i++) lum[i] = (.299 * data[4 * i] + .587 * data[4 * i + 1] + .114 * data[4 * i + 2]) / 255;
				const hasBrightNeighbor = (x, y) => {
					for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) {
						if (dx === 0 && dy === 0) continue;
						const nx = x + dx;
						const ny = y + dy;
						if (nx < 0 || ny < 0 || nx >= GRID || ny >= GRID) continue;
						if (lum[ny * GRID + nx] > .2) return true;
					}
					return false;
				};
				for (let e = 0; e < GRID; e++) for (let n = 0; n < GRID; n++) {
					const a = lum[e * GRID + n];
					if (a <= .2 || !hasBrightNeighbor(n, e)) continue;
					const x = (n - GRID / 2) * UNIT;
					const y = (GRID / 2 - e) * UNIT;
					let edge = 0;
					for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
						if (dx === 0 && dy === 0) continue;
						const nx = n + dx;
						const ny = e + dy;
						if (nx < 0 || ny < 0 || nx >= GRID || ny >= GRID || lum[ny * GRID + nx] <= .2) edge++;
					}
					const phi = Math.random() * Math.PI * 2;
					const theta = Math.acos(2 * Math.random() - 1);
					const rad = 3 * (.4 + .6 * Math.random());
					particles.push({
						x,
						y,
						opacity: a,
						edge: edge / 8,
						sx: Math.sin(theta) * Math.cos(phi) * rad,
						sy: Math.sin(theta) * Math.sin(phi) * rad,
						sz: Math.cos(theta) * rad * .5
					});
				}
			};
			/** Draw one frame at the given assembly progress (0..1). */
			const draw = (assembly, time) => {
				if (width === 0 || height === 0) resize();
				ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
				ctx.clearRect(0, 0, width, height);
				ctx.globalCompositeOperation = "lighter";
				const targetX = mouseWorld.x;
				const targetY = mouseWorld.y;
				const lightX = LIGHT_X + targetX * FOLLOW_X;
				const lightY = LIGHT_Y;
				const mouseRadius = MOUSE_RADIUS;
				const strength = MOUSE_STRENGTH;
				const size = Math.max(1.1, .06 * scale * dpr);
				const breathe = .15 * Math.sin(.4 * time);
				for (let i = 0; i < particles.length; i++) {
					const p = particles[i];
					const loose = LOOSE * (.25 + .75 * p.edge) * assembly;
					let px = p.x + hash(i) * .05 * loose;
					let py = p.y + hash(i * 1.37 + 7) * .05 * loose;
					px += Math.sin(time * .5 + i * .53) * .06 * loose;
					py += Math.cos(time * .42 + i * .71) * .06 * loose;
					const tail = smoothstep(.5, 4.5, p.x) * LOOSE * assembly;
					py += Math.sin(time * 1.1 - p.x * .7) * .1 * tail;
					px += Math.cos(time * .9 - p.x * .55) * .06 * tail;
					px = p.sx + (px - p.sx) * assembly;
					py = p.sy + (py - p.sy) * assembly;
					if (assembly > .8) {
						const mouseEffect = (assembly - .8) * 5;
						const mx = px - targetX;
						const my = py - targetY;
						const dist = Math.sqrt(mx * mx + my * my);
						if (dist < mouseRadius && dist > .001) {
							const t = 1 - dist / mouseRadius;
							const force = t * t * t * mouseEffect * strength;
							const angle = Math.sin(i * .37 + time * .5) * MOUSE_DISTORT;
							const ca = Math.cos(angle);
							const sa = Math.sin(angle);
							const ux = mx / dist;
							const uy = my / dist;
							const rx = ux * ca - uy * sa;
							const ry = ux * sa + uy * ca;
							px += rx * force * 2;
							py += ry * force * 2;
						}
					}
					const ldx = px - lightX;
					const ldy = py - lightY;
					const lit = Math.min(1, Math.max(0, 1 - Math.sqrt(ldx * ldx + ldy * ldy) / LIGHT_RANGE));
					const vLight = SHADE_MIN + SHADE_MAX * lit * lit;
					const glow = smoothstep(8, 0, Math.sqrt(px * px + py * py)) * .3 * assembly;
					const baseAlpha = .45 + .3 * assembly;
					const shimmer = Math.sin(time * 1.5 + px * 5 + py * 3) * .1 + .9;
					const alpha = p.opacity * (baseAlpha + glow) * shimmer * Math.min(vLight, 1);
					const br = darkMode ? .75 : .42;
					const bg = darkMode ? .8 : .44;
					const bb = darkMode ? .9 : .47;
					const r = Math.min(255, Math.round((br * assembly + glow * .2) * vLight * 255));
					const g = Math.min(255, Math.round((bg * assembly + glow * .3) * vLight * 255));
					const b = Math.min(255, Math.round((bb * assembly + glow * .5) * vLight * 255));
					if (alpha <= .004) continue;
					ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
					const sx = width / 2 + px * scale - size / 2;
					const sy = height / 2 - (py + breathe) * scale - size / 2;
					ctx.fillRect(sx, sy, size, size);
				}
				ctx.globalCompositeOperation = "source-over";
			};
			function smoothstep(a, b, t) {
				const x = Math.min(1, Math.max(0, (t - a) / (b - a)));
				return x * x * (3 - 2 * x);
			}
			let mouseNdc = {
				x: 0,
				y: 0
			};
			const onMove = (event) => {
				const rect = holder.getBoundingClientRect();
				if (rect.width === 0 || rect.height === 0) return;
				mouseNdc = {
					x: (event.clientX - rect.left) / rect.width * 2 - 1,
					y: -((event.clientY - rect.top) / rect.height * 2 - 1)
				};
			};
			window.addEventListener("pointermove", onMove, { passive: true });
			const start = () => {
				if (disposed) return;
				let last = performance.now();
				const step = (now) => {
					if (disposed) return;
					if (now - last < 1e3 / FPS$1) {
						raf = requestAnimationFrame(step);
						return;
					}
					last = now - (now - last) % (1e3 / FPS$1);
					positionHost();
					const elapsed = (now - startedAt) / 1e3;
					const raw = Math.min(1, Math.max(0, (elapsed - .3) / 2.5));
					const assembly = smoothstep(0, 1, 1 - Math.pow(1 - raw, 3));
					const targetX = mouseNdc.x * WORLD_H / 2;
					const targetY = mouseNdc.y * WORLD_H / 2;
					mouseWorld.x += (targetX - mouseWorld.x) * MOUSE_DECAY;
					mouseWorld.y += (targetY - mouseWorld.y) * MOUSE_DECAY;
					draw(assembly, elapsed);
					raf = requestAnimationFrame(step);
				};
				raf = requestAnimationFrame(step);
			};
			resize();
			window.addEventListener("resize", resize);
			const img = new Image();
			img.onload = () => {
				if (disposed) return;
				sample(img);
				resize();
				if (reduced) {
					mouseWorld = {
						x: 0,
						y: 0
					};
					draw(1, 2);
					window.setTimeout(() => {
						if (disposed) return;
						resize();
						draw(1, 2);
					}, 600);
				} else start();
			};
			img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(WHALE_SVG)}`;
			return {
				setDark: (dark) => {
					if (darkMode === dark) return;
					darkMode = dark;
					holder.setAttribute("data-scheme", dark ? "dark" : "light");
					if (reduced && particles.length > 0) draw(1, 2);
				},
				dispose: () => {
					disposed = true;
					cancelAnimationFrame(raf);
					window.removeEventListener("pointermove", onMove);
					window.removeEventListener("resize", resize);
					holder.remove();
				}
			};
		}
		//#endregion
		//#region src/client/mesh.ts
		/**
		* Interactive mesh: the deepseek.com/harness hero's dot-grid decoration —
		* a 90px grid of dots with spring physics that repel from the pointer
		* (radius 140px), the grid lines stretching with them. Faithful port of the
		* site's `h()` grid component (30fps, dpr ≤ 2, idle-pause). Rendered inside
		* the ambient scene behind the app content; pointer-events pass through.
		*/
		const SPACING = 90;
		const REPEL_RADIUS = 140;
		const REPEL_FORCE = 30;
		const SPRING = .05;
		const DAMPING = .85;
		const LINE_GAP = 10;
		const MIN_LINE_DIST = 20;
		const LINE_COLOR = "rgba(60, 100, 160, ";
		const DOT_COLOR = "rgba(60, 100, 160, ";
		const LINE_ALPHA = .1;
		const DOT_ALPHA = .2;
		const FPS = 30;
		/**
		* Mount the interactive mesh into `host` (the ambient scene).
		* @param host - the container the mesh canvas is appended to.
		* @returns the handle.
		*/
		function mountMesh(host) {
			const canvas = document.createElement("canvas");
			canvas.setAttribute("data-dsh-aqua-mesh", "");
			canvas.setAttribute("aria-hidden", "true");
			host.appendChild(canvas);
			const ctx = canvas.getContext("2d");
			if (ctx === null) {
				canvas.remove();
				return { dispose: () => {} };
			}
			const reduced = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
			const coarse = typeof matchMedia !== "undefined" && matchMedia("(hover: none), (pointer: coarse)").matches;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			let dots = [];
			let cols = 0;
			let rows = 0;
			let w = 0;
			let h = 0;
			let raf = 0;
			let disposed = false;
			let idle = false;
			let visible = true;
			let resizeTimer = 0;
			const mouse = {
				x: NaN,
				y: NaN
			};
			const build = () => {
				cols = Math.ceil(w / SPACING) + 1;
				rows = Math.ceil(h / SPACING) + 1;
				const startX = (w - (cols - 1) * SPACING) / 2;
				const startY = (h - (rows - 1) * SPACING) / 2;
				dots = [];
				for (let ry = 0; ry < rows; ry++) for (let rx = 0; rx < cols; rx++) {
					const x = startX + SPACING * rx;
					const y = startY + SPACING * ry;
					dots.push({
						restX: x,
						restY: y,
						x,
						y,
						vx: 0,
						vy: 0
					});
				}
			};
			const resize = () => {
				const cw = canvas.clientWidth;
				const ch = canvas.clientHeight;
				if (cw === w && ch === h) return;
				w = cw;
				h = ch;
				canvas.width = Math.max(1, Math.round(w * dpr));
				canvas.height = Math.max(1, Math.round(h * dpr));
				ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
				window.clearTimeout(resizeTimer);
				resizeTimer = window.setTimeout(build, 150);
			};
			resize();
			build();
			const wake = () => {
				if (!idle) return;
				idle = false;
				if (raf === 0) raf = requestAnimationFrame(frame);
			};
			const onMove = (event) => {
				if (reduced || coarse) return;
				mouse.x = event.clientX;
				mouse.y = event.clientY;
				wake();
			};
			if (!reduced && !coarse) window.addEventListener("pointermove", onMove, { passive: true });
			let last = 0;
			const frame = (now) => {
				raf = 0;
				if (disposed) return;
				if (!visible || now - last < 1e3 / FPS) {
					raf = requestAnimationFrame(frame);
					return;
				}
				last = now - (now - last) % (1e3 / FPS);
				const cw = canvas.clientWidth;
				const ch = canvas.clientHeight;
				if (cw !== w || ch !== h) resize();
				ctx.clearRect(0, 0, w, h);
				const mx = mouse.x;
				const my = mouse.y;
				let maxV = 0;
				for (const dot of dots) {
					if (!Number.isNaN(mx) && !Number.isNaN(my)) {
						const dx = dot.x - mx;
						const dy = dot.y - my;
						const dist = Math.sqrt(dx * dx + dy * dy);
						if (dist < REPEL_RADIUS && dist > .1) {
							const force = (1 - dist / REPEL_RADIUS) * REPEL_FORCE;
							const nx = dx / dist;
							const ny = dy / dist;
							dot.vx += nx * force * .1;
							dot.vy += ny * force * .1;
						}
					}
					const sx = dot.restX - dot.x;
					const sy = dot.restY - dot.y;
					dot.vx += SPRING * sx;
					dot.vy += SPRING * sy;
					dot.vx *= DAMPING;
					dot.vy *= DAMPING;
					dot.x += dot.vx;
					dot.y += dot.vy;
					const v = Math.abs(dot.vx) + Math.abs(dot.vy);
					if (v > maxV) maxV = v;
				}
				ctx.strokeStyle = `${LINE_COLOR}${LINE_ALPHA})`;
				ctx.lineWidth = .5;
				for (let ry = 0; ry < rows; ry++) for (let rx = 0; rx < cols - 1; rx++) {
					const a = dots[ry * cols + rx];
					const b = dots[ry * cols + rx + 1];
					const dx = b.x - a.x;
					const dy = b.y - a.y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < MIN_LINE_DIST) continue;
					const ux = dx / dist;
					const uy = dy / dist;
					ctx.beginPath();
					ctx.moveTo(a.x + LINE_GAP * ux, a.y + LINE_GAP * uy);
					ctx.lineTo(b.x - LINE_GAP * ux, b.y - LINE_GAP * uy);
					ctx.stroke();
				}
				for (let ry = 0; ry < rows - 1; ry++) for (let rx = 0; rx < cols; rx++) {
					const a = dots[ry * cols + rx];
					const b = dots[(ry + 1) * cols + rx];
					const dx = b.x - a.x;
					const dy = b.y - a.y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < MIN_LINE_DIST) continue;
					const ux = dx / dist;
					const uy = dy / dist;
					ctx.beginPath();
					ctx.moveTo(a.x + LINE_GAP * ux, a.y + LINE_GAP * uy);
					ctx.lineTo(b.x - LINE_GAP * ux, b.y - LINE_GAP * uy);
					ctx.stroke();
				}
				ctx.fillStyle = `${DOT_COLOR}${DOT_ALPHA})`;
				for (const dot of dots) {
					let r = 1.8;
					let alpha = DOT_ALPHA;
					if (!Number.isNaN(mx) && !Number.isNaN(my)) {
						const dx = dot.x - mx;
						const dy = dot.y - my;
						const dist = Math.sqrt(dx * dx + dy * dy);
						const near = Math.max(0, 1 - dist / REPEL_RADIUS);
						r = 1.8 + 2 * near;
						alpha = DOT_ALPHA + .4 * near;
					}
					ctx.globalAlpha = alpha;
					const size = 2 * r;
					ctx.fillRect(dot.x - r, dot.y - r, size, size);
				}
				ctx.globalAlpha = 1;
				if (maxV < .01) idle = true;
				else raf = requestAnimationFrame(frame);
			};
			if (reduced || coarse) {
				resize();
				ctx.clearRect(0, 0, w, h);
				ctx.strokeStyle = `${LINE_COLOR}${LINE_ALPHA})`;
				ctx.lineWidth = .5;
				for (let ry = 0; ry < rows; ry++) for (let rx = 0; rx < cols - 1; rx++) {
					const a = dots[ry * cols + rx];
					const b = dots[ry * cols + rx + 1];
					ctx.beginPath();
					ctx.moveTo(a.x + LINE_GAP, a.y);
					ctx.lineTo(b.x - LINE_GAP, b.y);
					ctx.stroke();
				}
				for (let ry = 0; ry < rows - 1; ry++) for (let rx = 0; rx < cols; rx++) {
					const a = dots[ry * cols + rx];
					const b = dots[(ry + 1) * cols + rx];
					ctx.beginPath();
					ctx.moveTo(a.x, a.y + LINE_GAP);
					ctx.lineTo(b.x, b.y - LINE_GAP);
					ctx.stroke();
				}
				ctx.fillStyle = `${DOT_COLOR}${DOT_ALPHA})`;
				for (const dot of dots) ctx.fillRect(dot.x - 1.8, dot.y - 1.8, 3.6, 3.6);
			} else {
				raf = requestAnimationFrame(frame);
				const observer = new IntersectionObserver(([entry]) => {
					visible = entry.isIntersecting;
					if (visible) wake();
				}, { threshold: 0 });
				observer.observe(canvas);
				return { dispose: () => {
					disposed = true;
					cancelAnimationFrame(raf);
					window.clearTimeout(resizeTimer);
					observer.disconnect();
					window.removeEventListener("pointermove", onMove);
					canvas.remove();
				} };
			}
			return { dispose: () => {
				disposed = true;
				cancelAnimationFrame(raf);
				window.clearTimeout(resizeTimer);
				window.removeEventListener("pointermove", onMove);
				canvas.remove();
			} };
		}
		//#endregion
		//#region src/client/spot-core.ts
		/**
		* Spot geometry + overlay maintenance, shared by the spotlight/tilt
		* controller (spotlight.ts).
		*
		* A "spot" is a floating-glass pane stamped with `data-dsh-aqua-spot` by the
		* seam-stamper. One injected overlay lives inside a spot:
		* `data-dsh-aqua-glow` — the cursor glow surface (geometry set by the hover
		* controller; the radial fill lives in the stylesheet). It is re-attached
		* after React re-renders wipe it (one shared MutationObserver).
		*/
		/** Seam attribute marking a floating-glass pane as a spotlight target. */
		const SPOT_ATTR = "data-dsh-aqua-spot";
		/** Attribute on the injected glow overlay div. */
		const GLOW_ATTR = "data-dsh-aqua-glow";
		/** Marker set on a pane while the pointer is inside it. */
		const ON_ATTR = "data-spot-on";
		/** Selector matching every stamped pane. */
		const SPOT_SELECTOR = `[${SPOT_ATTR}]`;
		/** Nearest stamped pane from an event target (null when outside all panes). */
		function closestSpot(target) {
			return target instanceof Element ? target.closest(SPOT_SELECTOR) : null;
		}
		/** Every stamped pane in document order. */
		function spotElements() {
			return Array.from(document.querySelectorAll(SPOT_SELECTOR));
		}
		/**
		* The visible glass region of a pane (viewport rect). The fused
		* composer+stats spot is the wider invisible inputbar wrapper — its glass is
		* the union of the composer card and the docked stats band, so the wrapper's
		* side gutters stay outside every effect.
		*/
		function visualRect(spot) {
			if (spot.querySelector("[data-composer-card]") !== null) {
				const r0 = spot.querySelector("[data-composer-card]").getBoundingClientRect();
				const stats = spot.querySelector("[data-dsh-stats]");
				if (stats === null) return r0;
				const r1 = stats.getBoundingClientRect();
				const left = Math.min(r0.left, r1.left);
				const top = Math.min(r0.top, r1.top);
				return new DOMRect(left, top, Math.max(r0.right, r1.right) - left, Math.max(r0.bottom, r1.bottom) - top);
			}
			return spot.getBoundingClientRect();
		}
		/** Is the pointer over the visible glass of the pane? */
		function inside(visual, clientX, clientY) {
			return clientX >= visual.left && clientX <= visual.right && clientY >= visual.top && clientY <= visual.bottom;
		}
		/** Offset-chain position of `el` within `ancestor` (both boxes), in the
		*  UNTRANSFORMED layout space — offsetLeft/offsetTop ignore transforms, so
		*  this stays exact while the pane is tilted. */
		function localTopLeft(el, ancestor) {
			let x = 0;
			let y = 0;
			let node = el;
			while (node !== null && node !== ancestor) {
				x += node.offsetLeft;
				y += node.offsetTop;
				node = node.offsetParent;
			}
			return {
				x,
				y
			};
		}
		/**
		* The visible glass region of a pane in the pane's own local space
		* (untransformed — safe to measure while tilted). For the fused
		* composer+stats spot this is the union of the composer card and the docked
		* stats band; for the other panes it is the pane's own box.
		*/
		function glassLocalRect(spot) {
			const card = spot.querySelector("[data-composer-card]");
			if (card === null) return {
				left: 0,
				top: 0,
				width: spot.offsetWidth,
				height: spot.offsetHeight
			};
			const cardPos = localTopLeft(card, spot);
			let left = cardPos.x;
			let top = cardPos.y;
			let right = left + card.offsetWidth;
			let bottom = top + card.offsetHeight;
			const stats = spot.querySelector("[data-dsh-stats]");
			if (stats !== null) {
				const statsPos = localTopLeft(stats, spot);
				left = Math.min(left, statsPos.x);
				top = Math.min(top, statsPos.y);
				right = Math.max(right, statsPos.x + stats.offsetWidth);
				bottom = Math.max(bottom, statsPos.y + stats.offsetHeight);
			}
			return {
				left,
				top,
				width: right - left,
				height: bottom - top
			};
		}
		/** Ensure the pane carries exactly one glow overlay div. */
		function ensureGlow(spot) {
			let glow = spot.querySelector(`:scope > [${GLOW_ATTR}]`);
			if (glow === null) {
				glow = document.createElement("div");
				glow.setAttribute(GLOW_ATTR, "");
				glow.setAttribute("aria-hidden", "true");
				spot.appendChild(glow);
			}
			return glow;
		}
		/**
		* One shared observer + resize feed: keeps the glow divs glued to the panes
		* through React re-renders and notifies the caller of DOM/layout changes
		* (the caller coalesces the callbacks).
		* @returns a disposer that removes every injected glow div.
		*/
		function startOverlayKeeper(onChange) {
			const tick = () => {
				for (const spot of spotElements()) ensureGlow(spot);
				onChange();
			};
			tick();
			const observer = new MutationObserver(tick);
			observer.observe(document.documentElement, {
				childList: true,
				subtree: true
			});
			window.addEventListener("resize", tick, { passive: true });
			return () => {
				observer.disconnect();
				window.removeEventListener("resize", tick);
				for (const glow of document.querySelectorAll(`[${GLOW_ATTR}]`)) glow.remove();
			};
		}
		//#endregion
		//#region src/client/spotlight.ts
		/**
		* Cursor spotlight glow + geometric tilt: the deepseek.com/harness
		* feature-card hover interactions, ported onto the floating glass panes.
		*
		* Two effects ride the same hover marker (`data-spot-on`):
		* - a blue radial glow that follows the cursor — a `data-dsh-aqua-glow`
		*   overlay inside each pane whose inline background a JS pointermove
		*   writes (`radial-gradient(180px at Xpx Ypx, rgba(120,170,255,.15),
		*   transparent 70%)`, official values). The glow sits BEHIND the glass
		*   (z-index -1) so it diffuses through the translucent surface and never
		*   covers content;
		* - a cursor-driven rigid tilt written inline per pointermove, the official
		*   card's exact recipe (sign-verified from its inline transform):
		*   `perspective(800px) rotateX(θx) rotateY(θy) scale(1.01)` with
		*   θx = −k·Δy, θy = +k·Δx — the edge under the cursor sinks, the far edge
		*   lifts (cursor right ⇒ right sinks; cursor top ⇒ top sinks), ≈1° at the
		*   pane edge, 0.1s ease-out transition;
		*
		* Port notes:
		* - the sidebar NEVER tilts (its settings overlay renders inside the column
		*   and a running transform would re-anchor it — the panel traps at the
		*   column width); it keeps the glow;
		* - the fused composer+stats spot is the wider invisible inputbar wrapper:
		*   the hover region, glow geometry and tilt pivot are computed against the
		*   VISIBLE glass (see visualRect / glassLocalRect in spot-core.ts), so the
		*   wrapper's side gutters never respond;
		* - the tilt rides a short CSS transition and reduced motion skips it;
		* - geometry is measured ONCE per hover session in untransformed local space
		*   (offset-based — immune to the pane's own rotation) and refreshed on
		*   DOM/layout changes, so the per-frame path does zero layout reads.
		*
		* Two html-attribute gates from the layer's settings: `data-dsh-aqua-spotlight`
		* (glow) and `data-dsh-aqua-press` (tilt). Hover tracking runs when EITHER is
		* on. The glow divs are maintained by spot-core's overlay keeper, independent
		* of the toggles.
		*/
		/** html attribute the layer uses to switch the glow effect (its toggle). */
		const SPOTLIGHT_ATTRIBUTE = "data-dsh-aqua-spotlight";
		/** html attribute the layer uses to switch the tilt effect (its toggle). */
		const PRESS_ATTRIBUTE = "data-dsh-aqua-press";
		/** Glow radius, px — matches the official card. */
		const GLOW_RADIUS = 180;
		/** Fallback glow color (the CSS var is normally provided by the stylesheet). */
		const GLOW_FALLBACK = "rgba(90, 215, 255, 0.17)";
		/** Tilt magnitude at the pane edge, radians (≈1° — perceptible but gentle). */
		const TILT_MAX = .0175;
		/** Tilt perspective distance, px (official value). */
		const TILT_PERSPECTIVE = 800;
		/** Ease-back settle time (ms) — must outlast the CSS transform transition. */
		const SETTLE_MS = 240;
		/** The glow is live only while its gate attribute is on <html>. */
		function glowGated() {
			return document.documentElement.hasAttribute(SPOTLIGHT_ATTRIBUTE);
		}
		/** The tilt is live only while its gate attribute is on <html>. */
		function tiltGated() {
			return document.documentElement.hasAttribute(PRESS_ATTRIBUTE);
		}
		/** Hover tracking runs when EITHER effect is enabled. */
		function hoverGated() {
			return glowGated() || tiltGated();
		}
		/** Whether the tilt may run on this pane right now. */
		function tiltable(spot) {
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
			if (spot.matches("[class*=\"sidebarCol\"]") && document.querySelector("[role=\"dialog\"]") !== null) return false;
			return true;
		}
		/**
		* Attach the delegated pointer feeds. Everything is document-level: no
		* per-pane listeners, and the rAF merge collapses pointermove bursts to one
		* style write per frame.
		* @returns a disposer that drops listeners, overlays, and inline styles.
		*/
		function startSpotlight() {
			/** The hovered pane (cleared on leave). */
			let current = null;
			/** Geometry for the hovered pane. */
			let session = null;
			let raf = 0;
			let refreshRaf = 0;
			/** Panes currently carrying a JS-written transform (wipe only those). */
			const tilted = /* @__PURE__ */ new WeakSet();
			/** Pending ease-back removal timers per pane (leave → neutral → cleanup). */
			const settle = /* @__PURE__ */ new Map();
			/** Ease a pressed pane back to neutral, then drop the inline transform. */
			const easeBack = (spot) => {
				if (!tilted.has(spot)) return;
				tilted.delete(spot);
				spot.style.transform = `perspective(${TILT_PERSPECTIVE}px) rotateX(0rad) rotateY(0rad) scale(1)`;
				const id = window.setTimeout(() => {
					settle.delete(spot);
					spot.style.removeProperty("transform");
					spot.style.removeProperty("transform-origin");
				}, SETTLE_MS);
				settle.set(spot, id);
			};
			/** Drop every effect this controller wrote onto a pane. */
			const clearSpot = (spot) => {
				spot.removeAttribute(ON_ATTR);
				if (current === spot) {
					current = null;
					session = null;
				}
				const glow = spot.querySelector(`:scope > [${GLOW_ATTR}]`);
				if (glow !== null) glow.style.removeProperty("background-image");
				easeBack(spot);
			};
			/** Capture (or refresh) the hover geometry; sets the glow overlay box. */
			const measure = (spot) => {
				const visual = visualRect(spot);
				const local = glassLocalRect(spot);
				const glow = glowGated() ? ensureGlow(spot) : null;
				if (glow !== null) {
					glow.style.left = `${local.left}px`;
					glow.style.top = `${local.top}px`;
					glow.style.width = `${local.width}px`;
					glow.style.height = `${local.height}px`;
				}
				return {
					spot,
					visual,
					local,
					glow
				};
			};
			/** Write the glow gradient and/or the tilt transform for the pointer position. */
			const paint = (s, clientX, clientY) => {
				if (raf !== 0) return;
				raf = requestAnimationFrame(() => {
					raf = 0;
					const { spot, visual, local } = s;
					if (!inside(visual, clientX, clientY)) {
						clearSpot(spot);
						return;
					}
					let glow = s.glow;
					if (glow === null && glowGated()) {
						s = session = measure(spot);
						glow = s.glow;
					}
					if (glow !== null) if (glowGated()) glow.style.backgroundImage = `radial-gradient(${GLOW_RADIUS}px at ${clientX - visual.left}px ${clientY - visual.top}px, var(--dsh-aqua-spot-color, ${GLOW_FALLBACK}), transparent 70%)`;
					else glow.style.removeProperty("background-image");
					if (tiltGated() && tiltable(spot)) {
						const dx = Math.min(.5, Math.max(-.5, (clientX - visual.left) / visual.width - .5));
						const dy = Math.min(.5, Math.max(-.5, (clientY - visual.top) / visual.height - .5));
						const tiltMax = spot.hasAttribute("data-dsh-trajectory") ? TILT_MAX * .5 : TILT_MAX;
						spot.style.transformOrigin = `${local.left + local.width / 2}px ${local.top + local.height / 2}px`;
						spot.style.transform = `perspective(${TILT_PERSPECTIVE}px) rotateX(${tiltMax * -2 * dy}rad) rotateY(${tiltMax * 2 * dx}rad) scale(1.01)`;
						tilted.add(spot);
					} else if (tilted.has(spot)) easeBack(spot);
				});
			};
			const onMove = (event) => {
				if (!hoverGated()) return;
				const spot = closestSpot(event.target);
				if (spot === null || session?.spot !== spot) return;
				paint(session, event.clientX, event.clientY);
			};
			const onOver = (event) => {
				if (!hoverGated()) return;
				const spot = closestSpot(event.target);
				if (spot === null) return;
				if (spot.matches("[class*=\"sidebarCol\"]") && document.querySelector("[role=\"dialog\"]") !== null) return;
				const next = measure(spot);
				if (!inside(next.visual, event.clientX, event.clientY)) return;
				const id = settle.get(spot);
				if (id !== void 0) {
					clearTimeout(id);
					settle.delete(spot);
				}
				spot.setAttribute(ON_ATTR, "");
				current = spot;
				session = next;
				paint(next, event.clientX, event.clientY);
			};
			const onOut = (event) => {
				const spot = closestSpot(event.target);
				if (spot === null || spot !== current) return;
				if (session !== null && inside(session.visual, event.clientX, event.clientY)) return;
				clearSpot(spot);
			};
			const keeper = startOverlayKeeper(() => {
				for (const spot of spotElements()) {
					if (!spot.matches("[class*=\"sidebarCol\"]")) continue;
					if (spot.querySelector("[role=\"dialog\"]") === null) continue;
					spot.removeAttribute(ON_ATTR);
					const id = settle.get(spot);
					if (id !== void 0) {
						clearTimeout(id);
						settle.delete(spot);
					}
					tilted.delete(spot);
					spot.style.setProperty("transition", "none");
					spot.style.removeProperty("transform");
					spot.style.removeProperty("transform-origin");
					spot.offsetWidth;
					spot.style.removeProperty("transition");
					if (current === spot) {
						current = null;
						session = null;
					}
				}
				if (session === null || refreshRaf !== 0) return;
				refreshRaf = requestAnimationFrame(() => {
					refreshRaf = 0;
					if (session !== null) session = measure(session.spot);
				});
			});
			document.addEventListener("pointermove", onMove, { passive: true });
			document.addEventListener("pointerover", onOver, { passive: true });
			document.addEventListener("pointerout", onOut, { passive: true });
			return () => {
				document.removeEventListener("pointermove", onMove);
				document.removeEventListener("pointerover", onOver);
				document.removeEventListener("pointerout", onOut);
				keeper();
				if (raf !== 0) cancelAnimationFrame(raf);
				if (refreshRaf !== 0) cancelAnimationFrame(refreshRaf);
				for (const id of settle.values()) clearTimeout(id);
				settle.clear();
				for (const spot of spotElements()) {
					spot.removeAttribute(ON_ATTR);
					if (tilted.has(spot)) {
						tilted.delete(spot);
						spot.style.removeProperty("transform");
						spot.style.removeProperty("transform-origin");
					}
				}
			};
		}
		//#endregion
		//#region src/client/theme-layer.ts
		/** html attribute selecting the Aqua layer: CSS hooks and ambient effects. */
		const AQUA_ATTRIBUTE = "data-dsh-aqua";
		/** localStorage key carrying the layer enable flag. */
		const AQUA_ENABLED_KEY = "dsh.ui-aqua.enabled";
		/** The layer's identity in the theme override stack (inspection-visible). */
		const OVERRIDE_SOURCE = "wediace-ui";
		const FONT_STACK = "'Space Grotesk Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif";
		/** Scheme-invariant override value (applied to both palettes). */
		const both = (value) => ({
			light: value,
			dark: value
		});
		/**
		* Alias-token override layer: the deep-sea palette. Every value is a
		* `{ light, dark }` pair so the layer stays legible when the user switches
		* the Appearance preference — dark is deep-sea navy, light is cool white-blue.
		*/
		const AQUA_TOKEN_OVERRIDES = {
			"--dsw-font-family": both(FONT_STACK),
			"--dsw-alias-bg-base": {
				light: "#F4F8FD",
				dark: "#0C121B"
			},
			"--dsw-alias-bg-layer-1": {
				light: "#FFFFFF",
				dark: "#111A27"
			},
			"--dsw-alias-bg-layer-2": {
				light: "#ECF2FA",
				dark: "#162130"
			},
			"--dsw-alias-bg-layer-3": {
				light: "#E2EBF7",
				dark: "#1C2A3D"
			},
			"--dsw-alias-bg-overlay": {
				light: "#DCE7F4",
				dark: "#22334A"
			},
			"--dsw-alias-bg-module-platform": {
				light: "#FFFFFF",
				dark: "#111A27"
			},
			"--dsw-alias-bg-multi-select": {
				light: "#FFFFFF",
				dark: "#162130"
			},
			"--dsw-alias-bg-skeleton": {
				light: "rgba(19, 45, 83, 0.08)",
				dark: "rgba(148, 180, 220, 0.12)"
			},
			"--dsw-alias-bg-mask-1": {
				light: "rgba(19, 37, 62, 0.3)",
				dark: "rgba(4, 8, 14, 0.55)"
			},
			"--dsw-alias-bg-mask-2": {
				light: "rgba(19, 37, 62, 0.12)",
				dark: "rgba(4, 8, 14, 0.25)"
			},
			"--dsw-alias-bg-mask-3": {
				light: "rgba(19, 37, 62, 0.3)",
				dark: "rgba(4, 8, 14, 0.5)"
			},
			"--dsw-alias-bg-mask-drop": {
				light: "rgba(244, 248, 253, 0.72)",
				dark: "rgba(12, 18, 27, 0.7)"
			},
			"--dsw-alias-border-l1": {
				light: "rgba(19, 45, 83, 0.08)",
				dark: "rgba(148, 180, 220, 0.08)"
			},
			"--dsw-alias-border-l2": {
				light: "rgba(19, 45, 83, 0.14)",
				dark: "rgba(148, 180, 220, 0.15)"
			},
			"--dsw-alias-border-l2-darkmode-thin": {
				light: "rgba(19, 45, 83, 0.1)",
				dark: "rgba(148, 180, 220, 0.1)"
			},
			"--dsw-alias-border-l3": {
				light: "rgba(19, 45, 83, 0.22)",
				dark: "rgba(148, 180, 220, 0.24)"
			},
			"--dsw-alias-border-l4": {
				light: "rgba(19, 45, 83, 0.32)",
				dark: "rgba(148, 180, 220, 0.34)"
			},
			"--dsw-alias-border-inverted": {
				light: "rgba(19, 45, 83, 0.06)",
				dark: "rgba(148, 180, 220, 0.12)"
			},
			"--dsw-alias-border-inverted2": {
				light: "rgba(19, 45, 83, 0.08)",
				dark: "rgba(148, 180, 220, 0.08)"
			},
			"--dsw-alias-label-primary": {
				light: "#13243E",
				dark: "#EAF2FC"
			},
			"--dsw-alias-label-secondary": {
				light: "#40597A",
				dark: "#AFC3DC"
			},
			"--dsw-alias-label-tertiary": {
				light: "#5D7696",
				dark: "#8399B5"
			},
			"--dsw-alias-label-caption": {
				light: "#7E93AC",
				dark: "#6B829F"
			},
			"--dsw-alias-label-dimmed": {
				light: "#C9D4E2",
				dark: "#4E5F76"
			},
			"--dsw-alias-label-primary-bluish": {
				light: "#2E5EB8",
				dark: "#BFD6F6"
			},
			"--dsw-alias-label-primary-dimmed": {
				light: "#1E3556",
				dark: "#D7E3F4"
			},
			"--dsw-alias-label-primary-inverted": {
				light: "#FFFFFF",
				dark: "#162130"
			},
			"--dsw-alias-label-primary-foreground": {
				light: "#FFFFFF",
				dark: "#FFFFFF"
			},
			"--dsw-alias-brand-primary": {
				light: "#13243E",
				dark: "#EAF2FC"
			},
			"--dsw-alias-brand-text": {
				light: "#13243E",
				dark: "#EAF2FC"
			},
			"--dsw-alias-brand-primary-invert": {
				light: "#FFFFFF",
				dark: "#0C121B"
			},
			"--dsw-alias-brand-primary-new-colorprimary-new-color": {
				light: "#3F76D8",
				dark: "#6E9BE8"
			},
			"--dsw-alias-state-business-primary": {
				light: "#3F76D8",
				dark: "#6E9BE8"
			},
			"--dsw-alias-state-business-tertiary": {
				light: "#DCE9FB",
				dark: "#1D2C44"
			},
			"--dsw-alias-state-success-tertiary": {
				light: "#DDF3E4",
				dark: "#12271C"
			},
			"--dsw-alias-state-warn-tertiary": {
				light: "#FCEED6",
				dark: "#2A2416"
			},
			"--dsw-alias-button-primary-fill": {
				light: "#3F76D8",
				dark: "#4A7FD9"
			},
			"--dsw-alias-button-primary-hover": {
				light: "#5C8DE0",
				dark: "#5E8FE6"
			},
			"--dsw-alias-button-primary-dimmed": {
				light: "#DCE9FB",
				dark: "#162130"
			},
			"--dsw-alias-button-info-fill": {
				light: "#3F76D8",
				dark: "#6E9BE8"
			},
			"--dsw-alias-button-info-hover": {
				light: "#5C8DE0",
				dark: "#7FA8EF"
			},
			"--dsw-alias-button-elevated-fill": {
				light: "#FFFFFF",
				dark: "#162130"
			},
			"--dsw-alias-button-floating-fill": {
				light: "#FFFFFF",
				dark: "#162130"
			},
			"--dsw-alias-button-floating-hover": {
				light: "#F0F5FB",
				dark: "#1C2A3D"
			},
			"--dsw-alias-button-contrast-fill": {
				light: "#26364D",
				dark: "#EAF2FC"
			},
			"--dsw-alias-button-ghost-active-fill": {
				light: "#DCE7F4",
				dark: "#1C2A3D"
			},
			"--dsw-alias-button-ghost-active-hover": {
				light: "#E9F0F8",
				dark: "#162130"
			},
			"--dsw-alias-button-ghost-active-border": {
				light: "#8FA3BC",
				dark: "#6B829F"
			},
			"--dsw-alias-interactive-bg-hover": {
				light: "rgba(63, 118, 216, 0.08)",
				dark: "rgba(126, 164, 223, 0.1)"
			},
			"--dsw-alias-interactive-bg-hover-accent": {
				light: "rgba(63, 118, 216, 0.14)",
				dark: "rgba(126, 164, 223, 0.2)"
			},
			"--dsw-alias-interactive-bg-active": {
				light: "rgba(63, 118, 216, 0.2)",
				dark: "rgba(126, 164, 223, 0.26)"
			},
			"--dsw-alias-interactive-bg-hover-danger": {
				light: "rgba(236, 19, 19, 0.05)",
				dark: "rgba(242, 90, 90, 0.14)"
			},
			"--dsw-alias-interactive-bg-hover-solid": {
				light: "#F0F5FB",
				dark: "#1C2A3D"
			},
			"--dsw-alias-markdown-code-block": {
				light: "#F0F5FB",
				dark: "#0D141F"
			},
			"--dsw-alias-markdown-code-block-banner": {
				light: "#F5F8FD",
				dark: "#121B29"
			},
			"--dsw-alias-markdown-inline-code": {
				light: "#E4EDF8",
				dark: "#172334"
			},
			"--dsw-alias-markdown-citation": {
				light: "#EAF1F9",
				dark: "#1A2534"
			},
			"--dsw-alias-markdown-tag": {
				light: "#E4EDF8",
				dark: "#162130"
			},
			"--dsw-alias-markdown-placeholder": {
				light: "#EAF1F9",
				dark: "#131D2B"
			},
			"--dsw-alias-markdown-code-segment-selected": {
				light: "#FFFFFF",
				dark: "#1C2A3D"
			},
			"--dsw-alias-markdown-code-segment-unselected": {
				light: "#F0F5FB",
				dark: "#0F1723"
			},
			"--dsw-alias-scrollbar-bg-l1": {
				light: "rgba(63, 118, 216, 0.28)",
				dark: "rgba(126, 164, 223, 0.28)"
			},
			"--dsw-alias-scrollbar-bg-l2": {
				light: "rgba(63, 118, 216, 0.4)",
				dark: "rgba(126, 164, 223, 0.36)"
			},
			"--dsw-alias-scrollbar-hover-l1": {
				light: "rgba(63, 118, 216, 0.5)",
				dark: "rgba(126, 164, 223, 0.44)"
			},
			"--dsw-alias-scrollbar-hover-l2": {
				light: "rgba(63, 118, 216, 0.6)",
				dark: "rgba(126, 164, 223, 0.52)"
			},
			"--dsw-specific-sidebar-fill": {
				light: "transparent",
				dark: "transparent"
			},
			"--dsw-specific-sidebar-nav-item-active": {
				light: "#DEE9F8",
				dark: "#1B283A"
			},
			"--dsw-specific-sidebar-nav-item-hover": {
				light: "#E9F0F8",
				dark: "#15202F"
			},
			"--dsw-specific-sidebar-nav-item-active-accent": {
				light: "#3F76D8",
				dark: "#6E9BE8"
			},
			"--dsw-specific-input-major": {
				light: "#FFFFFF",
				dark: "#101927"
			},
			"--dsw-specific-login-input": {
				light: "#F0F5FB",
				dark: "#0D141F"
			},
			"--dsw-specific-menu": {
				light: "#EAF1F9",
				dark: "#162130"
			},
			"--dsw-specific-selector": {
				light: "#EAF1F9",
				dark: "#1C2A3D"
			},
			"--dsw-specific-bubble": {
				light: "#F0F5FC",
				dark: "#121C2A"
			},
			"--dsw-specific-bubble-highlight": {
				light: "#DCE9FB",
				dark: "#1A283A"
			},
			"--dsw-specific-tip": {
				light: "#EAF1F9",
				dark: "#131D2B"
			},
			"--dsw-alias-toast-bg": {
				light: "#1B3256",
				dark: "#1C2A3D"
			},
			"--dsw-alias-tooltip-bg": {
				light: "#13243E",
				dark: "#162130"
			},
			"--dsw-shadow-lv1": {
				light: "0 2px 4px rgba(19, 45, 83, 0.06)",
				dark: "0 2px 4px rgba(2, 6, 14, 0.5)"
			},
			"--dsw-shadow-lv1-blur": {
				light: "0 4px 12px rgba(19, 45, 83, 0.05)",
				dark: "0 4px 12px rgba(2, 6, 14, 0.4)"
			},
			"--dsw-shadow-lv2": {
				light: "0 4px 12px rgba(19, 45, 83, 0.05), 0 2px 8px rgba(19, 45, 83, 0.06)",
				dark: "0 4px 12px rgba(2, 6, 14, 0.4), 0 2px 8px rgba(2, 6, 14, 0.35)"
			},
			"--dsw-shadow-lv3": {
				light: "0 0 1px rgba(19, 45, 83, 0.08), 0 12px 32px rgba(19, 45, 83, 0.12)",
				dark: "0 0 1px rgba(2, 6, 14, 0.6), 0 12px 32px rgba(2, 6, 14, 0.55)"
			}
		};
		/**
		* Compatibility-mode token set: the same palette as the floating mode, but
		* every surface token turns translucent, so the fluid/wallpaper backdrop
		* shows through the STOCK layout. This is what makes the material generic —
		* any plugin that consumes the shared design tokens gets the glass for free.
		*/
		const COMPAT_SURFACE_OVERRIDES = {
			"--dsw-alias-bg-layer-1": {
				light: "rgba(255, 255, 255, 0.83)",
				dark: "rgba(17, 26, 39, 0.83)"
			},
			"--dsw-alias-bg-layer-2": {
				light: "rgba(236, 242, 250, 0.78)",
				dark: "rgba(22, 33, 48, 0.83)"
			},
			"--dsw-alias-bg-layer-3": {
				light: "rgba(226, 235, 247, 0.73)",
				dark: "rgba(28, 42, 61, 0.78)"
			},
			"--dsw-alias-bg-overlay": {
				light: "rgba(220, 231, 244, 0.88)",
				dark: "rgba(34, 51, 74, 0.88)"
			},
			"--dsw-alias-bg-module-platform": {
				light: "rgba(255, 255, 255, 0.83)",
				dark: "rgba(17, 26, 39, 0.83)"
			},
			"--dsw-alias-bg-multi-select": {
				light: "rgba(255, 255, 255, 0.83)",
				dark: "rgba(22, 33, 48, 0.83)"
			},
			"--dsw-specific-menu": {
				light: "rgba(234, 241, 249, 0.88)",
				dark: "rgba(22, 33, 48, 0.88)"
			},
			"--dsw-specific-selector": {
				light: "rgba(234, 241, 249, 0.83)",
				dark: "rgba(28, 42, 61, 0.83)"
			},
			"--dsw-specific-bubble": {
				light: "rgba(240, 245, 252, 0.83)",
				dark: "rgba(18, 28, 42, 0.83)"
			},
			"--dsw-specific-bubble-highlight": {
				light: "rgba(220, 233, 251, 0.83)",
				dark: "rgba(26, 40, 58, 0.83)"
			},
			"--dsw-specific-tip": {
				light: "rgba(234, 241, 249, 0.88)",
				dark: "rgba(19, 29, 43, 0.88)"
			},
			"--dsw-specific-input-major": {
				light: "rgba(255, 255, 255, 0.78)",
				dark: "rgba(16, 25, 39, 0.78)"
			},
			"--dsw-specific-login-input": {
				light: "rgba(240, 245, 251, 0.78)",
				dark: "rgba(13, 20, 31, 0.78)"
			},
			"--dsw-alias-markdown-code-block": {
				light: "rgba(240, 245, 251, 0.78)",
				dark: "rgba(13, 20, 31, 0.78)"
			},
			"--dsw-alias-markdown-code-block-banner": {
				light: "rgba(245, 248, 253, 0.83)",
				dark: "rgba(18, 27, 41, 0.83)"
			},
			"--dsw-alias-markdown-inline-code": {
				light: "rgba(228, 237, 248, 0.78)",
				dark: "rgba(23, 35, 52, 0.78)"
			},
			"--dsw-alias-markdown-citation": {
				light: "rgba(234, 241, 249, 0.83)",
				dark: "rgba(26, 37, 52, 0.83)"
			},
			"--dsw-alias-markdown-tag": {
				light: "rgba(228, 237, 248, 0.78)",
				dark: "rgba(22, 33, 48, 0.78)"
			},
			"--dsw-alias-markdown-placeholder": {
				light: "rgba(234, 241, 249, 0.83)",
				dark: "rgba(19, 29, 43, 0.83)"
			},
			"--dsw-alias-toast-bg": {
				light: "rgba(27, 50, 86, 0.92)",
				dark: "rgba(28, 42, 61, 0.92)"
			},
			"--dsw-alias-tooltip-bg": {
				light: "rgba(19, 36, 62, 0.92)",
				dark: "rgba(22, 33, 48, 0.92)"
			}
		};
		/** Compatibility token layer: the palette plus the translucent surfaces. */
		const COMPAT_TOKEN_OVERRIDES = {
			...AQUA_TOKEN_OVERRIDES,
			...COMPAT_SURFACE_OVERRIDES
		};
		/** Read the persisted enable flag (absent storage means on). */
		function readEnabled() { return true;
			try {
				const raw = localStorage.getItem(AQUA_ENABLED_KEY);
				return raw === null ? true : raw === "true";
			} catch {
				return true;
			}
		}
		/** Persist the enable flag (storage failures keep the in-memory state). */
		function writeEnabled(value) {
			try {
				localStorage.setItem(AQUA_ENABLED_KEY, String(value));
			} catch {}
		}
		/** Shipped defaults — what a first-time install sees (the tuned look). */
		const SETTINGS_DEFAULTS = {
			mode: "compat",
			blur: 20,
			frost: 7,
			bgBrightness: 50,
			background: "fluid",
			wallpaper: "",
			whale: false,
			critters: false,
			mesh: false,
			spotlight: false,
			press: false,
			fluidHue: 320,
			fluidDepth: 25,
			wallpaperBlur: 0,
			wallpaperFrost: 0,
			videoBlur: 6,
			videoBrightness: 45
		};
		/** Numeric knob keys and their localStorage names. */
		const NUMERIC_KEYS = {
			blur: "dsh.ui-aqua.blur",
			frost: "dsh.ui-aqua.frost",
			fluidHue: "dsh.ui-aqua.fluidHue",
			fluidDepth: "dsh.ui-aqua.fluidDepth",
			bgBrightness: "dsh.ui-aqua.bgBrightness",
			wallpaperBlur: "dsh.ui-aqua.wallpaperBlur",
			wallpaperFrost: "dsh.ui-aqua.wallpaperFrost",
			videoBlur: "dsh.ui-aqua.videoBlur",
			videoBrightness: "dsh.ui-aqua.videoBrightness"
		};
		const MODE_KEY = "dsh.ui-aqua.mode";
		const BACKGROUND_KEY = "dsh.ui-aqua.background";
		const WALLPAPER_KEY = "dsh.ui-aqua.wallpaper";
		const WHALE_KEY = "dsh.ui-aqua.whale";
		const CRITTERS_KEY = "dsh.ui-aqua.critters";
		const MESH_KEY = "dsh.ui-aqua.mesh";
		const SPOTLIGHT_KEY = "dsh.ui-aqua.spotlight";
		const PRESS_KEY = "dsh.ui-aqua.press";
		/** Clamp a numeric knob into its sane range. */
		function clampSetting(key, value) {
			const max = key === "blur" || key === "wallpaperBlur" || key === "videoBlur" ? 40 : key === "frost" || key === "wallpaperFrost" || key === "bgBrightness" || key === "videoBrightness" ? 100 : 360;
			return Number.isFinite(value) ? Math.min(max, Math.max(0, value)) : SETTINGS_DEFAULTS[key];
		}
		/** Read one numeric knob from localStorage (absent/parse failure means the default). */
		function readSetting(key) { return SETTINGS_DEFAULTS[key];
			try {
				const raw = localStorage.getItem(NUMERIC_KEYS[key]);
				return raw === null ? SETTINGS_DEFAULTS[key] : clampSetting(key, Number(raw));
			} catch {
				return SETTINGS_DEFAULTS[key];
			}
		}
		/** Persist one numeric knob (storage failures keep the in-memory state). */
		function writeSetting(key, value) {
			try {
				localStorage.setItem(NUMERIC_KEYS[key], String(value));
			} catch {}
		}
		/** Read the backdrop source ('fluid' or 'wallpaper'). */
		function readBackground() { return "fluid";
			try {
				return localStorage.getItem(BACKGROUND_KEY) === "wallpaper" ? "wallpaper" : "fluid";
			} catch {
				return "fluid";
			}
		}
		/** Persist the backdrop source. */
		function writeBackground(value) {
			try {
				localStorage.setItem(BACKGROUND_KEY, value);
			} catch {}
		}
		/** Read the rendering mode ('mica' or 'compat'; legacy 'float'/'liquid'
		*  values migrate to 'mica'). */
		function readMode() { return "compat";
			try {
				if (localStorage.getItem(MODE_KEY) === "mica") return "mica";
				return "compat";
			} catch {
				return "compat";
			}
		}
		/** Persist the rendering mode. */
		function writeMode(value) {
			try {
				localStorage.setItem(MODE_KEY, value);
			} catch {}
		}
		/** Read the wallpaper data URL (absent/oversized means empty). */
		function readWallpaper() { return "";
			try {
				return localStorage.getItem(WALLPAPER_KEY) ?? "";
			} catch {
				return "";
			}
		}
		/** Persist the wallpaper data URL (quota failures keep it in memory only). */
		function writeWallpaper(value) {
			try {
				localStorage.setItem(WALLPAPER_KEY, value);
			} catch {}
		}
		/** Read the particle-whale flag (absent means on). */
		function readWhale() { return false;
			try {
				const raw = localStorage.getItem(WHALE_KEY);
				return raw === null ? true : raw === "true";
			} catch {
				return true;
			}
		}
		/** Persist the particle-whale flag. */
		function writeWhale(value) {
			try {
				localStorage.setItem(WHALE_KEY, String(value));
			} catch {}
		}
		/** Read the critters flag (absent means on). */
		function readCritters() { return false;
			try {
				const raw = localStorage.getItem(CRITTERS_KEY);
				return raw === null ? true : raw === "true";
			} catch {
				return true;
			}
		}
		/** Persist the critters flag. */
		function writeCritters(value) {
			try {
				localStorage.setItem(CRITTERS_KEY, String(value));
			} catch {}
		}
		/** Read the interactive-mesh flag (absent means on). */
		function readMesh() { return false;
			try {
				const raw = localStorage.getItem(MESH_KEY);
				return raw === null ? true : raw === "true";
			} catch {
				return true;
			}
		}
		/** Persist the interactive-mesh flag. */
		function writeMesh(value) {
			try {
				localStorage.setItem(MESH_KEY, String(value));
			} catch {}
		}
		/** Read the cursor-spotlight flag (absent means on). */
		function readSpotlight() { return false;
			try {
				const raw = localStorage.getItem(SPOTLIGHT_KEY);
				return raw === null ? true : raw === "true";
			} catch {
				return true;
			}
		}
		/** Persist the cursor-spotlight flag. */
		function writeSpotlight(value) {
			try {
				localStorage.setItem(SPOTLIGHT_KEY, String(value));
			} catch {}
		}
		/** Read the hover-press flag (absent means on). */
		function readPress() { return false;
			try {
				localStorage.removeItem("dsh.ui-aqua.entrance");
				const raw = localStorage.getItem(PRESS_KEY);
				return raw === null ? true : raw === "true";
			} catch {
				return true;
			}
		}
		/** Persist the hover-press flag. */
		function writePress(value) {
			try {
				localStorage.setItem(PRESS_KEY, String(value));
			} catch {}
		}
		/** Current scheme from the presenter-owned body attribute. */
		function activeScheme() {
			return document.body.hasAttribute("data-ds-dark-theme") ? "dark" : "light";
		}
		/**
		* Owns the Aqua layer lifecycle: reads the durable enable flag, and applies /
		* retracts every layer on change. Cross-tab flips arrive through the storage
		* event; every subscription and mounted effect are released when the plugin
		* fiber is disposed.
		*/
		var AquaLayer = class {
			enabled = false;
			settings = { ...SETTINGS_DEFAULTS };
			/** Resolved palette scheme: dark = the brightness knob darkens, light = it brightens. */
			dark = false;
			tokenDisposer;
			mainFluid;
			interactionDisposer;
			themeListener;
			seamDisposer;
			spotlightDisposer;
			whaleHandle;
			meshHandle;
			/** Object URL of the current large-video wallpaper (revoked on replace). */
			videoObjectUrl;
			/** IndexedDB id backing the current object URL (guards against reloads). */
			videoBlobId;
			ctx;
			/**
			* @param ctx - owning client context.
			*/
			constructor(ctx) {
				this.ctx = ctx;
				ctx.effect(() => {
					const onStorage = (event) => {
						if (event.key === "dsh.ui-aqua.enabled") {
							this.enabled = readEnabled();
							this.sync();
						}
						const key = event.key;
						if (key !== null && (key in NUMERIC_KEYS || key === BACKGROUND_KEY || key === WALLPAPER_KEY || key === MODE_KEY || key === WHALE_KEY || key === CRITTERS_KEY || key === MESH_KEY || key === SPOTLIGHT_KEY || key === PRESS_KEY)) {
							this.reloadSettings();
							if (this.enabled) {
								this.applySettings();
								this.applyTokens();
								this.applyFluidPalettes();
								this.syncWhale();
							}
						}
					};
					window.addEventListener("storage", onStorage);
					this.themeListener = this.ctx.on("theme/change", () => {
						this.dark = this.resolveScheme();
						this.whaleHandle?.setDark(this.dark);
						if (this.enabled) {
							this.applySettings();
							this.applyFluidPalettes();
						}
					});
					return () => {
						window.removeEventListener("storage", onStorage);
						this.themeListener?.();
						this.themeListener = void 0;
						this.unmount();
					};
				}, "ui-aqua: layer lifecycle");
				this.enabled = readEnabled();
				this.reloadSettings();
				this.dark = this.resolveScheme();
				this.sync();
			}
			/** Current enable state (the settings row mirrors this). */
			getEnabled() {
				return this.enabled;
			}
			/** Current knob values (the settings row mirrors these). */
			getSettings() {
				return { ...this.settings };
			}
			/** Whether the resolved palette is dark (the brightness knob darkens). */
			getDark() {
				return this.dark;
			}
			/** Resolved scheme from the theme service (falls back to the body attribute). */
			resolveScheme() {
				try {
					return this.ctx.theme.getTheme().active.colorScheme === "dark";
				} catch {
					return activeScheme() === "dark";
				}
			}
			/** Re-read every knob from localStorage into memory. */
			reloadSettings() {
				try {
					localStorage.removeItem("dsh.ui-aqua.tilt");
					localStorage.removeItem("dsh.ui-aqua.lens");
					localStorage.removeItem("dsh.ui-aqua.fluidTone");
				} catch {}
				this.settings = {
					mode: readMode(),
					blur: readSetting("blur"),
					frost: readSetting("frost"),
					fluidHue: readSetting("fluidHue"),
					fluidDepth: readSetting("fluidDepth"),
					bgBrightness: readSetting("bgBrightness"),
					background: readBackground(),
					wallpaper: readWallpaper(),
					whale: readWhale(),
					critters: readCritters(),
					mesh: readMesh(),
					spotlight: readSpotlight(),
					press: readPress(),
					wallpaperBlur: readSetting("wallpaperBlur"),
					wallpaperFrost: readSetting("wallpaperFrost"),
					videoBlur: readSetting("videoBlur"),
					videoBrightness: readSetting("videoBrightness")
				};
			}
			/** Flip the layer: persist, then apply or retract every owned effect. */
			setEnabled(value) {
				if (value === this.enabled) return;
				this.enabled = value;
				writeEnabled(value);
				this.sync();
			}
			/** Set the rendering mode ('mica' or 'compat'). */
			setMode(value) {
				if (value === this.settings.mode) return;
				this.settings.mode = value;
				writeMode(value);
				if (this.enabled) {
					this.applySettings();
					this.applyTokens();
				}
			}
			/** Set the glass blur radius (px). */
			setBlur(value) {
				const next = clampSetting("blur", value);
				if (next === this.settings.blur) return;
				this.settings.blur = next;
				writeSetting("blur", next);
				if (this.enabled) this.applySettings();
			}
			/** Set the glass frost amount (0-100). */
			setFrost(value) {
				const next = clampSetting("frost", value);
				if (next === this.settings.frost) return;
				this.settings.frost = next;
				writeSetting("frost", next);
				if (this.enabled) this.applySettings();
			}
			/** Set the fluid hue (degrees, continuous). */
			setFluidHue(value) {
				const next = clampSetting("fluidHue", value);
				if (next === this.settings.fluidHue) return;
				this.settings.fluidHue = next;
				writeSetting("fluidHue", next);
				if (this.enabled) {
					this.applySettings();
					this.applyFluidPalettes();
				}
			}
			/** Set the fluid depth (0-100, continuous: deep ↔ pale). */
			setFluidDepth(value) {
				const next = clampSetting("fluidDepth", value);
				if (next === this.settings.fluidDepth) return;
				this.settings.fluidDepth = next;
				writeSetting("fluidDepth", next);
				if (this.enabled) this.applyFluidPalettes();
			}
			/** Set the background brightness (0-100: 0 = pure black, 50 = transparent, 100 = pure white). */
			setBgBrightness(value) {
				const next = clampSetting("bgBrightness", value);
				if (next === this.settings.bgBrightness) return;
				this.settings.bgBrightness = next;
				writeSetting("bgBrightness", next);
				if (this.enabled) this.applySettings();
			}
			/** Set the backdrop source (fluid board or custom wallpaper). */
			setBackground(value) {
				if (value === this.settings.background) return;
				this.settings.background = value;
				writeBackground(value);
				if (this.enabled) this.applySettings();
			}
			/** Set the wallpaper image (a data URL; empty clears it) or a large video
			*  (`idb:<id>` marker whose blob lives in IndexedDB). */
			setWallpaper(value) {
				const previous = this.settings.wallpaper;
				this.settings.wallpaper = value;
				writeWallpaper(value);
				if (previous.startsWith("idb:") && value !== previous) deleteVideoBlob(previous.slice(4));
				if (!value.startsWith("idb:") && this.videoObjectUrl !== void 0) {
					URL.revokeObjectURL(this.videoObjectUrl);
					this.videoObjectUrl = void 0;
					this.videoBlobId = void 0;
				}
				if (this.enabled) this.applySettings();
			}
			/** Set the particle-whale flag (chat-area center decoration). */
			setWhale(value) {
				if (value === this.settings.whale) return;
				this.settings.whale = value;
				writeWhale(value);
				if (this.enabled) this.syncWhale();
			}
			/** Set the ambient marine-life flag (fish / bubbles / plankton). */
			setCritters(value) {
				if (value === this.settings.critters) return;
				this.settings.critters = value;
				writeCritters(value);
				if (this.enabled) this.applySettings();
			}
			/** Set the interactive-mesh flag (dot-grid decoration). */
			setMesh(value) {
				if (value === this.settings.mesh) return;
				this.settings.mesh = value;
				writeMesh(value);
				if (this.enabled) this.syncMesh();
			}
			/** Set the cursor-spotlight flag (pointer-tracking glass glow). */
			setSpotlight(value) {
				if (value === this.settings.spotlight) return;
				this.settings.spotlight = value;
				writeSpotlight(value);
				if (this.enabled) this.applySettings();
			}
			/** Set the hover-press flag (pane sinks a touch under the cursor). */
			setPress(value) {
				if (value === this.settings.press) return;
				this.settings.press = value;
				writePress(value);
				if (this.enabled) this.applySettings();
			}
			/** Set the wallpaper blur radius (px). */
			setWallpaperBlur(value) {
				const next = clampSetting("wallpaperBlur", value);
				if (next === this.settings.wallpaperBlur) return;
				this.settings.wallpaperBlur = next;
				writeSetting("wallpaperBlur", next);
				if (this.enabled) this.applySettings();
			}
			/** Set the wallpaper frost veil (0-100). */
			setWallpaperFrost(value) {
				const next = clampSetting("wallpaperFrost", value);
				if (next === this.settings.wallpaperFrost) return;
				this.settings.wallpaperFrost = next;
				writeSetting("wallpaperFrost", next);
				if (this.enabled) this.applySettings();
			}
			/** Set the video wallpaper blur radius (px). */
			setVideoBlur(value) {
				const next = clampSetting("videoBlur", value);
				if (next === this.settings.videoBlur) return;
				this.settings.videoBlur = next;
				writeSetting("videoBlur", next);
				if (this.enabled) this.applySettings();
			}
			/** Set the video wallpaper brightness (0-100, 100 = fully lit). */
			setVideoBrightness(value) {
				const next = clampSetting("videoBrightness", value);
				if (next === this.settings.videoBrightness) return;
				this.settings.videoBrightness = next;
				writeSetting("videoBrightness", next);
				if (this.enabled) this.applySettings();
			}
			/** After the user re-grants file access (选择视频 click on an fsa: video),
			*  drop the mount guard and re-apply so the file is re-read and played. */
			authorizeVideo() {
				if (this.videoObjectUrl !== void 0) {
					URL.revokeObjectURL(this.videoObjectUrl);
					this.videoObjectUrl = void 0;
				}
				this.videoBlobId = void 0;
				if (this.enabled) this.applySettings();
			}
			sync() {
				if (this.enabled) this.mount();
				else this.unmount();
			}
			/** Write the knob-driven CSS variables and mode attributes onto <html>. */
			applySettings() {
				const style = document.documentElement.style;
				style.setProperty("--dsh-aqua-blur", `${this.settings.blur}px`);
				style.setProperty("--dsh-aqua-frost", String(Math.min(this.settings.frost / 50, 1.4)));
				style.setProperty("--dsh-aqua-surface-frost", String(Math.min((this.settings.frost + 20) / 50, 1.4)));
				const glowHue = ((this.settings.fluidHue + 217) % 360 + 360) % 360;
				style.setProperty("--dsh-aqua-spot-color", this.dark ? `hsla(${glowHue}, 90%, 62%, 0.17)` : `hsla(${glowHue}, 90%, 45%, 0.16)`);
				style.setProperty("--dsh-aqua-wallpaper-blur", `${this.settings.wallpaperBlur}px`);
				style.setProperty("--dsh-aqua-wallpaper-frost", String(this.settings.wallpaperFrost / 100));
				style.setProperty("--dsh-aqua-video-blur", `${this.settings.videoBlur}px`);
				style.setProperty("--dsh-aqua-video-dim", String((100 - this.settings.videoBrightness) / 100 * .65));
				const dark = this.dark;
				style.setProperty("--dsh-aqua-brightness-black", String(dark ? Math.max(0, (50 - this.settings.bgBrightness) / 50) : 0));
				style.setProperty("--dsh-aqua-brightness-white", String(dark ? 0 : Math.max(0, (this.settings.bgBrightness - 50) / 50)));
				const compat = this.settings.mode === "compat";
				document.documentElement.toggleAttribute("data-dsh-float", !compat);
				document.documentElement.toggleAttribute("data-dsh-compat", compat);
				document.documentElement.toggleAttribute(SPOTLIGHT_ATTRIBUTE, !compat && this.settings.spotlight);
				document.documentElement.toggleAttribute(PRESS_ATTRIBUTE, !compat && this.settings.press);
				const ambient = document.querySelector("[data-dsh-aqua-ambient]");
				if (ambient !== null) ambient.dataset.background = this.settings.background;
				if (ambient !== null) ambient.dataset.critters = this.settings.critters ? "on" : "off";
				const wallpaper = this.settings.wallpaper;
				const isVideo = wallpaper.startsWith("data:video/") || wallpaper.startsWith("idb:") || wallpaper.startsWith("fsa:");
				const wallpaperLayer = document.querySelector("[data-dsh-aqua-wallpaper-layer]");
				if (wallpaperLayer !== null) {
					wallpaperLayer.dataset.background = this.settings.background;
					wallpaperLayer.dataset.media = isVideo ? "video" : "image";
				}
				const wallpaperOn = this.settings.background === "wallpaper" && wallpaper !== "";
				document.documentElement.toggleAttribute("data-dsh-aqua-wallpaper", wallpaperOn);
				if (wallpaperOn) document.documentElement.setAttribute("data-dsh-aqua-media", isVideo ? "video" : "image");
				else document.documentElement.removeAttribute("data-dsh-aqua-media");
				const img = document.querySelector("[data-dsh-aqua-wallpaper-img]");
				if (img !== null) if (this.settings.background === "wallpaper" && wallpaper !== "" && !isVideo) img.src = wallpaper;
				else img.removeAttribute("src");
				const video = document.querySelector("[data-dsh-aqua-wallpaper-video]");
				if (video !== null) if (this.settings.background === "wallpaper" && isVideo) {
					if (wallpaper.startsWith("idb:")) {
						const id = wallpaper.slice(4);
						if (this.videoBlobId === id && this.videoObjectUrl !== void 0) {} else loadVideoBlob(id).then((blob) => {
							if (blob === null) return;
							if (this.settings.wallpaper !== wallpaper) return;
							const url = URL.createObjectURL(blob);
							if (this.videoObjectUrl !== void 0) URL.revokeObjectURL(this.videoObjectUrl);
							this.videoObjectUrl = url;
							this.videoBlobId = id;
							video.setAttribute("src", url);
							this.configureWallpaperVideo(video);
						});
					} else if (wallpaper.startsWith("fsa:")) if (this.videoBlobId === wallpaper && this.videoObjectUrl !== void 0) {} else loadVideoHandle().then(async (handle) => {
						if (handle === null) return;
						if (this.settings.wallpaper !== wallpaper) return;
						try {
							if (await handle.queryPermission({ mode: "read" }) !== "granted") return;
							const file = await handle.getFile();
							const url = URL.createObjectURL(file);
							if (this.videoObjectUrl !== void 0) URL.revokeObjectURL(this.videoObjectUrl);
							this.videoObjectUrl = url;
							this.videoBlobId = wallpaper;
							video.setAttribute("src", url);
							this.configureWallpaperVideo(video);
						} catch {}
					});
					else if (video.getAttribute("src") !== wallpaper) {
						video.setAttribute("src", wallpaper);
						this.configureWallpaperVideo(video);
					}
				} else {
					video.pause();
					video.removeAttribute("src");
					video.load();
				}
			}
			/** The wallpaper plays as a plain <video> element (the browser's own
			*  decoder, no player chrome at all): looping on, cover fill via CSS, and
			*  autoplay with a muted fallback where policy requires it. A direct
			*  element (not an iframe) keeps backdrop-filter working over it, so the
			*  glass panels stay frosted above the video. */
			configureWallpaperVideo(video) {
				video.loop = true;
				if (!video.paused) return;
				video.play().catch(() => {
					video.muted = true;
					video.play().catch(() => {});
				});
			}
			/** Apply the mode's token layer (floating palette, or translucent compat). */
			applyTokens() {
				this.tokenDisposer?.();
				this.tokenDisposer = this.ctx.theme.overrideTokens(OVERRIDE_SOURCE, this.settings.mode === "compat" ? COMPAT_TOKEN_OVERRIDES : AQUA_TOKEN_OVERRIDES);
			}
			mount() {
				document.documentElement.setAttribute(AQUA_ATTRIBUTE, "");
				ensureAmbientScene();
				ensurePageFades();
				this.applySettings();
				this.applyTokens();
				this.mountFluid();
				this.startSeamStamper();
				this.startSpotlightFeed();
				this.syncWhale();
				this.syncMesh();
			}
			/** Mount or drop the particle whale to match enabled + the whale flag. */
			syncWhale() {
				if (this.enabled && this.settings.whale) {
					if (this.whaleHandle !== void 0) return;
					const ambient = document.querySelector("[data-dsh-aqua-ambient]");
					if (ambient === null) return;
					this.whaleHandle = mountWhale(ambient, this.dark);
				} else {
					this.whaleHandle?.dispose();
					this.whaleHandle = void 0;
				}
			}
			/** Mount or drop the interactive mesh to match enabled + the mesh flag. */
			syncMesh() {
				if (this.enabled && this.settings.mesh) {
					if (this.meshHandle !== void 0) return;
					const ambient = document.querySelector("[data-dsh-aqua-ambient]");
					if (ambient === null) return;
					this.meshHandle = mountMesh(ambient);
				} else {
					this.meshHandle?.dispose();
					this.meshHandle = void 0;
				}
			}
			unmount() {
				document.documentElement.removeAttribute(AQUA_ATTRIBUTE);
				document.documentElement.removeAttribute("data-dsh-float");
				document.documentElement.removeAttribute("data-dsh-compat");
				document.documentElement.removeAttribute("data-dsh-aqua-wallpaper");
				document.documentElement.removeAttribute("data-dsh-aqua-media");
				document.documentElement.removeAttribute(SPOTLIGHT_ATTRIBUTE);
				document.documentElement.removeAttribute(PRESS_ATTRIBUTE);
				this.spotlightDisposer?.();
				this.spotlightDisposer = void 0;
				this.whaleHandle?.dispose();
				this.whaleHandle = void 0;
				this.meshHandle?.dispose();
				this.meshHandle = void 0;
				this.tokenDisposer?.();
				this.tokenDisposer = void 0;
				if (this.videoObjectUrl !== void 0) {
					URL.revokeObjectURL(this.videoObjectUrl);
					this.videoObjectUrl = void 0;
					this.videoBlobId = void 0;
				}
				this.teardownFluid();
				removeAmbientScene();
				removePageFades();
				this.seamDisposer?.();
				this.seamDisposer = void 0;
			}
			/** Attach the fluid shader and the interaction feeds. */
			mountFluid() {
				const mainCanvas = document.querySelector("[data-dsh-aqua-fluid-canvas]");
				try {
					if (mainCanvas !== null) this.mainFluid = attachFluidShader(mainCanvas, this.fluidParams());
					this.applyFluidPalettes();
					if (this.mainFluid !== void 0 && mainCanvas !== null) this.interactionDisposer = attachFluidInteractions({
						main: this.mainFluid,
						mainCanvas
					});
				} catch {
					this.mainFluid = void 0;
				}
			}
			teardownFluid() {
				this.interactionDisposer?.();
				this.interactionDisposer = void 0;
				this.mainFluid?.dispose();
				this.mainFluid = void 0;
			}
			fluidParams() {
				return {
					...SITE_FLUID_PARAMS,
					...fluidToneColors(this.dark, this.settings.fluidHue, this.settings.fluidDepth)
				};
			}
			applyFluidPalettes() {
				this.mainFluid?.setParams(this.fluidParams());
			}
			/** Stamp the data-* seams the stylesheet keys off (self-contained mode). */
			startSeamStamper() {
				if (this.seamDisposer !== void 0) return;
				this.seamDisposer = startSeamStamper();
			}
			/** Attach the cursor-spotlight pointer feeds (idempotent per mount). */
			startSpotlightFeed() {
				if (this.spotlightDisposer !== void 0) return;
				this.spotlightDisposer = startSpotlight();
			}
		};
		//#endregion
		//#region \0dsh-css:D:\Hermes Work\deepseek-harness\packages\client\ui-aqua\src\client\aqua.module.css.mjs
		const css$1 = "[data-dsh-aqua] body{background:var(--dsw-alias-bg-base)}[data-dsh-aqua]{--dsh-aqua-glass-card-light:color-mix(in srgb, #fff calc(42% * var(--dsh-aqua-frost,1)), transparent);--dsh-aqua-glass-card-dark:color-mix(in srgb, #22262f calc(50% * var(--dsh-aqua-frost,1)), transparent)}[data-dsh-aqua] [data-dsh-frame],[data-dsh-aqua] [data-phase],[data-dsh-aqua] [data-dsh-details]{background:0 0}[data-dsh-float] [data-phase=active] header{z-index:8;position:relative}[data-dsh-float] [class*=banner]{position:static}[data-dsh-float] [data-phase=active] [data-conversation-scroll]{margin-top:-95px;padding-top:107px}[data-dsh-aqua] [data-phase] [class*=composerSeat][class*=composerSeat]{background:0 0}[data-dsh-aqua] [data-dsh-aqua-ambient]{z-index:-1;pointer-events:none;background:none;position:fixed;inset:0;overflow:hidden}[data-dsh-aqua] body[data-ds-dark-theme] [data-dsh-aqua-ambient]{background:none}[data-dsh-aqua] [data-dsh-aqua-ambient]:after{content:\"\";background-image:none;position:absolute;inset:0}@media (prefers-reduced-motion:no-preference){[data-dsh-aqua] [data-dsh-aqua-ambient]{animation:none}}@keyframes qRUgUq_dsh-aqua-breathe{0%{opacity:.86}to{opacity:1}}[data-dsh-aqua] [data-dsh-aqua-fluid-canvas]{width:100%;height:100%;position:absolute;inset:0}[data-dsh-aqua] [data-dsh-aqua-wallpaper]{z-index:-1;position:fixed;inset:0;overflow:hidden}[data-dsh-aqua] [data-dsh-aqua-wallpaper-img]{object-fit:cover;width:100%;height:100%}[data-dsh-aqua] [data-dsh-aqua-wallpaper-video]{object-fit:cover;pointer-events:none;width:100%;height:100%;filter:blur(var(--dsh-aqua-video-blur,0px));border:0;position:absolute;inset:0}[data-dsh-aqua] [data-dsh-aqua-wallpaper-img]{filter:blur(var(--dsh-aqua-wallpaper-blur,0px))}[data-dsh-aqua] [data-dsh-aqua-wallpaper]:after{content:\"\";background:rgb(255 255 255/var(--dsh-aqua-wallpaper-frost,0));pointer-events:none;position:absolute;inset:0}[data-dsh-aqua] body[data-ds-dark-theme] [data-dsh-aqua-wallpaper]:after{background:rgb(12 18 27/var(--dsh-aqua-wallpaper-frost,0))}[data-dsh-aqua] [data-dsh-aqua-wallpaper][data-media=video]:after{background:rgb(255 255 255/calc(var(--dsh-aqua-video-dim,.36) * 1.3));display:block}[data-dsh-aqua] body[data-ds-dark-theme] [data-dsh-aqua-wallpaper][data-media=video]:after{background:rgb(8 12 20/var(--dsh-aqua-video-dim,.36))}[data-dsh-aqua] [data-dsh-aqua-whale]{pointer-events:none;mix-blend-mode:screen;opacity:.92;position:absolute;transform:translate(-50%,-50%)}[data-dsh-aqua] [data-dsh-aqua-whale][data-scheme=light]{mix-blend-mode:multiply}[data-dsh-aqua] [data-dsh-aqua-whale] canvas{width:100%;height:100%;display:block}[data-dsh-aqua] [data-dsh-aqua-ambient][data-background=wallpaper] [data-dsh-aqua-fluid-canvas],[data-dsh-aqua] [data-dsh-aqua-wallpaper][data-background=fluid]{display:none}[data-dsh-aqua] [data-dsh-aqua-mesh]{pointer-events:none;width:100%;height:100%;position:absolute;inset:0}[data-dsh-aqua] [data-dsh-aqua-ambient][data-critters=off] [data-aqua-critter]{display:none}[data-dsh-aqua] [data-aqua-critter]{color:#7ea4df;opacity:.22;position:absolute}[data-dsh-aqua] [data-aqua-critter=fish]{animation:qRUgUq_dsh-aqua-fish-swim 12s var(--ds-ease-in-out) infinite}[data-dsh-aqua] [data-aqua-critter=fish-left]{animation:qRUgUq_dsh-aqua-fish-swim-left 16s var(--ds-ease-in-out) infinite}[data-dsh-aqua] [data-aqua-critter=bubble]{color:#a9c6ef;opacity:0;animation:9s ease-in infinite qRUgUq_dsh-aqua-bubble-rise}[data-dsh-aqua] [data-aqua-critter=plankton]{color:#7ea4df;animation:5s ease-in-out infinite qRUgUq_dsh-aqua-plankton}@keyframes qRUgUq_dsh-aqua-fish-swim{0%{transform:translate(0,0)rotate(-5deg)}30%{transform:translate(40px,-15px)rotate(4deg)}70%{transform:translate(52px,-18px)rotate(3deg)}to{transform:translate(0,0)rotate(-5deg)}}@keyframes qRUgUq_dsh-aqua-fish-swim-left{0%{transform:translate(0,0)scaleX(-1)rotate(-5deg)}30%{transform:translate(-34px,-12px)scaleX(-1)rotate(4deg)}70%{transform:translate(-44px,-15px)scaleX(-1)rotate(3deg)}to{transform:translate(0,0)scaleX(-1)rotate(-5deg)}}@keyframes qRUgUq_dsh-aqua-bubble-rise{0%{opacity:0;transform:translate(0,0)}10%{opacity:.5}to{opacity:0;transform:translate(8px,-150px)}}@keyframes qRUgUq_dsh-aqua-plankton{0%,to{opacity:.1}50%{opacity:.38}}[data-dsh-float] [role=menu],[data-dsh-float] [role=dialog],[data-dsh-float] [role=alert],[data-dsh-float] [data-dsh-surface]{border-radius:14px}[data-dsh-float] [data-dsh-surface]{background:color-mix(in srgb, #fff calc(62% * var(--dsh-aqua-surface-frost,1)), transparent);backdrop-filter:blur(var(--dsh-aqua-blur,14px));border:1px solid #132d5329;box-shadow:inset 0 1px #ffffff73}[data-dsh-float] [data-dsh-surface]:hover:not(:disabled){background:color-mix(in srgb, #fff calc(74% * var(--dsh-aqua-surface-frost,1)), transparent)}[data-dsh-float] body[data-ds-dark-theme] [data-dsh-surface]{background:color-mix(in srgb, #2a2e38 calc(62% * var(--dsh-aqua-surface-frost,1)), transparent);border-color:#94b4dc33;box-shadow:inset 0 1px #ffffff14}[data-dsh-float] body[data-ds-dark-theme] [data-dsh-surface]:hover:not(:disabled){background:color-mix(in srgb, #363a46 calc(70% * var(--dsh-aqua-surface-frost,1)), transparent)}[data-dsh-float] [role=menuitem],[data-dsh-float] [role=tooltip],[data-dsh-float] [class*=pill]{border-radius:8px}[data-dsh-float] button[class*=button]{border-radius:10px}[data-dsh-float] [class*=iconButton],[data-dsh-float] [class*=searchButton]{border-radius:8px}[data-dsh-float] [data-dsh-add]{background:color-mix(in srgb, #fff calc(40% * var(--dsh-aqua-frost,1)), transparent);backdrop-filter:blur(var(--dsh-aqua-blur,14px));border:1px solid #132d532e;box-shadow:inset 0 1px #ffffff80}[data-dsh-float] [data-dsh-add]:hover:not(:disabled){background:color-mix(in srgb, #fff calc(58% * var(--dsh-aqua-frost,1)), transparent)}[data-dsh-float] body[data-ds-dark-theme] [data-dsh-add]{background:color-mix(in srgb, #2a2e38 calc(40% * var(--dsh-aqua-frost,1)), transparent);border-color:#94b4dc40;box-shadow:inset 0 1px #ffffff14}[data-dsh-float] body[data-ds-dark-theme] [data-dsh-add]:hover:not(:disabled){background:color-mix(in srgb, #363a46 calc(52% * var(--dsh-aqua-frost,1)), transparent)}[data-dsh-float] [class*=bubble]{background:color-mix(in srgb, #fff calc(42% * var(--dsh-aqua-frost,1)), transparent);backdrop-filter:blur(var(--dsh-aqua-blur,14px));border:1px solid #132d5324;border-radius:14px}[data-dsh-float] body[data-ds-dark-theme] [class*=bubble]{background:color-mix(in srgb, #000 calc(40% * var(--dsh-aqua-frost,1)), transparent);border-color:#94b4dc24}html[data-dsh-float][data-dsh-aqua-wallpaper][data-dsh-aqua-media=video] [class*=bubble]{background:#ffffffb3;border-color:#132d5333}html[data-dsh-float][data-dsh-aqua-wallpaper][data-dsh-aqua-media=video] body[data-ds-dark-theme] [class*=bubble]{background:#00000080;border-color:#94b4dc38}[data-dsh-float] [class*=card]{border-radius:14px}[data-dsh-float] [data-composer-card],[data-dsh-float] [data-composer-card]:after{border-radius:24px}[data-dsh-float] [data-composer-card]{z-index:8;background:var(--dsh-aqua-glass-card-light);backdrop-filter:blur(var(--dsh-aqua-blur,14px));border:1px solid #132d5342;position:relative;box-shadow:inset 0 1px #ffffff80,0 10px 36px #132d5329}[data-dsh-float] body[data-ds-dark-theme] [data-composer-card]{background:var(--dsh-aqua-glass-card-dark);border:1px solid #94b4dc52;box-shadow:inset 0 1px #ffffff12,0 10px 36px #02060e80}[data-dsh-aqua][data-dsh-float] [data-dsh-inputbar]:has([data-dsh-stats]){width:calc(var(--dsh-chat-content-width) + 32px);background:var(--dsh-aqua-glass-card-light);max-width:none;backdrop-filter:blur(var(--dsh-aqua-blur,14px));border:1px solid #132d5342;border-radius:24px;margin:0 auto 12px;padding:0;box-shadow:inset 0 1px #ffffff80,0 10px 36px #132d5329}[data-dsh-float] body[data-ds-dark-theme] [data-dsh-inputbar]:has([data-dsh-stats]){background:var(--dsh-aqua-glass-card-dark);border-color:#94b4dc52;box-shadow:inset 0 1px #ffffff12,0 10px 36px #02060e80}[data-dsh-float] [data-dsh-inputbar]:has([data-dsh-stats]) [data-composer-card]{box-shadow:none;backdrop-filter:none;background:0 0;border:none;border-radius:0}[data-dsh-float] [data-dsh-inputbar]:has([data-dsh-stats]) [data-composer-card]:after{display:none}[data-dsh-float] [data-dsh-inputbar]:has([data-dsh-stats]) [data-dsh-stats]{box-sizing:border-box;width:100%;max-width:none;min-height:24px;box-shadow:none;backdrop-filter:none;background:0 0;border:none;border-top:1px solid #132d532e;border-radius:0;margin:auto 0 0;padding:2px 16px;display:block}[data-dsh-float] body[data-ds-dark-theme] [data-dsh-inputbar]:has([data-dsh-stats]) [data-dsh-stats]{border-top-color:#94b4dc3d}[data-dsh-float] [data-composer-card]:after{-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='black' stroke-width='2' stroke-dasharray='4 4'/%3E%3C/svg%3E\");mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='black' stroke-width='2' stroke-dasharray='4 4'/%3E%3C/svg%3E\")}[data-dsh-float] [class*=block]{--dsl-code-block-border-radius:14px;--dsl-diff-radius:14px;--dsl-read-radius:14px;--dsl-terminal-radius:14px;--dsl-web-radius:14px;--dsl-search-radius:14px;border-radius:14px}[data-dsh-float] header{background:var(--dsh-aqua-glass-card-light);backdrop-filter:blur(var(--dsh-aqua-blur,14px));border:1px solid #132d5342;border-bottom-color:#0000;border-radius:20px;margin:12px 16px 0;padding:10px 16px 8px;box-shadow:inset 0 1px #ffffff80,0 10px 34px #132d5329}[data-dsh-float] header:after{display:none}[data-dsh-float] body[data-ds-dark-theme] header{background:var(--dsh-aqua-glass-card-dark);border-color:#94b4dc52 #94b4dc52 #0000;box-shadow:inset 0 1px #ffffff12,0 8px 30px #02060e52}[data-dsh-float] [data-dsh-frame][data-sidebar-collapsed] header{margin-left:28px}[data-dsh-float] [class*=sidebarCol]{z-index:9;background:var(--dsh-aqua-glass-card-light);backdrop-filter:blur(var(--dsh-aqua-blur,14px));border:1px solid #132d5342;border-right-color:#96bef5a6;border-radius:20px;margin:12px;padding:10px 12px 14px;position:relative;overflow:hidden;box-shadow:inset 0 1px #ffffff80,0 10px 34px #132d5329}[data-dsh-float] body[data-ds-dark-theme] [class*=sidebarCol]{background:var(--dsh-aqua-glass-card-dark);border-color:#94b4dc52 #94b4dc33 #94b4dc52 #94b4dc52;border-right-style:solid;border-right-width:1px;box-shadow:inset 0 1px #ffffff12,0 8px 30px #02060e52}[data-dsh-float] [data-dsh-frame][data-sidebar-collapsed] [class*=sidebarCol]{transition:margin .15s var(--ds-ease-in-out), border-radius .15s var(--ds-ease-in-out), transform .1s ease-out;border-radius:16px;margin:12px -12px 12px 12px;padding:0}[data-dsh-float] [data-dsh-frame]:not([data-sidebar-collapsed]) [data-dsh-sidebar-root]{width:100%!important}[data-dsh-float] [data-dsh-trajectory]{background:var(--dsh-aqua-glass-card-light);width:calc(100% - 32px);height:calc(100% - 20px);backdrop-filter:blur(var(--dsh-aqua-blur,14px));border:1px solid #132d5342;border-radius:20px;margin:8px 16px 12px;overflow:hidden;box-shadow:inset 0 1px #ffffff80,0 10px 34px #132d5329}[data-dsh-float] body[data-ds-dark-theme] [data-dsh-trajectory]{background:var(--dsh-aqua-glass-card-dark);border-color:#94b4dc52;box-shadow:inset 0 1px #ffffff12,0 8px 30px #02060e52}[data-dsh-float] [data-dsh-trajectory] [role=toolbar],[data-dsh-float] [data-dsh-trajectory] section[aria-label=Trajectory\\ timeline]{background:0 0}[data-dsh-float] [data-dsh-inputbar]:not([class*=hero]){padding-bottom:12px}[data-dsh-float] [data-dsh-stats]{z-index:8;width:calc(var(--dsh-chat-content-width) + 32px);background:var(--dsh-aqua-glass-card-light);max-width:none;backdrop-filter:blur(var(--dsh-aqua-blur,14px));color:#262e3ee6;border:1px solid #132d5342;border-top-color:#132d532e;border-radius:0 0 24px 24px;margin:0 auto;padding:2px 16px;position:relative;box-shadow:0 10px 36px #132d5329}[data-dsh-float] body[data-ds-dark-theme] [data-dsh-stats]{background:var(--dsh-aqua-glass-card-dark);color:#e4ecf8eb;border-color:#94b4dc3d #94b4dc52 #94b4dc52;box-shadow:0 10px 36px #02060e80}[data-dsh-float] [data-composer-card] textarea::placeholder{color:#37405480}[data-dsh-float] body[data-ds-dark-theme] [data-composer-card] textarea::placeholder{color:#cdd8ea85}[data-dsh-aqua][data-dsh-aqua-spotlight] [data-dsh-aqua-spot]{isolation:isolate;position:relative}[data-dsh-aqua] [data-dsh-aqua-glow]{display:none}[data-dsh-aqua][data-dsh-aqua-spotlight] [data-dsh-aqua-glow]{border-radius:inherit;pointer-events:none;opacity:0;z-index:-1;transition:opacity .3s;display:block;position:absolute;inset:0}[data-dsh-aqua][data-dsh-aqua-spotlight] [data-dsh-aqua-spot][data-spot-on] [data-dsh-aqua-glow]{opacity:1}[data-dsh-aqua][data-dsh-aqua-spotlight] [data-dsh-inputbar][data-dsh-aqua-spot] [data-dsh-aqua-glow]{border-radius:24px}[data-dsh-aqua][data-dsh-float] [class*=sidebarCol]:has([role=dialog]){backdrop-filter:none}[data-dsh-float][data-dsh-aqua-press] [data-dsh-aqua-spot]{transition:transform .1s ease-out}[data-dsh-aqua] body [role=dialog]{backdrop-filter:blur(50px);background:#ffffff73}[data-dsh-aqua] body[data-ds-dark-theme] [role=dialog]{background:#111a278c}[data-dsh-float] [role=treeitem][aria-selected=true]{box-shadow:inset 2px 0 0 var(--dsw-specific-sidebar-nav-item-active-accent), 0 0 16px #6e9be824}[data-dsh-float] button[class*=button]:hover:not(:disabled),[data-dsh-float] [role=menuitem]:hover:not(:disabled){box-shadow:0 0 12px #6e9be829,inset 0 0 0 1px #94b4dc38}[data-dsh-float] [role=menu]{background:color-mix(in srgb, #fff calc(62% * var(--dsh-aqua-frost,1)), transparent);backdrop-filter:blur(var(--dsh-aqua-blur,14px))}[data-dsh-float] body[data-ds-dark-theme] [role=menu]{background:color-mix(in srgb, #1c202a calc(68% * var(--dsh-aqua-frost,1)), transparent)}[data-dsh-aqua] [data-dsh-aqua-fade]{z-index:7;pointer-events:none;backdrop-filter:blur(5px);background:#fff3;height:13px;position:fixed;left:0;right:0}[data-dsh-aqua] body[data-ds-dark-theme] [data-dsh-aqua-fade]{background:#00000026}[data-dsh-aqua] [data-dsh-aqua-fade=top]{top:0;-webkit-mask-image:linear-gradient(#000 0%,#0000 100%);mask-image:linear-gradient(#000 0%,#0000 100%)}[data-dsh-aqua] [data-dsh-aqua-fade=bottom]{bottom:0;-webkit-mask-image:linear-gradient(#0000 0%,#000 100%);mask-image:linear-gradient(#0000 0%,#000 100%)}[data-dsh-aqua] :focus-visible{outline-offset:1px;outline:2px solid #6e9be8d9}[data-dsh-aqua] ::selection{background:#6e9be859}[data-dsh-aqua] [data-conversation-scroll]{text-shadow:0 0 1px #0006}[data-dsh-aqua] body:not([data-ds-dark-theme]) [data-conversation-scroll]{text-shadow:0 0 1px #ffffff8c,0 1px 2px #132d5314}[data-dsh-float] [role=dialog] h2{letter-spacing:.02em;font-family:Space Grotesk Variable,Noto Serif SC,Songti SC,STSong,SimSun,serif;font-weight:600}[data-dsh-float] [role=treeitem]{font-family:Space Grotesk Variable,Noto Serif SC,Songti SC,STSong,SimSun,serif;font-weight:500}[data-dsh-float] [data-phase=hero]{animation:qRUgUq_dsh-aqua-hero-in .32s var(--ds-ease-in-out)}[data-dsh-float] [data-phase=active]{animation:qRUgUq_dsh-aqua-active-in .3s var(--ds-ease-in-out)}[data-dsh-float] [data-testid^=view-]{animation:qRUgUq_dsh-aqua-view-in .26s var(--ds-ease-in-out)}[data-dsh-float] [class*=userRow]{animation:qRUgUq_dsh-aqua-rise .28s var(--ds-ease-in-out) both}[data-dsh-float] [data-tool]{animation:qRUgUq_dsh-aqua-rise .3s var(--ds-ease-in-out) both}[data-dsh-float] [role=dialog]{animation:qRUgUq_dsh-aqua-dialog-in .24s var(--ds-ease-in-out)}@keyframes qRUgUq_dsh-aqua-hero-in{0%{opacity:0}}@keyframes qRUgUq_dsh-aqua-active-in{0%{opacity:0}}@keyframes qRUgUq_dsh-aqua-view-in{0%{opacity:0}}@keyframes qRUgUq_dsh-aqua-rise{0%{opacity:0;transform:translateY(6px)}}@keyframes qRUgUq_dsh-aqua-dialog-in{0%{opacity:0;transform:translateY(8px)scale(.985)}}[data-dsh-compat] [role=menu],[data-dsh-compat] [role=tooltip],[data-dsh-compat] [class*=popover],[data-dsh-compat] [class*=dropdown]{backdrop-filter:blur(12px)}@media (prefers-reduced-motion:reduce){[data-dsh-float] [data-phase=hero],[data-dsh-float] [data-phase=active],[data-dsh-float] [data-testid^=view-],[data-dsh-float] [class*=userRow],[data-dsh-float] [data-tool],[data-dsh-float] [role=dialog],[data-dsh-aqua] [data-dsh-aqua-ambient],[data-dsh-aqua] [data-aqua-critter]{animation:none}[data-dsh-aqua] [data-aqua-critter=bubble]{opacity:0}}[data-dsh-aqua] [class*=centerCol],[data-dsh-aqua] [class*=rightbarCol],[data-dsh-aqua] [data-testid=conversation],[data-dsh-aqua] [class*=conversation],[data-dsh-aqua] [class*=threadCol],[data-dsh-aqua] [class*=chatCol],[data-dsh-aqua] [class*=contentCol],[data-dsh-aqua] [class*=mainCol],[data-dsh-aqua] [class*=sessionCol]{background:transparent!important}[data-dsh-aqua] [data-sidebar-right-panel] [data-dockkit-pane]{background:transparent!important}[data-dsh-aqua] [data-sidebar-right-panel] [data-dockkit-pane-body],[data-dsh-aqua] [data-sidebar-right-panel] [data-dockkit-content]{background-color:transparent!important}[data-dsh-aqua] [data-sidebar-right-panel] [data-sidebar-right-session],[data-dsh-aqua] [data-sidebar-right-panel] [data-sidebar-right-tab]{background:transparent!important}body[data-windows-titlebar] [data-dsh-aqua] [class*=centerCol],body[data-windows-titlebar] [data-dsh-aqua] [class*=rightbarCol]{border-radius:0!important}[data-dsh-aqua] [data-sidebar-collapsed] [class*=sidebarCol]{min-width:64px!important;margin:0!important;padding:0!important;border-radius:0!important;background:transparent!important;backdrop-filter:none!important;border:0!important;box-shadow:none!important;z-index:60!important}[data-dsh-aqua] [data-sidebar-collapsed] [class*=toggle],[data-dsh-aqua] [data-sidebar-collapsed] [class*=railIn] [class*=iconButton]{z-index:40!important;pointer-events:auto!important;visibility:visible!important;opacity:1!important}";
		const tagId$1 = "wediace-ui/aqua.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$1) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "wediace-ui";
			tag.dataset.pluginCss = tagId$1;
			tag.textContent = css$1;
			document.head.appendChild(tag);
		}
		//#endregion
		//#region src/client/wordmark.ts
		/**
		* Fixed wordmark: replace the sidebar brand block (whale SVG + "deepseek"
		* text + "HARNESS" plate) with the fixed identity — a monochrome butterfly
		* glyph (currentColor mask, follows the theme), the "Wediace" text and the
		* "VIOLET" plate. All black/white: the glyph and text ride currentColor /
		* brand tokens, and the plate keeps its chip shape but forced monochrome.
		* One MutationObserver per page (like the seam stamper): React remounts the
		* brand block constantly, so the text swap re-runs on every mutation. The
		* injected <style> tags and the observer are the whole lifetime; the CSS is
		* idempotent (a duplicate tag is skipped) and the observer disconnects on
		* dispose.
		*/
		const WORDMARK_CSS = [
			/* hide the whale logo and force the brand block monochrome */
			"[data-dsh-aqua] [class*=\"sidebarCol\"] [class*=\"brand\"] svg{display:none!important}",
			"[data-dsh-aqua] [class*=\"sidebarCol\"] [class*=\"brand\"]{color:var(--dsw-alias-label-primary)!important}",
			/* the plate ("HARNESS"): keep the chip shape, force black/white */
			"[data-dsh-aqua] [class*=\"sidebarCol\"] [class*=\"brand\"] [data-dsh-aqua-wordmark-plate]{background:var(--dsw-alias-label-primary)!important;color:var(--dsw-alias-bg-base)!important;border:0!important;backdrop-filter:none!important;box-shadow:none!important;text-shadow:none!important;font-size:10px;font-weight:700;letter-spacing:.12em;line-height:1;padding:4px 7px;border-radius:4px;white-space:nowrap;display:inline-block;margin-top:5px;margin-left:-10px}",
			/* the wordmark text: keep the shell's own type metrics, only recolor */
			"[data-dsh-aqua-wordmark-text]{flex:none;width:180px;height:43px;margin-top:4px;background:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3C%21--%20Generator%3A%20qvision_svg_tracer%20--%3E%0A%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22723%22%20height%3D%22171%22%3E%0A%3Cg%20transform%3D%22scale%280.250000%29%22%3E%3Cdefs%3E%3Cmask%20id%3D%22ecounter%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%222892%22%20height%3D%22684%22%20fill%3D%22white%22%2F%3E%3Cg%20transform%3D%22translate%282380%2C270%29%22%3E%3Cpath%20d%3D%22M89.48%2062.48C87.85%2061.34%2079.14%2060.93%2044.78%2060.37C-5.14%2059.56%20-0.86%2060.67%202.87%2049.56C13.51%2017.9%2042.57%200.55%2085%200.52L106.5%200.5L116.2%203.82C142.64%2012.85%20165%2037.42%20165%2057.44L165%2059.78L143.75%2060.36C119.9%2061.01%20101%2060.06%2095.63%2062.35C90.65%2064.47%2092.21%2064.39%2089.48%2062.48Z%22%20fill%3D%22black%22%2F%3E%3C%2Fg%3E%3C%2Fmask%3E%3C%2Fdefs%3E%3Cg%20mask%3D%22url%28%23ecounter%29%22%3E%0A%3Cpath%20d%3D%22M222.5%20397.07C196.39%20392.83%20183.53%20383.08%20172.28%20359L35.51%2077.5C25.04%2056.17%20-0.19%205.38%200.18%202.72L0.5%200.5L41.5%200.2C94.5%20-0.18%2088.63%20-2.5%20100.3%2023.5C110.19%2045.53%20145.97%20120.17%20159.07%20146L224.01%20281.5C232.61%20300.94%20232.13%20301.28%20248.54%20264.5L281.01%20195.5C302.97%20150.28%20305.38%20164.81%20261.63%2078.5C245.12%2045.92%20247.74%2043.09%20222.65%2015.07C207.95%20-1.34%20205.59%20-0.01%20249.22%200.06C308.26%200.15%20315.34%204.09%20337.18%2048.96C351.18%2077.72%20371.19%20116.02%20372.87%20123.83C374.32%20130.57%20379.9%20136.95%20383.3%20143.5L428.7%20236.5C435.98%20252.57%20443.66%20265.41%20451.01%20282.5C461.65%20307.24%20458.93%20299.62%20481.01%20254.59L585.19%2031.5C594.92%2010.98%20597.5%203%20601.54%201.16C605.35%20-0.57%20684.97%20-0.48%20687.35%201.27C689.26%202.67%20687.65%206.44%20668.51%2045.5L583.99%20221.5C582.48%20223.35%20568.53%20253.89%20558.73%20274L518.97%20357.18C501.23%20396.12%20463.29%20409.33%20424.87%20389.94C414.5%20384.7%20394%20357.81%20394%20349.45C394%20348.16%20352.2%20262.41%20348.64%20255C344.95%20247.33%20343.76%20249.13%20323.07%20293.5C310.18%20321.15%20291%20358.77%20291%20360.34C291%20380.79%20251.77%20401.83%20222.5%20397.07Z%22%20fill%3D%22%2307070B%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%2880%2C108%29%22%2F%3E%0A%3Cpath%20d%3D%22M133%20395.47C27.41%20383.76%20-30.04%20279.61%2016.03%20183.43C34.1%20145.73%2066.62%20121.54%20117%20108.33L127.5%20105.58L188.64%20105.54C247.99%20105.5%20249.85%20105.56%20251.95%20107.46C255.38%20110.56%20254.74%20158.71%20251.22%20162.22L248.95%20164.5L143.5%20165.59L134.5%20168.36C48.55%20194.83%2051.51%20309.92%20138.77%20334.23C147.5%20336.66%20270.37%20338.33%20276.25%20336.1L278.87%20335.1L279.38%201.29C280.65%200.02%20347.71%200.31%20348.98%201.58C351.28%203.88%20351.37%20394.73%20349.07%20395.96C346.06%20397.57%20147.89%20397.13%20133%20395.47Z%22%20fill%3D%22%2307070B%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%281108%2C108%29%22%2F%3E%0A%3Cpath%20d%3D%22M71.82%20290.5C-20.93%20274.89%20-26.28%20141.82%2064.93%20119.26C74.41%20116.92%20207.06%20117.16%20210.68%20119.53C214.11%20121.77%20214.5%20124.63%20214.5%20147.21C214.5%20174.84%20223.01%20171.39%20153.22%20172.01C96.46%20172.5%2095.4%20172.55%2089.53%20174.76C64.83%20184.05%2063.58%20219.17%2087.56%20230.22L92.5%20232.5L239.09%20233.06L238.73%20168.28C238.27%2085.21%20237.56%2081.86%20217.5%2068.54C204.68%2060.04%20211.1%2060.58%20117.17%2060.01C36.14%2059.51%2033.8%2059.45%2032.42%2057.56C30.23%2054.56%2030.34%203.79%2032.54%201.97C34.57%200.28%20171.7%20-0.64%20203%200.82C260.76%203.52%20300.08%2035.77%20307.03%2086.16C308.52%2096.93%20309.17%20288.89%20307.73%20290.75C306.29%20292.6%2082.88%20292.36%2071.82%20290.5Z%22%20fill%3D%22%2307070B%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%281644%2C213%29%22%2F%3E%0A%3Cpath%20d%3D%22M128.01%20293.4C-20.27%20275.46%20-50.05%2068.93%2087.5%2012.44C175.37%20-23.65%20280.79%2014.29%20305.8%2091C312.11%20110.36%20315.5%20164.58%20310.94%20173.11C309.96%20174.94%20306.79%20175%20204.92%20175L99.91%20175L97.45%20172.55C94.68%20169.77%2093.63%20134.24%2096.11%20127.12C98.19%20121.14%2096.23%20121.31%20171.5%20120.52L240.91%20119.41C241.83%20118.52%20238.57%20107.04%20235.54%20100.5C209.04%2043.35%20107.55%2045.77%2079.07%20104.23C52.55%20158.64%2076.79%20216.47%20132.52%20231.73L142.5%20234.47L299.5%20235.5L299.51%20292.75L298.96%20295L219.23%20294.89C157.92%20294.81%20136.85%20294.46%20128.01%20293.4Z%22%20fill%3D%22%2307070B%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%28750%2C210%29%22%2F%3E%0A%3Cpath%20d%3D%22M129.92%20290.46C-35.57%20272.37%20-46.15%2038.22%20116.94%203.24L129.5%200.55L282.02%201.51C283.63%202.51%20283.32%2057.49%20281.69%2058.84C280.79%2059.59%20258.76%2060.02%20210.44%2060.24C133.46%2060.59%20138.28%2060.22%20121.18%2067.07C85.38%2081.4%2065.21%20120.88%2073.01%20161.33C80.03%20197.68%2095.9%20215.37%20133%20228.21L142.5%20231.5L212.15%20231.78C265.66%20231.99%20282.01%20232.34%20282.7%20233.28C283.21%20233.97%20283.36%20246.79%20283.05%20263L282.5%20291.5L212%20291.61C161.21%20291.7%20138.26%20291.37%20129.92%20290.46Z%22%20fill%3D%22%2307070B%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%281999%2C213%29%22%2F%3E%0A%3Cpath%20d%3D%22M155.02%20139C164.97%20115.73%20166.61%20121.7%20214.75%20120.37L236%20119.78L236%20117.44C236%2097.42%20213.64%2072.85%20187.2%2063.82L177.5%2060.5L156%2060.52C113.98%2060.55%2083.6%2078.56%2074.03%20109.11L70.59%20117.72C69.67%20118.74%2031.58%20119.46%201.75%20119.03C-4.8%20118.93%207.35%2083.69%2021.23%2062.5C75.64%20-20.54%20229.12%20-22.29%20284.64%2059.5C304.02%2088.06%20316.74%20149.5%20308.02%20172.43L307.05%20175L157.88%20174.34C153.2%20173.09%20151.17%20148%20155.02%20139Z%22%20fill%3D%22%2307070B%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%282309%2C210%29%22%2F%3E%0A%3Cpath%20d%3D%22M2.11%20290.64C0.26%20288.4%200.51%202.84%202.37%201.48C4.75%20-0.27%2070.94%200.29%2072.06%202.07C72.59%202.9%2073.06%2062.14%2073.2%20143.5C73.46%20306.2%2073.6%20290%2071.88%20291.1C69.41%20292.66%203.43%20292.22%202.11%20290.64Z%22%20fill%3D%22%2307070B%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%281523%2C213%29%22%2F%3E%0A%3Cpath%20d%3D%22M91.73%20109.92C43.83%2093.91%200%2043.48%200%204.38L0%20-0.03L71.14%200.5L74.47%209.34C81.79%2028.81%2096.83%2043.8%20117.09%2051.84C133.78%2058.46%20131.66%2058.31%20217.5%2058.93L295.5%2059.5L295.51%20116.75L294.96%20119L128.5%20117.87C110.1%20115.56%20105.94%20114.66%2091.73%20109.92Z%22%20fill%3D%22%2307070B%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%282309%2C386%29%22%2F%3E%0A%3Cpath%20d%3D%22M106.85%20116.51L54.46%20115.9C-4.31%20115.7%20-0.01%20116.43%200.02%20106.63C0.09%2086.88%209.33%2071.77%2026.38%2063.5L35.5%2059.07L70.49%2059.01C110.22%2058.95%20106.66%2059.84%20110.03%2049.11C119.6%2018.56%20149.98%200.55%20192%200.52L213.5%200.5L223.2%203.82C249.64%2012.85%20272%2037.42%20272%2057.44L272%2059.78L218.5%2060.79C195.27%2060.44%20184.53%2076.19%20189.93%20102.66C193.1%20118.2%20202.04%20115.19%20147.98%20115.43C121.54%20115.55%20106.63%20116.3%20106.85%20116.51Z%22%20fill%3D%22%23AA6EF4%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%282273%2C270%29%22%2F%3E%0A%3Cpath%20d%3D%22M146.88%20128.09C140.6%20126.61%20133.49%20126.23%20106.43%20125.9L73.59%20125.5L35.59%2049.69C30.97%2039.29%2025.35%2031.49%2010.65%2015.07C-4.05%20-1.34%20-6.41%20-0.01%2037.22%200.06C96.26%200.15%20103.33%204.08%20125.18%2048.96C140.32%2080.05%20164.1%20126.3%20161.69%20128.63C160.49%20129.8%20152.97%20129.52%20146.88%20128.09Z%22%20fill%3D%22%236821D6%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%28292%2C108%29%22%2F%3E%0A%0A%3Cpath%20d%3D%22M2.2%2071.74C0.18%2069.31%200.38%204.19%202.42%202.15C4.48%200.09%2069.25%20-1.01%2072.93%200.96C75.82%202.51%2076.22%2068.75%2073.35%2071.13C70.94%2073.13%203.84%2073.71%202.2%2071.74Z%22%20fill%3D%22%23AA6EF4%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%281522%2C108%29%22%2F%3E%0A%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") center / contain no-repeat;color:transparent;-webkit-text-fill-color:transparent;font-size:1px}",
			"body[data-ds-dark-theme] [data-dsh-aqua-wordmark-text]{background:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3C%21--%20Generator%3A%20qvision_svg_tracer%20--%3E%0A%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22723%22%20height%3D%22171%22%3E%0A%3Cg%20transform%3D%22scale%280.250000%29%22%3E%3Cdefs%3E%3Cmask%20id%3D%22ecounter%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%222892%22%20height%3D%22684%22%20fill%3D%22white%22%2F%3E%3Cg%20transform%3D%22translate%282380%2C270%29%22%3E%3Cpath%20d%3D%22M89.48%2062.48C87.85%2061.34%2079.14%2060.93%2044.78%2060.37C-5.14%2059.56%20-0.86%2060.67%202.87%2049.56C13.51%2017.9%2042.57%200.55%2085%200.52L106.5%200.5L116.2%203.82C142.64%2012.85%20165%2037.42%20165%2057.44L165%2059.78L143.75%2060.36C119.9%2061.01%20101%2060.06%2095.63%2062.35C90.65%2064.47%2092.21%2064.39%2089.48%2062.48Z%22%20fill%3D%22%23EDF1F7%22%2F%3E%3C%2Fg%3E%3C%2Fmask%3E%3C%2Fdefs%3E%3Cg%20mask%3D%22url%28%23ecounter%29%22%3E%0A%3Cpath%20d%3D%22M222.5%20397.07C196.39%20392.83%20183.53%20383.08%20172.28%20359L35.51%2077.5C25.04%2056.17%20-0.19%205.38%200.18%202.72L0.5%200.5L41.5%200.2C94.5%20-0.18%2088.63%20-2.5%20100.3%2023.5C110.19%2045.53%20145.97%20120.17%20159.07%20146L224.01%20281.5C232.61%20300.94%20232.13%20301.28%20248.54%20264.5L281.01%20195.5C302.97%20150.28%20305.38%20164.81%20261.63%2078.5C245.12%2045.92%20247.74%2043.09%20222.65%2015.07C207.95%20-1.34%20205.59%20-0.01%20249.22%200.06C308.26%200.15%20315.34%204.09%20337.18%2048.96C351.18%2077.72%20371.19%20116.02%20372.87%20123.83C374.32%20130.57%20379.9%20136.95%20383.3%20143.5L428.7%20236.5C435.98%20252.57%20443.66%20265.41%20451.01%20282.5C461.65%20307.24%20458.93%20299.62%20481.01%20254.59L585.19%2031.5C594.92%2010.98%20597.5%203%20601.54%201.16C605.35%20-0.57%20684.97%20-0.48%20687.35%201.27C689.26%202.67%20687.65%206.44%20668.51%2045.5L583.99%20221.5C582.48%20223.35%20568.53%20253.89%20558.73%20274L518.97%20357.18C501.23%20396.12%20463.29%20409.33%20424.87%20389.94C414.5%20384.7%20394%20357.81%20394%20349.45C394%20348.16%20352.2%20262.41%20348.64%20255C344.95%20247.33%20343.76%20249.13%20323.07%20293.5C310.18%20321.15%20291%20358.77%20291%20360.34C291%20380.79%20251.77%20401.83%20222.5%20397.07Z%22%20fill%3D%22%23EDF1F7%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%2880%2C108%29%22%2F%3E%0A%3Cpath%20d%3D%22M133%20395.47C27.41%20383.76%20-30.04%20279.61%2016.03%20183.43C34.1%20145.73%2066.62%20121.54%20117%20108.33L127.5%20105.58L188.64%20105.54C247.99%20105.5%20249.85%20105.56%20251.95%20107.46C255.38%20110.56%20254.74%20158.71%20251.22%20162.22L248.95%20164.5L143.5%20165.59L134.5%20168.36C48.55%20194.83%2051.51%20309.92%20138.77%20334.23C147.5%20336.66%20270.37%20338.33%20276.25%20336.1L278.87%20335.1L279.38%201.29C280.65%200.02%20347.71%200.31%20348.98%201.58C351.28%203.88%20351.37%20394.73%20349.07%20395.96C346.06%20397.57%20147.89%20397.13%20133%20395.47Z%22%20fill%3D%22%23EDF1F7%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%281108%2C108%29%22%2F%3E%0A%3Cpath%20d%3D%22M71.82%20290.5C-20.93%20274.89%20-26.28%20141.82%2064.93%20119.26C74.41%20116.92%20207.06%20117.16%20210.68%20119.53C214.11%20121.77%20214.5%20124.63%20214.5%20147.21C214.5%20174.84%20223.01%20171.39%20153.22%20172.01C96.46%20172.5%2095.4%20172.55%2089.53%20174.76C64.83%20184.05%2063.58%20219.17%2087.56%20230.22L92.5%20232.5L239.09%20233.06L238.73%20168.28C238.27%2085.21%20237.56%2081.86%20217.5%2068.54C204.68%2060.04%20211.1%2060.58%20117.17%2060.01C36.14%2059.51%2033.8%2059.45%2032.42%2057.56C30.23%2054.56%2030.34%203.79%2032.54%201.97C34.57%200.28%20171.7%20-0.64%20203%200.82C260.76%203.52%20300.08%2035.77%20307.03%2086.16C308.52%2096.93%20309.17%20288.89%20307.73%20290.75C306.29%20292.6%2082.88%20292.36%2071.82%20290.5Z%22%20fill%3D%22%23EDF1F7%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%281644%2C213%29%22%2F%3E%0A%3Cpath%20d%3D%22M128.01%20293.4C-20.27%20275.46%20-50.05%2068.93%2087.5%2012.44C175.37%20-23.65%20280.79%2014.29%20305.8%2091C312.11%20110.36%20315.5%20164.58%20310.94%20173.11C309.96%20174.94%20306.79%20175%20204.92%20175L99.91%20175L97.45%20172.55C94.68%20169.77%2093.63%20134.24%2096.11%20127.12C98.19%20121.14%2096.23%20121.31%20171.5%20120.52L240.91%20119.41C241.83%20118.52%20238.57%20107.04%20235.54%20100.5C209.04%2043.35%20107.55%2045.77%2079.07%20104.23C52.55%20158.64%2076.79%20216.47%20132.52%20231.73L142.5%20234.47L299.5%20235.5L299.51%20292.75L298.96%20295L219.23%20294.89C157.92%20294.81%20136.85%20294.46%20128.01%20293.4Z%22%20fill%3D%22%23EDF1F7%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%28750%2C210%29%22%2F%3E%0A%3Cpath%20d%3D%22M129.92%20290.46C-35.57%20272.37%20-46.15%2038.22%20116.94%203.24L129.5%200.55L282.02%201.51C283.63%202.51%20283.32%2057.49%20281.69%2058.84C280.79%2059.59%20258.76%2060.02%20210.44%2060.24C133.46%2060.59%20138.28%2060.22%20121.18%2067.07C85.38%2081.4%2065.21%20120.88%2073.01%20161.33C80.03%20197.68%2095.9%20215.37%20133%20228.21L142.5%20231.5L212.15%20231.78C265.66%20231.99%20282.01%20232.34%20282.7%20233.28C283.21%20233.97%20283.36%20246.79%20283.05%20263L282.5%20291.5L212%20291.61C161.21%20291.7%20138.26%20291.37%20129.92%20290.46Z%22%20fill%3D%22%23EDF1F7%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%281999%2C213%29%22%2F%3E%0A%3Cpath%20d%3D%22M155.02%20139C164.97%20115.73%20166.61%20121.7%20214.75%20120.37L236%20119.78L236%20117.44C236%2097.42%20213.64%2072.85%20187.2%2063.82L177.5%2060.5L156%2060.52C113.98%2060.55%2083.6%2078.56%2074.03%20109.11L70.59%20117.72C69.67%20118.74%2031.58%20119.46%201.75%20119.03C-4.8%20118.93%207.35%2083.69%2021.23%2062.5C75.64%20-20.54%20229.12%20-22.29%20284.64%2059.5C304.02%2088.06%20316.74%20149.5%20308.02%20172.43L307.05%20175L157.88%20174.34C153.2%20173.09%20151.17%20148%20155.02%20139Z%22%20fill%3D%22%23EDF1F7%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%282309%2C210%29%22%2F%3E%0A%3Cpath%20d%3D%22M2.11%20290.64C0.26%20288.4%200.51%202.84%202.37%201.48C4.75%20-0.27%2070.94%200.29%2072.06%202.07C72.59%202.9%2073.06%2062.14%2073.2%20143.5C73.46%20306.2%2073.6%20290%2071.88%20291.1C69.41%20292.66%203.43%20292.22%202.11%20290.64Z%22%20fill%3D%22%23EDF1F7%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%281523%2C213%29%22%2F%3E%0A%3Cpath%20d%3D%22M91.73%20109.92C43.83%2093.91%200%2043.48%200%204.38L0%20-0.03L71.14%200.5L74.47%209.34C81.79%2028.81%2096.83%2043.8%20117.09%2051.84C133.78%2058.46%20131.66%2058.31%20217.5%2058.93L295.5%2059.5L295.51%20116.75L294.96%20119L128.5%20117.87C110.1%20115.56%20105.94%20114.66%2091.73%20109.92Z%22%20fill%3D%22%23EDF1F7%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%282309%2C386%29%22%2F%3E%0A%3Cpath%20d%3D%22M106.85%20116.51L54.46%20115.9C-4.31%20115.7%20-0.01%20116.43%200.02%20106.63C0.09%2086.88%209.33%2071.77%2026.38%2063.5L35.5%2059.07L70.49%2059.01C110.22%2058.95%20106.66%2059.84%20110.03%2049.11C119.6%2018.56%20149.98%200.55%20192%200.52L213.5%200.5L223.2%203.82C249.64%2012.85%20272%2037.42%20272%2057.44L272%2059.78L218.5%2060.79C195.27%2060.44%20184.53%2076.19%20189.93%20102.66C193.1%20118.2%20202.04%20115.19%20147.98%20115.43C121.54%20115.55%20106.63%20116.3%20106.85%20116.51Z%22%20fill%3D%22%23AA6EF4%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%282273%2C270%29%22%2F%3E%0A%3Cpath%20d%3D%22M146.88%20128.09C140.6%20126.61%20133.49%20126.23%20106.43%20125.9L73.59%20125.5L35.59%2049.69C30.97%2039.29%2025.35%2031.49%2010.65%2015.07C-4.05%20-1.34%20-6.41%20-0.01%2037.22%200.06C96.26%200.15%20103.33%204.08%20125.18%2048.96C140.32%2080.05%20164.1%20126.3%20161.69%20128.63C160.49%20129.8%20152.97%20129.52%20146.88%20128.09Z%22%20fill%3D%22%236821D6%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%28292%2C108%29%22%2F%3E%0A%0A%3Cpath%20d%3D%22M2.2%2071.74C0.18%2069.31%200.38%204.19%202.42%202.15C4.48%200.09%2069.25%20-1.01%2072.93%200.96C75.82%202.51%2076.22%2068.75%2073.35%2071.13C70.94%2073.13%203.84%2073.71%202.2%2071.74Z%22%20fill%3D%22%23AA6EF4%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%281522%2C108%29%22%2F%3E%0A%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") center / contain no-repeat}",
			/* spacing: glyph | text | plate rhythm */
			"[data-dsh-aqua] [class*=\"sidebarCol\"] [class*=\"brand\"]{gap:8px!important;align-items:center!important}"
		,
			/* header brand: butterfly glyph + real-text title (探索未至之境) */
			"[data-dsh-aqua-header-title]{font-weight:900!important;font-size:1.35em!important;letter-spacing:.08em!important;color:var(--dsw-alias-label-primary)!important;font-family:'Noto Sans SC','PingFang SC','Microsoft YaHei',sans-serif!important}[data-dsh-aqua-header-glyph]{flex:none;width:40px;height:31px;background:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20916%20706%22%20width%3D%22916%22%20height%3D%22706%22%3E%0D%0A%20%20%3Cpath%20d%3D%22M%20106%20208%20L%20108%20208%20L%20108%20209%20L%20106%20209%20Z%20M%20106%20209%20L%20109%20209%20L%20109%20210%20L%20106%20210%20Z%20M%20106%20210%20L%20109%20210%20L%20109%20211%20L%20106%20211%20Z%20M%20106%20211%20L%20110%20211%20L%20110%20212%20L%20106%20212%20Z%20M%20106%20212%20L%20110%20212%20L%20110%20213%20L%20106%20213%20Z%20M%20106%20213%20L%20111%20213%20L%20111%20214%20L%20106%20214%20Z%20M%20106%20214%20L%20111%20214%20L%20111%20215%20L%20106%20215%20Z%20M%20107%20215%20L%20112%20215%20L%20112%20216%20L%20107%20216%20Z%20M%20107%20216%20L%20112%20216%20L%20112%20217%20L%20107%20217%20Z%20M%20107%20217%20L%20113%20217%20L%20113%20218%20L%20107%20218%20Z%20M%20107%20218%20L%20113%20218%20L%20113%20219%20L%20107%20219%20Z%20M%20107%20219%20L%20114%20219%20L%20114%20220%20L%20107%20220%20Z%20M%20107%20220%20L%20114%20220%20L%20114%20221%20L%20107%20221%20Z%20M%20107%20221%20L%20115%20221%20L%20115%20222%20L%20107%20222%20Z%20M%20107%20222%20L%20115%20222%20L%20115%20223%20L%20107%20223%20Z%20M%20107%20223%20L%20116%20223%20L%20116%20224%20L%20107%20224%20Z%20M%20107%20224%20L%20116%20224%20L%20116%20225%20L%20107%20225%20Z%20M%20107%20225%20L%20117%20225%20L%20117%20226%20L%20107%20226%20Z%20M%20108%20226%20L%20118%20226%20L%20118%20227%20L%20108%20227%20Z%20M%20108%20227%20L%20118%20227%20L%20118%20228%20L%20108%20228%20Z%20M%20108%20228%20L%20119%20228%20L%20119%20229%20L%20108%20229%20Z%20M%20108%20229%20L%20120%20229%20L%20120%20230%20L%20108%20230%20Z%20M%20108%20230%20L%20120%20230%20L%20120%20231%20L%20108%20231%20Z%20M%20108%20231%20L%20121%20231%20L%20121%20232%20L%20108%20232%20Z%20M%20108%20232%20L%20121%20232%20L%20121%20233%20L%20108%20233%20Z%20M%20108%20233%20L%20122%20233%20L%20122%20234%20L%20108%20234%20Z%20M%20108%20234%20L%20123%20234%20L%20123%20235%20L%20108%20235%20Z%20M%20109%20235%20L%20123%20235%20L%20123%20236%20L%20109%20236%20Z%20M%20109%20236%20L%20124%20236%20L%20124%20237%20L%20109%20237%20Z%20M%20109%20237%20L%20125%20237%20L%20125%20238%20L%20109%20238%20Z%20M%20109%20238%20L%20125%20238%20L%20125%20239%20L%20109%20239%20Z%20M%20109%20239%20L%20126%20239%20L%20126%20240%20L%20109%20240%20Z%20M%20110%20240%20L%20127%20240%20L%20127%20241%20L%20110%20241%20Z%20M%20110%20241%20L%20128%20241%20L%20128%20242%20L%20110%20242%20Z%20M%20110%20242%20L%20128%20242%20L%20128%20243%20L%20110%20243%20Z%20M%20110%20243%20L%20129%20243%20L%20129%20244%20L%20110%20244%20Z%20M%20110%20244%20L%20130%20244%20L%20130%20245%20L%20110%20245%20Z%20M%20110%20245%20L%20131%20245%20L%20131%20246%20L%20110%20246%20Z%20M%20110%20246%20L%20132%20246%20L%20132%20247%20L%20110%20247%20Z%20M%20110%20247%20L%20133%20247%20L%20133%20248%20L%20110%20248%20Z%20M%20111%20248%20L%20134%20248%20L%20134%20249%20L%20111%20249%20Z%20M%20111%20249%20L%20134%20249%20L%20134%20250%20L%20111%20250%20Z%20M%20111%20250%20L%20135%20250%20L%20135%20251%20L%20111%20251%20Z%20M%20111%20251%20L%20136%20251%20L%20136%20252%20L%20111%20252%20Z%20M%20112%20252%20L%20137%20252%20L%20137%20253%20L%20112%20253%20Z%20M%20112%20253%20L%20138%20253%20L%20138%20254%20L%20112%20254%20Z%20M%20112%20254%20L%20139%20254%20L%20139%20255%20L%20112%20255%20Z%20M%20112%20255%20L%20140%20255%20L%20140%20256%20L%20112%20256%20Z%20M%20112%20256%20L%20141%20256%20L%20141%20257%20L%20112%20257%20Z%20M%20113%20257%20L%20142%20257%20L%20142%20258%20L%20113%20258%20Z%20M%20113%20258%20L%20143%20258%20L%20143%20259%20L%20113%20259%20Z%20M%20113%20259%20L%20144%20259%20L%20144%20260%20L%20113%20260%20Z%20M%20114%20260%20L%20145%20260%20L%20145%20261%20L%20114%20261%20Z%20M%20114%20261%20L%20146%20261%20L%20146%20262%20L%20114%20262%20Z%20M%20114%20262%20L%20147%20262%20L%20147%20263%20L%20114%20263%20Z%20M%20114%20263%20L%20148%20263%20L%20148%20264%20L%20114%20264%20Z%20M%20114%20264%20L%20149%20264%20L%20149%20265%20L%20114%20265%20Z%20M%20115%20265%20L%20150%20265%20L%20150%20266%20L%20115%20266%20Z%20M%20115%20266%20L%20151%20266%20L%20151%20267%20L%20115%20267%20Z%20M%20115%20267%20L%20153%20267%20L%20153%20268%20L%20115%20268%20Z%20M%20115%20268%20L%20154%20268%20L%20154%20269%20L%20115%20269%20Z%20M%20116%20269%20L%20155%20269%20L%20155%20270%20L%20116%20270%20Z%20M%20116%20270%20L%20157%20270%20L%20157%20271%20L%20116%20271%20Z%20M%20116%20271%20L%20158%20271%20L%20158%20272%20L%20116%20272%20Z%20M%20117%20272%20L%20159%20272%20L%20159%20273%20L%20117%20273%20Z%20M%20117%20273%20L%20160%20273%20L%20160%20274%20L%20117%20274%20Z%20M%20117%20274%20L%20162%20274%20L%20162%20275%20L%20117%20275%20Z%20M%20117%20275%20L%20163%20275%20L%20163%20276%20L%20117%20276%20Z%20M%20118%20276%20L%20165%20276%20L%20165%20277%20L%20118%20277%20Z%20M%20118%20277%20L%20166%20277%20L%20166%20278%20L%20118%20278%20Z%20M%20118%20278%20L%20168%20278%20L%20168%20279%20L%20118%20279%20Z%20M%20119%20279%20L%20170%20279%20L%20170%20280%20L%20119%20280%20Z%20M%20119%20280%20L%20171%20280%20L%20171%20281%20L%20119%20281%20Z%20M%20119%20281%20L%20173%20281%20L%20173%20282%20L%20119%20282%20Z%20M%20120%20282%20L%20174%20282%20L%20174%20283%20L%20120%20283%20Z%20M%20120%20283%20L%20176%20283%20L%20176%20284%20L%20120%20284%20Z%20M%20121%20284%20L%20177%20284%20L%20177%20285%20L%20121%20285%20Z%20M%20121%20285%20L%20179%20285%20L%20179%20286%20L%20121%20286%20Z%20M%20121%20286%20L%20180%20286%20L%20180%20287%20L%20121%20287%20Z%20M%20121%20287%20L%20183%20287%20L%20183%20288%20L%20121%20288%20Z%20M%20122%20288%20L%20184%20288%20L%20184%20289%20L%20122%20289%20Z%20M%20122%20289%20L%20187%20289%20L%20187%20290%20L%20122%20290%20Z%20M%20122%20290%20L%20188%20290%20L%20188%20291%20L%20122%20291%20Z%20M%20123%20291%20L%20190%20291%20L%20190%20292%20L%20123%20292%20Z%20M%20123%20292%20L%20193%20292%20L%20193%20293%20L%20123%20293%20Z%20M%20123%20293%20L%20194%20293%20L%20194%20294%20L%20123%20294%20Z%20M%20124%20294%20L%20197%20294%20L%20197%20295%20L%20124%20295%20Z%20M%20124%20295%20L%20198%20295%20L%20198%20296%20L%20124%20296%20Z%20M%20125%20296%20L%20201%20296%20L%20201%20297%20L%20125%20297%20Z%20M%20125%20297%20L%20203%20297%20L%20203%20298%20L%20125%20298%20Z%20M%20125%20298%20L%20205%20298%20L%20205%20299%20L%20125%20299%20Z%20M%20126%20299%20L%20207%20299%20L%20207%20300%20L%20126%20300%20Z%20M%20126%20300%20L%20209%20300%20L%20209%20301%20L%20126%20301%20Z%20M%20127%20301%20L%20211%20301%20L%20211%20302%20L%20127%20302%20Z%20M%20127%20302%20L%20214%20302%20L%20214%20303%20L%20127%20303%20Z%20M%20128%20303%20L%20216%20303%20L%20216%20304%20L%20128%20304%20Z%20M%20128%20304%20L%20218%20304%20L%20218%20305%20L%20128%20305%20Z%20M%20128%20305%20L%20221%20305%20L%20221%20306%20L%20128%20306%20Z%20M%20129%20306%20L%20223%20306%20L%20223%20307%20L%20129%20307%20Z%20M%20129%20307%20L%20226%20307%20L%20226%20308%20L%20129%20308%20Z%20M%20130%20308%20L%20227%20308%20L%20227%20309%20L%20130%20309%20Z%20M%20130%20309%20L%20230%20309%20L%20230%20310%20L%20130%20310%20Z%20M%20131%20310%20L%20232%20310%20L%20232%20311%20L%20131%20311%20Z%20M%20131%20311%20L%20234%20311%20L%20234%20312%20L%20131%20312%20Z%20M%20132%20312%20L%20237%20312%20L%20237%20313%20L%20132%20313%20Z%20M%20132%20313%20L%20239%20313%20L%20239%20314%20L%20132%20314%20Z%20M%20132%20314%20L%20241%20314%20L%20241%20315%20L%20132%20315%20Z%20M%20133%20315%20L%20243%20315%20L%20243%20316%20L%20133%20316%20Z%20M%20134%20316%20L%20246%20316%20L%20246%20317%20L%20134%20317%20Z%20M%20134%20317%20L%20247%20317%20L%20247%20318%20L%20134%20318%20Z%20M%20134%20318%20L%20250%20318%20L%20250%20319%20L%20134%20319%20Z%20M%20135%20319%20L%20252%20319%20L%20252%20320%20L%20135%20320%20Z%20M%20136%20320%20L%20254%20320%20L%20254%20321%20L%20136%20321%20Z%20M%20136%20321%20L%20256%20321%20L%20256%20322%20L%20136%20322%20Z%20M%20136%20322%20L%20258%20322%20L%20258%20323%20L%20136%20323%20Z%20M%20137%20323%20L%20260%20323%20L%20260%20324%20L%20137%20324%20Z%20M%20137%20324%20L%20262%20324%20L%20262%20325%20L%20137%20325%20Z%20M%20138%20325%20L%20265%20325%20L%20265%20326%20L%20138%20326%20Z%20M%20139%20326%20L%20267%20326%20L%20267%20327%20L%20139%20327%20Z%20M%20139%20327%20L%20269%20327%20L%20269%20328%20L%20139%20328%20Z%20M%20140%20328%20L%20271%20328%20L%20271%20329%20L%20140%20329%20Z%20M%20140%20329%20L%20273%20329%20L%20273%20330%20L%20140%20330%20Z%20M%20141%20330%20L%20274%20330%20L%20274%20331%20L%20141%20331%20Z%20M%20141%20331%20L%20277%20331%20L%20277%20332%20L%20141%20332%20Z%20M%20142%20332%20L%20278%20332%20L%20278%20333%20L%20142%20333%20Z%20M%20143%20333%20L%20280%20333%20L%20280%20334%20L%20143%20334%20Z%20M%20143%20334%20L%20282%20334%20L%20282%20335%20L%20143%20335%20Z%20M%20144%20335%20L%20284%20335%20L%20284%20336%20L%20144%20336%20Z%20M%20144%20336%20L%20286%20336%20L%20286%20337%20L%20144%20337%20Z%20M%20145%20337%20L%20288%20337%20L%20288%20338%20L%20145%20338%20Z%20M%20145%20338%20L%20289%20338%20L%20289%20339%20L%20145%20339%20Z%20M%20146%20339%20L%20291%20339%20L%20291%20340%20L%20146%20340%20Z%20M%20147%20340%20L%20293%20340%20L%20293%20341%20L%20147%20341%20Z%20M%20147%20341%20L%20294%20341%20L%20294%20342%20L%20147%20342%20Z%20M%20148%20342%20L%20296%20342%20L%20296%20343%20L%20148%20343%20Z%20M%20149%20343%20L%20297%20343%20L%20297%20344%20L%20149%20344%20Z%20M%20149%20344%20L%20299%20344%20L%20299%20345%20L%20149%20345%20Z%20M%20150%20345%20L%20300%20345%20L%20300%20346%20L%20150%20346%20Z%20M%20151%20346%20L%20302%20346%20L%20302%20347%20L%20151%20347%20Z%20M%20151%20347%20L%20304%20347%20L%20304%20348%20L%20151%20348%20Z%20M%20152%20348%20L%20305%20348%20L%20305%20349%20L%20152%20349%20Z%20M%20153%20349%20L%20307%20349%20L%20307%20350%20L%20153%20350%20Z%20M%20154%20350%20L%20308%20350%20L%20308%20351%20L%20154%20351%20Z%20M%20154%20351%20L%20310%20351%20L%20310%20352%20L%20154%20352%20Z%20M%20155%20352%20L%20311%20352%20L%20311%20353%20L%20155%20353%20Z%20M%20156%20353%20L%20313%20353%20L%20313%20354%20L%20156%20354%20Z%20M%20157%20354%20L%20314%20354%20L%20314%20355%20L%20157%20355%20Z%20M%20157%20355%20L%20315%20355%20L%20315%20356%20L%20157%20356%20Z%20M%20158%20356%20L%20316%20356%20L%20316%20357%20L%20158%20357%20Z%20M%20159%20357%20L%20318%20357%20L%20318%20358%20L%20159%20358%20Z%20M%20160%20358%20L%20319%20358%20L%20319%20359%20L%20160%20359%20Z%20M%20160%20359%20L%20320%20359%20L%20320%20360%20L%20160%20360%20Z%20M%20161%20360%20L%20322%20360%20L%20322%20361%20L%20161%20361%20Z%20M%20162%20361%20L%20323%20361%20L%20323%20362%20L%20162%20362%20Z%20M%20163%20362%20L%20324%20362%20L%20324%20363%20L%20163%20363%20Z%20M%20164%20363%20L%20325%20363%20L%20325%20364%20L%20164%20364%20Z%20M%20164%20364%20L%20327%20364%20L%20327%20365%20L%20164%20365%20Z%20M%20165%20365%20L%20328%20365%20L%20328%20366%20L%20165%20366%20Z%20M%20166%20366%20L%20329%20366%20L%20329%20367%20L%20166%20367%20Z%20M%20167%20367%20L%20330%20367%20L%20330%20368%20L%20167%20368%20Z%20M%20168%20368%20L%20331%20368%20L%20331%20369%20L%20168%20369%20Z%20M%20168%20369%20L%20332%20369%20L%20332%20370%20L%20168%20370%20Z%20M%20169%20370%20L%20333%20370%20L%20333%20371%20L%20169%20371%20Z%20M%20170%20371%20L%20335%20371%20L%20335%20372%20L%20170%20372%20Z%20M%20171%20372%20L%20336%20372%20L%20336%20373%20L%20171%20373%20Z%20M%20172%20373%20L%20337%20373%20L%20337%20374%20L%20172%20374%20Z%20M%20173%20374%20L%20338%20374%20L%20338%20375%20L%20173%20375%20Z%20M%20174%20375%20L%20339%20375%20L%20339%20376%20L%20174%20376%20Z%20M%20175%20376%20L%20340%20376%20L%20340%20377%20L%20175%20377%20Z%20M%20176%20377%20L%20341%20377%20L%20341%20378%20L%20176%20378%20Z%20M%20177%20378%20L%20342%20378%20L%20342%20379%20L%20177%20379%20Z%20M%20178%20379%20L%20343%20379%20L%20343%20380%20L%20178%20380%20Z%20M%20178%20380%20L%20344%20380%20L%20344%20381%20L%20178%20381%20Z%20M%20180%20381%20L%20345%20381%20L%20345%20382%20L%20180%20382%20Z%20M%20180%20382%20L%20346%20382%20L%20346%20383%20L%20180%20383%20Z%20M%20182%20383%20L%20347%20383%20L%20347%20384%20L%20182%20384%20Z%20M%20182%20384%20L%20348%20384%20L%20348%20385%20L%20182%20385%20Z%20M%20183%20385%20L%20349%20385%20L%20349%20386%20L%20183%20386%20Z%20M%20185%20386%20L%20350%20386%20L%20350%20387%20L%20185%20387%20Z%20M%20185%20387%20L%20350%20387%20L%20350%20388%20L%20185%20388%20Z%20M%20187%20388%20L%20351%20388%20L%20351%20389%20L%20187%20389%20Z%20M%20188%20389%20L%20352%20389%20L%20352%20390%20L%20188%20390%20Z%20M%20189%20390%20L%20353%20390%20L%20353%20391%20L%20189%20391%20Z%20M%20190%20391%20L%20354%20391%20L%20354%20392%20L%20190%20392%20Z%20M%20191%20392%20L%20355%20392%20L%20355%20393%20L%20191%20393%20Z%20M%20192%20393%20L%20356%20393%20L%20356%20394%20L%20192%20394%20Z%20M%20193%20394%20L%20356%20394%20L%20356%20395%20L%20193%20395%20Z%20M%20194%20395%20L%20357%20395%20L%20357%20396%20L%20194%20396%20Z%20M%20196%20396%20L%20358%20396%20L%20358%20397%20L%20196%20397%20Z%20M%20197%20397%20L%20359%20397%20L%20359%20398%20L%20197%20398%20Z%20M%20198%20398%20L%20359%20398%20L%20359%20399%20L%20198%20399%20Z%20M%20199%20399%20L%20360%20399%20L%20360%20400%20L%20199%20400%20Z%20M%20200%20400%20L%20361%20400%20L%20361%20401%20L%20200%20401%20Z%20M%20202%20401%20L%20362%20401%20L%20362%20402%20L%20202%20402%20Z%20M%20203%20402%20L%20362%20402%20L%20362%20403%20L%20203%20403%20Z%20M%20204%20403%20L%20363%20403%20L%20363%20404%20L%20204%20404%20Z%20M%20205%20404%20L%20364%20404%20L%20364%20405%20L%20205%20405%20Z%20M%20207%20405%20L%20365%20405%20L%20365%20406%20L%20207%20406%20Z%20M%20208%20406%20L%20366%20406%20L%20366%20407%20L%20208%20407%20Z%20M%20209%20407%20L%20366%20407%20L%20366%20408%20L%20209%20408%20Z%20M%20210%20408%20L%20367%20408%20L%20367%20409%20L%20210%20409%20Z%20M%20212%20409%20L%20368%20409%20L%20368%20410%20L%20212%20410%20Z%20M%20213%20410%20L%20368%20410%20L%20368%20411%20L%20213%20411%20Z%20M%20215%20411%20L%20369%20411%20L%20369%20412%20L%20215%20412%20Z%20M%20216%20412%20L%20370%20412%20L%20370%20413%20L%20216%20413%20Z%20M%20217%20413%20L%20370%20413%20L%20370%20414%20L%20217%20414%20Z%20M%20219%20414%20L%20371%20414%20L%20371%20415%20L%20219%20415%20Z%20M%20220%20415%20L%20372%20415%20L%20372%20416%20L%20220%20416%20Z%20M%20222%20416%20L%20372%20416%20L%20372%20417%20L%20222%20417%20Z%20M%20223%20417%20L%20373%20417%20L%20373%20418%20L%20223%20418%20Z%20M%20225%20418%20L%20374%20418%20L%20374%20419%20L%20225%20419%20Z%20M%20226%20419%20L%20374%20419%20L%20374%20420%20L%20226%20420%20Z%20M%20228%20420%20L%20375%20420%20L%20375%20421%20L%20228%20421%20Z%20M%20229%20421%20L%20376%20421%20L%20376%20422%20L%20229%20422%20Z%20M%20231%20422%20L%20376%20422%20L%20376%20423%20L%20231%20423%20Z%20M%20233%20423%20L%20377%20423%20L%20377%20424%20L%20233%20424%20Z%20M%20234%20424%20L%20377%20424%20L%20377%20425%20L%20234%20425%20Z%20M%20236%20425%20L%20378%20425%20L%20378%20426%20L%20236%20426%20Z%20M%20237%20426%20L%20378%20426%20L%20378%20427%20L%20237%20427%20Z%20M%20239%20427%20L%20379%20427%20L%20379%20428%20L%20239%20428%20Z%20M%20241%20428%20L%20380%20428%20L%20380%20429%20L%20241%20429%20Z%20M%20243%20429%20L%20380%20429%20L%20380%20430%20L%20243%20430%20Z%20M%20244%20430%20L%20381%20430%20L%20381%20431%20L%20244%20431%20Z%20M%20246%20431%20L%20381%20431%20L%20381%20432%20L%20246%20432%20Z%20M%20248%20432%20L%20382%20432%20L%20382%20433%20L%20248%20433%20Z%20M%20249%20433%20L%20382%20433%20L%20382%20434%20L%20249%20434%20Z%20M%20251%20434%20L%20383%20434%20L%20383%20435%20L%20251%20435%20Z%20M%20252%20435%20L%20383%20435%20L%20383%20436%20L%20252%20436%20Z%20M%20254%20436%20L%20384%20436%20L%20384%20437%20L%20254%20437%20Z%20M%20255%20437%20L%20385%20437%20L%20385%20438%20L%20255%20438%20Z%20M%20257%20438%20L%20385%20438%20L%20385%20439%20L%20257%20439%20Z%20M%20258%20439%20L%20385%20439%20L%20385%20440%20L%20258%20440%20Z%20M%20260%20440%20L%20386%20440%20L%20386%20441%20L%20260%20441%20Z%20M%20262%20441%20L%20387%20441%20L%20387%20442%20L%20262%20442%20Z%20M%20264%20442%20L%20387%20442%20L%20387%20443%20L%20264%20443%20Z%20M%20266%20443%20L%20387%20443%20L%20387%20444%20L%20266%20444%20Z%20M%20267%20444%20L%20388%20444%20L%20388%20445%20L%20267%20445%20Z%20M%20269%20445%20L%20388%20445%20L%20388%20446%20L%20269%20446%20Z%20M%20270%20446%20L%20389%20446%20L%20389%20447%20L%20270%20447%20Z%20M%20272%20447%20L%20389%20447%20L%20389%20448%20L%20272%20448%20Z%20M%20273%20448%20L%20390%20448%20L%20390%20449%20L%20273%20449%20Z%20M%20275%20449%20L%20390%20449%20L%20390%20450%20L%20275%20450%20Z%20M%20276%20450%20L%20391%20450%20L%20391%20451%20L%20276%20451%20Z%20M%20278%20451%20L%20391%20451%20L%20391%20452%20L%20278%20452%20Z%20M%20280%20452%20L%20392%20452%20L%20392%20453%20L%20280%20453%20Z%20M%20282%20453%20L%20392%20453%20L%20392%20454%20L%20282%20454%20Z%20M%20283%20454%20L%20392%20454%20L%20392%20455%20L%20283%20455%20Z%20M%20285%20455%20L%20393%20455%20L%20393%20456%20L%20285%20456%20Z%20M%20286%20456%20L%20394%20456%20L%20394%20457%20L%20286%20457%20Z%20M%20288%20457%20L%20394%20457%20L%20394%20458%20L%20288%20458%20Z%20M%20289%20458%20L%20394%20458%20L%20394%20459%20L%20289%20459%20Z%20M%20290%20459%20L%20394%20459%20L%20394%20460%20L%20290%20460%20Z%20M%20292%20460%20L%20395%20460%20L%20395%20461%20L%20292%20461%20Z%20M%20293%20461%20L%20395%20461%20L%20395%20462%20L%20293%20462%20Z%20M%20295%20462%20L%20396%20462%20L%20396%20463%20L%20295%20463%20Z%20M%20296%20463%20L%20396%20463%20L%20396%20464%20L%20296%20464%20Z%20M%20298%20464%20L%20396%20464%20L%20396%20465%20L%20298%20465%20Z%20M%20299%20465%20L%20397%20465%20L%20397%20466%20L%20299%20466%20Z%20M%20301%20466%20L%20397%20466%20L%20397%20467%20L%20301%20467%20Z%20M%20302%20467%20L%20398%20467%20L%20398%20468%20L%20302%20468%20Z%20M%20303%20468%20L%20398%20468%20L%20398%20469%20L%20303%20469%20Z%20M%20305%20469%20L%20398%20469%20L%20398%20470%20L%20305%20470%20Z%20M%20306%20470%20L%20399%20470%20L%20399%20471%20L%20306%20471%20Z%20M%20308%20471%20L%20399%20471%20L%20399%20472%20L%20308%20472%20Z%20M%20309%20472%20L%20399%20472%20L%20399%20473%20L%20309%20473%20Z%20M%20310%20473%20L%20400%20473%20L%20400%20474%20L%20310%20474%20Z%20M%20312%20474%20L%20400%20474%20L%20400%20475%20L%20312%20475%20Z%20M%20313%20475%20L%20400%20475%20L%20400%20476%20L%20313%20476%20Z%20M%20314%20476%20L%20401%20476%20L%20401%20477%20L%20314%20477%20Z%20M%20315%20477%20L%20401%20477%20L%20401%20478%20L%20315%20478%20Z%20M%20317%20478%20L%20401%20478%20L%20401%20479%20L%20317%20479%20Z%20M%20318%20479%20L%20401%20479%20L%20401%20480%20L%20318%20480%20Z%20M%20319%20480%20L%20402%20480%20L%20402%20481%20L%20319%20481%20Z%20M%20320%20481%20L%20402%20481%20L%20402%20482%20L%20320%20482%20Z%20M%20322%20482%20L%20402%20482%20L%20402%20483%20L%20322%20483%20Z%20M%20323%20483%20L%20403%20483%20L%20403%20484%20L%20323%20484%20Z%20M%20324%20484%20L%20403%20484%20L%20403%20485%20L%20324%20485%20Z%20M%20325%20485%20L%20403%20485%20L%20403%20486%20L%20325%20486%20Z%20M%20327%20486%20L%20403%20486%20L%20403%20487%20L%20327%20487%20Z%20M%20328%20487%20L%20403%20487%20L%20403%20488%20L%20328%20488%20Z%20M%20329%20488%20L%20404%20488%20L%20404%20489%20L%20329%20489%20Z%20M%20330%20489%20L%20404%20489%20L%20404%20490%20L%20330%20490%20Z%20M%20331%20490%20L%20405%20490%20L%20405%20491%20L%20331%20491%20Z%20M%20332%20491%20L%20405%20491%20L%20405%20492%20L%20332%20492%20Z%20M%20333%20492%20L%20405%20492%20L%20405%20493%20L%20333%20493%20Z%20M%20334%20493%20L%20405%20493%20L%20405%20494%20L%20334%20494%20Z%20M%20335%20494%20L%20405%20494%20L%20405%20495%20L%20335%20495%20Z%20M%20336%20495%20L%20405%20495%20L%20405%20496%20L%20336%20496%20Z%20M%20337%20496%20L%20406%20496%20L%20406%20497%20L%20337%20497%20Z%20M%20338%20497%20L%20406%20497%20L%20406%20498%20L%20338%20498%20Z%20M%20339%20498%20L%20406%20498%20L%20406%20499%20L%20339%20499%20Z%20M%20340%20499%20L%20407%20499%20L%20407%20500%20L%20340%20500%20Z%20M%20341%20500%20L%20407%20500%20L%20407%20501%20L%20341%20501%20Z%20M%20342%20501%20L%20407%20501%20L%20407%20502%20L%20342%20502%20Z%20M%20343%20502%20L%20407%20502%20L%20407%20503%20L%20343%20503%20Z%20M%20344%20503%20L%20407%20503%20L%20407%20504%20L%20344%20504%20Z%20M%20345%20504%20L%20407%20504%20L%20407%20505%20L%20345%20505%20Z%20M%20346%20505%20L%20407%20505%20L%20407%20506%20L%20346%20506%20Z%20M%20347%20506%20L%20408%20506%20L%20408%20507%20L%20347%20507%20Z%20M%20348%20507%20L%20408%20507%20L%20408%20508%20L%20348%20508%20Z%20M%20349%20508%20L%20408%20508%20L%20408%20509%20L%20349%20509%20Z%20M%20350%20509%20L%20408%20509%20L%20408%20510%20L%20350%20510%20Z%20M%20351%20510%20L%20409%20510%20L%20409%20511%20L%20351%20511%20Z%20M%20351%20511%20L%20409%20511%20L%20409%20512%20L%20351%20512%20Z%20M%20352%20512%20L%20409%20512%20L%20409%20513%20L%20352%20513%20Z%20M%20353%20513%20L%20409%20513%20L%20409%20514%20L%20353%20514%20Z%20M%20354%20514%20L%20409%20514%20L%20409%20515%20L%20354%20515%20Z%20M%20355%20515%20L%20409%20515%20L%20409%20516%20L%20355%20516%20Z%20M%20356%20516%20L%20409%20516%20L%20409%20517%20L%20356%20517%20Z%20M%20356%20517%20L%20409%20517%20L%20409%20518%20L%20356%20518%20Z%20M%20357%20518%20L%20410%20518%20L%20410%20519%20L%20357%20519%20Z%20M%20358%20519%20L%20410%20519%20L%20410%20520%20L%20358%20520%20Z%20M%20358%20520%20L%20410%20520%20L%20410%20521%20L%20358%20521%20Z%20M%20359%20521%20L%20410%20521%20L%20410%20522%20L%20359%20522%20Z%20M%20360%20522%20L%20410%20522%20L%20410%20523%20L%20360%20523%20Z%20M%20361%20523%20L%20410%20523%20L%20410%20524%20L%20361%20524%20Z%20M%20361%20524%20L%20410%20524%20L%20410%20525%20L%20361%20525%20Z%20M%20362%20525%20L%20410%20525%20L%20410%20526%20L%20362%20526%20Z%20M%20363%20526%20L%20410%20526%20L%20410%20527%20L%20363%20527%20Z%20M%20363%20527%20L%20410%20527%20L%20410%20528%20L%20363%20528%20Z%20M%20364%20528%20L%20410%20528%20L%20410%20529%20L%20364%20529%20Z%20M%20365%20529%20L%20410%20529%20L%20410%20530%20L%20365%20530%20Z%20M%20365%20530%20L%20411%20530%20L%20411%20531%20L%20365%20531%20Z%20M%20366%20531%20L%20411%20531%20L%20411%20532%20L%20366%20532%20Z%20M%20367%20532%20L%20411%20532%20L%20411%20533%20L%20367%20533%20Z%20M%20367%20533%20L%20411%20533%20L%20411%20534%20L%20367%20534%20Z%20M%20368%20534%20L%20411%20534%20L%20411%20535%20L%20368%20535%20Z%20M%20369%20535%20L%20411%20535%20L%20411%20536%20L%20369%20536%20Z%20M%20369%20536%20L%20411%20536%20L%20411%20537%20L%20369%20537%20Z%20M%20370%20537%20L%20411%20537%20L%20411%20538%20L%20370%20538%20Z%20M%20371%20538%20L%20411%20538%20L%20411%20539%20L%20371%20539%20Z%20M%20371%20539%20L%20411%20539%20L%20411%20540%20L%20371%20540%20Z%20M%20372%20540%20L%20411%20540%20L%20411%20541%20L%20372%20541%20Z%20M%20372%20541%20L%20411%20541%20L%20411%20542%20L%20372%20542%20Z%20M%20373%20542%20L%20411%20542%20L%20411%20543%20L%20373%20543%20Z%20M%20373%20543%20L%20411%20543%20L%20411%20544%20L%20373%20544%20Z%20M%20374%20544%20L%20411%20544%20L%20411%20545%20L%20374%20545%20Z%20M%20374%20545%20L%20411%20545%20L%20411%20546%20L%20374%20546%20Z%20M%20375%20546%20L%20411%20546%20L%20411%20547%20L%20375%20547%20Z%20M%20375%20547%20L%20411%20547%20L%20411%20548%20L%20375%20548%20Z%20M%20376%20548%20L%20411%20548%20L%20411%20549%20L%20376%20549%20Z%20M%20376%20549%20L%20411%20549%20L%20411%20550%20L%20376%20550%20Z%20M%20377%20550%20L%20411%20550%20L%20411%20551%20L%20377%20551%20Z%20M%20377%20551%20L%20411%20551%20L%20411%20552%20L%20377%20552%20Z%20M%20378%20552%20L%20411%20552%20L%20411%20553%20L%20378%20553%20Z%20M%20378%20553%20L%20411%20553%20L%20411%20554%20L%20378%20554%20Z%20M%20379%20554%20L%20411%20554%20L%20411%20555%20L%20379%20555%20Z%20M%20379%20555%20L%20411%20555%20L%20411%20556%20L%20379%20556%20Z%20M%20380%20556%20L%20411%20556%20L%20411%20557%20L%20380%20557%20Z%20M%20380%20557%20L%20411%20557%20L%20411%20558%20L%20380%20558%20Z%20M%20381%20558%20L%20411%20558%20L%20411%20559%20L%20381%20559%20Z%20M%20381%20559%20L%20411%20559%20L%20411%20560%20L%20381%20560%20Z%20M%20382%20560%20L%20411%20560%20L%20411%20561%20L%20382%20561%20Z%20M%20382%20561%20L%20411%20561%20L%20411%20562%20L%20382%20562%20Z%20M%20382%20562%20L%20411%20562%20L%20411%20563%20L%20382%20563%20Z%20M%20383%20563%20L%20411%20563%20L%20411%20564%20L%20383%20564%20Z%20M%20383%20564%20L%20411%20564%20L%20411%20565%20L%20383%20565%20Z%20M%20384%20565%20L%20410%20565%20L%20410%20566%20L%20384%20566%20Z%20M%20384%20566%20L%20410%20566%20L%20410%20567%20L%20384%20567%20Z%20M%20384%20567%20L%20410%20567%20L%20410%20568%20L%20384%20568%20Z%20M%20385%20568%20L%20410%20568%20L%20410%20569%20L%20385%20569%20Z%20M%20385%20569%20L%20410%20569%20L%20410%20570%20L%20385%20570%20Z%20M%20386%20570%20L%20410%20570%20L%20410%20571%20L%20386%20571%20Z%20M%20386%20571%20L%20410%20571%20L%20410%20572%20L%20386%20572%20Z%20M%20386%20572%20L%20410%20572%20L%20410%20573%20L%20386%20573%20Z%20M%20386%20573%20L%20410%20573%20L%20410%20574%20L%20386%20574%20Z%20M%20387%20574%20L%20410%20574%20L%20410%20575%20L%20387%20575%20Z%20M%20387%20575%20L%20410%20575%20L%20410%20576%20L%20387%20576%20Z%20M%20387%20576%20L%20409%20576%20L%20409%20577%20L%20387%20577%20Z%20M%20388%20577%20L%20409%20577%20L%20409%20578%20L%20388%20578%20Z%20M%20388%20578%20L%20409%20578%20L%20409%20579%20L%20388%20579%20Z%20M%20388%20579%20L%20409%20579%20L%20409%20580%20L%20388%20580%20Z%20M%20389%20580%20L%20409%20580%20L%20409%20581%20L%20389%20581%20Z%20M%20389%20581%20L%20409%20581%20L%20409%20582%20L%20389%20582%20Z%20M%20389%20582%20L%20409%20582%20L%20409%20583%20L%20389%20583%20Z%20M%20389%20583%20L%20409%20583%20L%20409%20584%20L%20389%20584%20Z%20M%20390%20584%20L%20408%20584%20L%20408%20585%20L%20390%20585%20Z%20M%20390%20585%20L%20408%20585%20L%20408%20586%20L%20390%20586%20Z%20M%20390%20586%20L%20408%20586%20L%20408%20587%20L%20390%20587%20Z%20M%20391%20587%20L%20408%20587%20L%20408%20588%20L%20391%20588%20Z%20M%20391%20588%20L%20407%20588%20L%20407%20589%20L%20391%20589%20Z%20M%20391%20589%20L%20407%20589%20L%20407%20590%20L%20391%20590%20Z%20M%20391%20590%20L%20407%20590%20L%20407%20591%20L%20391%20591%20Z%20M%20392%20591%20L%20407%20591%20L%20407%20592%20L%20392%20592%20Z%20M%20392%20592%20L%20407%20592%20L%20407%20593%20L%20392%20593%20Z%20M%20392%20593%20L%20407%20593%20L%20407%20594%20L%20392%20594%20Z%20M%20392%20594%20L%20406%20594%20L%20406%20595%20L%20392%20595%20Z%20M%20393%20595%20L%20406%20595%20L%20406%20596%20L%20393%20596%20Z%20M%20393%20596%20L%20406%20596%20L%20406%20597%20L%20393%20597%20Z%20M%20393%20597%20L%20405%20597%20L%20405%20598%20L%20393%20598%20Z%20M%20393%20598%20L%20405%20598%20L%20405%20599%20L%20393%20599%20Z%20M%20393%20599%20L%20405%20599%20L%20405%20600%20L%20393%20600%20Z%20M%20394%20600%20L%20405%20600%20L%20405%20601%20L%20394%20601%20Z%20M%20394%20601%20L%20405%20601%20L%20405%20602%20L%20394%20602%20Z%20M%20394%20602%20L%20404%20602%20L%20404%20603%20L%20394%20603%20Z%20M%20394%20603%20L%20404%20603%20L%20404%20604%20L%20394%20604%20Z%20M%20394%20604%20L%20404%20604%20L%20404%20605%20L%20394%20605%20Z%20M%20394%20605%20L%20403%20605%20L%20403%20606%20L%20394%20606%20Z%20M%20395%20606%20L%20403%20606%20L%20403%20607%20L%20395%20607%20Z%20M%20395%20607%20L%20403%20607%20L%20403%20608%20L%20395%20608%20Z%20M%20395%20608%20L%20403%20608%20L%20403%20609%20L%20395%20609%20Z%20M%20395%20609%20L%20403%20609%20L%20403%20610%20L%20395%20610%20Z%20M%20395%20610%20L%20402%20610%20L%20402%20611%20L%20395%20611%20Z%20M%20395%20611%20L%20402%20611%20L%20402%20612%20L%20395%20612%20Z%20M%20395%20612%20L%20401%20612%20L%20401%20613%20L%20395%20613%20Z%20M%20395%20613%20L%20401%20613%20L%20401%20614%20L%20395%20614%20Z%20M%20395%20614%20L%20401%20614%20L%20401%20615%20L%20395%20615%20Z%20M%20396%20615%20L%20400%20615%20L%20400%20616%20L%20396%20616%20Z%20M%20396%20616%20L%20400%20616%20L%20400%20617%20L%20396%20617%20Z%20M%20396%20617%20L%20400%20617%20L%20400%20618%20L%20396%20618%20Z%20M%20396%20618%20L%20399%20618%20L%20399%20619%20L%20396%20619%20Z%20M%20396%20619%20L%20399%20619%20L%20399%20620%20L%20396%20620%20Z%20M%20396%20620%20L%20399%20620%20L%20399%20621%20L%20396%20621%20Z%20M%20396%20621%20L%20398%20621%20L%20398%20622%20L%20396%20622%20Z%22%20fill%3D%22rgb%28170%2C104%2C249%29%22%2F%3E%0D%0A%20%20%3Cpath%20d%3D%22M%20111%2047%20L%20112%2047%20L%20112%2048%20L%20111%2048%20Z%20M%20110%2048%20L%20113%2048%20L%20113%2049%20L%20110%2049%20Z%20M%20110%2049%20L%20113%2049%20L%20113%2050%20L%20110%2050%20Z%20M%20110%2050%20L%20114%2050%20L%20114%2051%20L%20110%2051%20Z%20M%20110%2051%20L%20114%2051%20L%20114%2052%20L%20110%2052%20Z%20M%20110%2052%20L%20115%2052%20L%20115%2053%20L%20110%2053%20Z%20M%20110%2053%20L%20116%2053%20L%20116%2054%20L%20110%2054%20Z%20M%20110%2054%20L%20116%2054%20L%20116%2055%20L%20110%2055%20Z%20M%20109%2055%20L%20117%2055%20L%20117%2056%20L%20109%2056%20Z%20M%20109%2056%20L%20118%2056%20L%20118%2057%20L%20109%2057%20Z%20M%20109%2057%20L%20118%2057%20L%20118%2058%20L%20109%2058%20Z%20M%20109%2058%20L%20119%2058%20L%20119%2059%20L%20109%2059%20Z%20M%20109%2059%20L%20120%2059%20L%20120%2060%20L%20109%2060%20Z%20M%20109%2060%20L%20120%2060%20L%20120%2061%20L%20109%2061%20Z%20M%20108%2061%20L%20121%2061%20L%20121%2062%20L%20108%2062%20Z%20M%20108%2062%20L%20122%2062%20L%20122%2063%20L%20108%2063%20Z%20M%20108%2063%20L%20122%2063%20L%20122%2064%20L%20108%2064%20Z%20M%20108%2064%20L%20123%2064%20L%20123%2065%20L%20108%2065%20Z%20M%20108%2065%20L%20124%2065%20L%20124%2066%20L%20108%2066%20Z%20M%20108%2066%20L%20125%2066%20L%20125%2067%20L%20108%2067%20Z%20M%20108%2067%20L%20125%2067%20L%20125%2068%20L%20108%2068%20Z%20M%20108%2068%20L%20126%2068%20L%20126%2069%20L%20108%2069%20Z%20M%20108%2069%20L%20127%2069%20L%20127%2070%20L%20108%2070%20Z%20M%20108%2070%20L%20128%2070%20L%20128%2071%20L%20108%2071%20Z%20M%20108%2071%20L%20129%2071%20L%20129%2072%20L%20108%2072%20Z%20M%20108%2072%20L%20129%2072%20L%20129%2073%20L%20108%2073%20Z%20M%20108%2073%20L%20130%2073%20L%20130%2074%20L%20108%2074%20Z%20M%20108%2074%20L%20131%2074%20L%20131%2075%20L%20108%2075%20Z%20M%20108%2075%20L%20132%2075%20L%20132%2076%20L%20108%2076%20Z%20M%20107%2076%20L%20133%2076%20L%20133%2077%20L%20107%2077%20Z%20M%20107%2077%20L%20134%2077%20L%20134%2078%20L%20107%2078%20Z%20M%20107%2078%20L%20135%2078%20L%20135%2079%20L%20107%2079%20Z%20M%20107%2079%20L%20136%2079%20L%20136%2080%20L%20107%2080%20Z%20M%20107%2080%20L%20136%2080%20L%20136%2081%20L%20107%2081%20Z%20M%20107%2081%20L%20137%2081%20L%20137%2082%20L%20107%2082%20Z%20M%20107%2082%20L%20138%2082%20L%20138%2083%20L%20107%2083%20Z%20M%20107%2083%20L%20139%2083%20L%20139%2084%20L%20107%2084%20Z%20M%20107%2084%20L%20140%2084%20L%20140%2085%20L%20107%2085%20Z%20M%20107%2085%20L%20141%2085%20L%20141%2086%20L%20107%2086%20Z%20M%20107%2086%20L%20142%2086%20L%20142%2087%20L%20107%2087%20Z%20M%20107%2087%20L%20143%2087%20L%20143%2088%20L%20107%2088%20Z%20M%20107%2088%20L%20144%2088%20L%20144%2089%20L%20107%2089%20Z%20M%20107%2089%20L%20145%2089%20L%20145%2090%20L%20107%2090%20Z%20M%20107%2090%20L%20146%2090%20L%20146%2091%20L%20107%2091%20Z%20M%20107%2091%20L%20147%2091%20L%20147%2092%20L%20107%2092%20Z%20M%20107%2092%20L%20148%2092%20L%20148%2093%20L%20107%2093%20Z%20M%20107%2093%20L%20149%2093%20L%20149%2094%20L%20107%2094%20Z%20M%20107%2094%20L%20151%2094%20L%20151%2095%20L%20107%2095%20Z%20M%20107%2095%20L%20152%2095%20L%20152%2096%20L%20107%2096%20Z%20M%20107%2096%20L%20153%2096%20L%20153%2097%20L%20107%2097%20Z%20M%20107%2097%20L%20154%2097%20L%20154%2098%20L%20107%2098%20Z%20M%20107%2098%20L%20155%2098%20L%20155%2099%20L%20107%2099%20Z%20M%20107%2099%20L%20157%2099%20L%20157%20100%20L%20107%20100%20Z%20M%20107%20100%20L%20158%20100%20L%20158%20101%20L%20107%20101%20Z%20M%20107%20101%20L%20159%20101%20L%20159%20102%20L%20107%20102%20Z%20M%20107%20102%20L%20160%20102%20L%20160%20103%20L%20107%20103%20Z%20M%20107%20103%20L%20162%20103%20L%20162%20104%20L%20107%20104%20Z%20M%20107%20104%20L%20163%20104%20L%20163%20105%20L%20107%20105%20Z%20M%20107%20105%20L%20164%20105%20L%20164%20106%20L%20107%20106%20Z%20M%20107%20106%20L%20166%20106%20L%20166%20107%20L%20107%20107%20Z%20M%20107%20107%20L%20167%20107%20L%20167%20108%20L%20107%20108%20Z%20M%20107%20108%20L%20168%20108%20L%20168%20109%20L%20107%20109%20Z%20M%20107%20109%20L%20169%20109%20L%20169%20110%20L%20107%20110%20Z%20M%20107%20110%20L%20171%20110%20L%20171%20111%20L%20107%20111%20Z%20M%20107%20111%20L%20172%20111%20L%20172%20112%20L%20107%20112%20Z%20M%20108%20112%20L%20174%20112%20L%20174%20113%20L%20108%20113%20Z%20M%20108%20113%20L%20175%20113%20L%20175%20114%20L%20108%20114%20Z%20M%20108%20114%20L%20177%20114%20L%20177%20115%20L%20108%20115%20Z%20M%20108%20115%20L%20178%20115%20L%20178%20116%20L%20108%20116%20Z%20M%20108%20116%20L%20179%20116%20L%20179%20117%20L%20108%20117%20Z%20M%20108%20117%20L%20181%20117%20L%20181%20118%20L%20108%20118%20Z%20M%20108%20118%20L%20182%20118%20L%20182%20119%20L%20108%20119%20Z%20M%20108%20119%20L%20184%20119%20L%20184%20120%20L%20108%20120%20Z%20M%20108%20120%20L%20185%20120%20L%20185%20121%20L%20108%20121%20Z%20M%20108%20121%20L%20187%20121%20L%20187%20122%20L%20108%20122%20Z%20M%20108%20122%20L%20188%20122%20L%20188%20123%20L%20108%20123%20Z%20M%20108%20123%20L%20190%20123%20L%20190%20124%20L%20108%20124%20Z%20M%20108%20124%20L%20191%20124%20L%20191%20125%20L%20108%20125%20Z%20M%20108%20125%20L%20193%20125%20L%20193%20126%20L%20108%20126%20Z%20M%20108%20126%20L%20194%20126%20L%20194%20127%20L%20108%20127%20Z%20M%20109%20127%20L%20197%20127%20L%20197%20128%20L%20109%20128%20Z%20M%20109%20128%20L%20198%20128%20L%20198%20129%20L%20109%20129%20Z%20M%20109%20129%20L%20200%20129%20L%20200%20130%20L%20109%20130%20Z%20M%20109%20130%20L%20201%20130%20L%20201%20131%20L%20109%20131%20Z%20M%20109%20131%20L%20203%20131%20L%20203%20132%20L%20109%20132%20Z%20M%20109%20132%20L%20205%20132%20L%20205%20133%20L%20109%20133%20Z%20M%20110%20133%20L%20206%20133%20L%20206%20134%20L%20110%20134%20Z%20M%20110%20134%20L%20209%20134%20L%20209%20135%20L%20110%20135%20Z%20M%20110%20135%20L%20210%20135%20L%20210%20136%20L%20110%20136%20Z%20M%20110%20136%20L%20212%20136%20L%20212%20137%20L%20110%20137%20Z%20M%20110%20137%20L%20213%20137%20L%20213%20138%20L%20110%20138%20Z%20M%20110%20138%20L%20215%20138%20L%20215%20139%20L%20110%20139%20Z%20M%20110%20139%20L%20217%20139%20L%20217%20140%20L%20110%20140%20Z%20M%20111%20140%20L%20218%20140%20L%20218%20141%20L%20111%20141%20Z%20M%20111%20141%20L%20221%20141%20L%20221%20142%20L%20111%20142%20Z%20M%20111%20142%20L%20222%20142%20L%20222%20143%20L%20111%20143%20Z%20M%20111%20143%20L%20224%20143%20L%20224%20144%20L%20111%20144%20Z%20M%20112%20144%20L%20226%20144%20L%20226%20145%20L%20112%20145%20Z%20M%20112%20145%20L%20228%20145%20L%20228%20146%20L%20112%20146%20Z%20M%20112%20146%20L%20229%20146%20L%20229%20147%20L%20112%20147%20Z%20M%20112%20147%20L%20232%20147%20L%20232%20148%20L%20112%20148%20Z%20M%20112%20148%20L%20233%20148%20L%20233%20149%20L%20112%20149%20Z%20M%20113%20149%20L%20235%20149%20L%20235%20150%20L%20113%20150%20Z%20M%20113%20150%20L%20236%20150%20L%20236%20151%20L%20113%20151%20Z%20M%20113%20151%20L%20239%20151%20L%20239%20152%20L%20113%20152%20Z%20M%20113%20152%20L%20240%20152%20L%20240%20153%20L%20113%20153%20Z%20M%20114%20153%20L%20242%20153%20L%20242%20154%20L%20114%20154%20Z%20M%20114%20154%20L%20244%20154%20L%20244%20155%20L%20114%20155%20Z%20M%20114%20155%20L%20245%20155%20L%20245%20156%20L%20114%20156%20Z%20M%20114%20156%20L%20248%20156%20L%20248%20157%20L%20114%20157%20Z%20M%20115%20157%20L%20249%20157%20L%20249%20158%20L%20115%20158%20Z%20M%20115%20158%20L%20251%20158%20L%20251%20159%20L%20115%20159%20Z%20M%20115%20159%20L%20252%20159%20L%20252%20160%20L%20115%20160%20Z%20M%20115%20160%20L%20255%20160%20L%20255%20161%20L%20115%20161%20Z%20M%20116%20161%20L%20256%20161%20L%20256%20162%20L%20116%20162%20Z%20M%20116%20162%20L%20258%20162%20L%20258%20163%20L%20116%20163%20Z%20M%20116%20163%20L%20260%20163%20L%20260%20164%20L%20116%20164%20Z%20M%20117%20164%20L%20262%20164%20L%20262%20165%20L%20117%20165%20Z%20M%20117%20165%20L%20264%20165%20L%20264%20166%20L%20117%20166%20Z%20M%20117%20166%20L%20265%20166%20L%20265%20167%20L%20117%20167%20Z%20M%20118%20167%20L%20267%20167%20L%20267%20168%20L%20118%20168%20Z%20M%20118%20168%20L%20269%20168%20L%20269%20169%20L%20118%20169%20Z%20M%20118%20169%20L%20271%20169%20L%20271%20170%20L%20118%20170%20Z%20M%20119%20170%20L%20271%20170%20L%20271%20171%20L%20119%20171%20Z%20M%20119%20171%20L%20274%20171%20L%20274%20172%20L%20119%20172%20Z%20M%20119%20172%20L%20276%20172%20L%20276%20173%20L%20119%20173%20Z%20M%20120%20173%20L%20277%20173%20L%20277%20174%20L%20120%20174%20Z%20M%20120%20174%20L%20279%20174%20L%20279%20175%20L%20120%20175%20Z%20M%20121%20175%20L%20281%20175%20L%20281%20176%20L%20121%20176%20Z%20M%20121%20176%20L%20282%20176%20L%20282%20177%20L%20121%20177%20Z%20M%20121%20177%20L%20283%20177%20L%20283%20178%20L%20121%20178%20Z%20M%20121%20178%20L%20285%20178%20L%20285%20179%20L%20121%20179%20Z%20M%20122%20179%20L%20287%20179%20L%20287%20180%20L%20122%20180%20Z%20M%20122%20180%20L%20289%20180%20L%20289%20181%20L%20122%20181%20Z%20M%20123%20181%20L%20289%20181%20L%20289%20182%20L%20123%20182%20Z%20M%20123%20182%20L%20292%20182%20L%20292%20183%20L%20123%20183%20Z%20M%20123%20183%20L%20293%20183%20L%20293%20184%20L%20123%20184%20Z%20M%20124%20184%20L%20294%20184%20L%20294%20185%20L%20124%20185%20Z%20M%20124%20185%20L%20296%20185%20L%20296%20186%20L%20124%20186%20Z%20M%20125%20186%20L%20297%20186%20L%20297%20187%20L%20125%20187%20Z%20M%20125%20187%20L%20299%20187%20L%20299%20188%20L%20125%20188%20Z%20M%20126%20188%20L%20300%20188%20L%20300%20189%20L%20126%20189%20Z%20M%20126%20189%20L%20302%20189%20L%20302%20190%20L%20126%20190%20Z%20M%20127%20190%20L%20303%20190%20L%20303%20191%20L%20127%20191%20Z%20M%20127%20191%20L%20304%20191%20L%20304%20192%20L%20127%20192%20Z%20M%20128%20192%20L%20305%20192%20L%20305%20193%20L%20128%20193%20Z%20M%20128%20193%20L%20307%20193%20L%20307%20194%20L%20128%20194%20Z%20M%20129%20194%20L%20308%20194%20L%20308%20195%20L%20129%20195%20Z%20M%20129%20195%20L%20310%20195%20L%20310%20196%20L%20129%20196%20Z%20M%20130%20196%20L%20311%20196%20L%20311%20197%20L%20130%20197%20Z%20M%20130%20197%20L%20312%20197%20L%20312%20198%20L%20130%20198%20Z%20M%20131%20198%20L%20313%20198%20L%20313%20199%20L%20131%20199%20Z%20M%20131%20199%20L%20315%20199%20L%20315%20200%20L%20131%20200%20Z%20M%20132%20200%20L%20316%20200%20L%20316%20201%20L%20132%20201%20Z%20M%20132%20201%20L%20317%20201%20L%20317%20202%20L%20132%20202%20Z%20M%20133%20202%20L%20319%20202%20L%20319%20203%20L%20133%20203%20Z%20M%20133%20203%20L%20320%20203%20L%20320%20204%20L%20133%20204%20Z%20M%20134%20204%20L%20321%20204%20L%20321%20205%20L%20134%20205%20Z%20M%20135%20205%20L%20322%20205%20L%20322%20206%20L%20135%20206%20Z%20M%20135%20206%20L%20323%20206%20L%20323%20207%20L%20135%20207%20Z%20M%20136%20207%20L%20324%20207%20L%20324%20208%20L%20136%20208%20Z%20M%20136%20208%20L%20326%20208%20L%20326%20209%20L%20136%20209%20Z%20M%20137%20209%20L%20327%20209%20L%20327%20210%20L%20137%20210%20Z%20M%20137%20210%20L%20328%20210%20L%20328%20211%20L%20137%20211%20Z%20M%20138%20211%20L%20329%20211%20L%20329%20212%20L%20138%20212%20Z%20M%20139%20212%20L%20330%20212%20L%20330%20213%20L%20139%20213%20Z%20M%20139%20213%20L%20331%20213%20L%20331%20214%20L%20139%20214%20Z%20M%20140%20214%20L%20332%20214%20L%20332%20215%20L%20140%20215%20Z%20M%20141%20215%20L%20334%20215%20L%20334%20216%20L%20141%20216%20Z%20M%20141%20216%20L%20334%20216%20L%20334%20217%20L%20141%20217%20Z%20M%20142%20217%20L%20335%20217%20L%20335%20218%20L%20142%20218%20Z%20M%20143%20218%20L%20337%20218%20L%20337%20219%20L%20143%20219%20Z%20M%20143%20219%20L%20338%20219%20L%20338%20220%20L%20143%20220%20Z%20M%20144%20220%20L%20339%20220%20L%20339%20221%20L%20144%20221%20Z%20M%20145%20221%20L%20340%20221%20L%20340%20222%20L%20145%20222%20Z%20M%20146%20222%20L%20341%20222%20L%20341%20223%20L%20146%20223%20Z%20M%20146%20223%20L%20342%20223%20L%20342%20224%20L%20146%20224%20Z%20M%20147%20224%20L%20343%20224%20L%20343%20225%20L%20147%20225%20Z%20M%20148%20225%20L%20344%20225%20L%20344%20226%20L%20148%20226%20Z%20M%20149%20226%20L%20345%20226%20L%20345%20227%20L%20149%20227%20Z%20M%20149%20227%20L%20345%20227%20L%20345%20228%20L%20149%20228%20Z%20M%20150%20228%20L%20346%20228%20L%20346%20229%20L%20150%20229%20Z%20M%20151%20229%20L%20347%20229%20L%20347%20230%20L%20151%20230%20Z%20M%20152%20230%20L%20348%20230%20L%20348%20231%20L%20152%20231%20Z%20M%20153%20231%20L%20349%20231%20L%20349%20232%20L%20153%20232%20Z%20M%20154%20232%20L%20350%20232%20L%20350%20233%20L%20154%20233%20Z%20M%20154%20233%20L%20351%20233%20L%20351%20234%20L%20154%20234%20Z%20M%20155%20234%20L%20352%20234%20L%20352%20235%20L%20155%20235%20Z%20M%20156%20235%20L%20353%20235%20L%20353%20236%20L%20156%20236%20Z%20M%20157%20236%20L%20354%20236%20L%20354%20237%20L%20157%20237%20Z%20M%20158%20237%20L%20355%20237%20L%20355%20238%20L%20158%20238%20Z%20M%20159%20238%20L%20355%20238%20L%20355%20239%20L%20159%20239%20Z%20M%20160%20239%20L%20356%20239%20L%20356%20240%20L%20160%20240%20Z%20M%20161%20240%20L%20357%20240%20L%20357%20241%20L%20161%20241%20Z%20M%20162%20241%20L%20358%20241%20L%20358%20242%20L%20162%20242%20Z%20M%20163%20242%20L%20359%20242%20L%20359%20243%20L%20163%20243%20Z%20M%20164%20243%20L%20359%20243%20L%20359%20244%20L%20164%20244%20Z%20M%20165%20244%20L%20360%20244%20L%20360%20245%20L%20165%20245%20Z%20M%20166%20245%20L%20361%20245%20L%20361%20246%20L%20166%20246%20Z%20M%20167%20246%20L%20362%20246%20L%20362%20247%20L%20167%20247%20Z%20M%20168%20247%20L%20363%20247%20L%20363%20248%20L%20168%20248%20Z%20M%20169%20248%20L%20364%20248%20L%20364%20249%20L%20169%20249%20Z%20M%20170%20249%20L%20364%20249%20L%20364%20250%20L%20170%20250%20Z%20M%20172%20250%20L%20365%20250%20L%20365%20251%20L%20172%20251%20Z%20M%20173%20251%20L%20366%20251%20L%20366%20252%20L%20173%20252%20Z%20M%20174%20252%20L%20367%20252%20L%20367%20253%20L%20174%20253%20Z%20M%20175%20253%20L%20367%20253%20L%20367%20254%20L%20175%20254%20Z%20M%20176%20254%20L%20368%20254%20L%20368%20255%20L%20176%20255%20Z%20M%20177%20255%20L%20369%20255%20L%20369%20256%20L%20177%20256%20Z%20M%20179%20256%20L%20370%20256%20L%20370%20257%20L%20179%20257%20Z%20M%20180%20257%20L%20370%20257%20L%20370%20258%20L%20180%20258%20Z%20M%20181%20258%20L%20371%20258%20L%20371%20259%20L%20181%20259%20Z%20M%20183%20259%20L%20372%20259%20L%20372%20260%20L%20183%20260%20Z%20M%20184%20260%20L%20372%20260%20L%20372%20261%20L%20184%20261%20Z%20M%20186%20261%20L%20373%20261%20L%20373%20262%20L%20186%20262%20Z%20M%20187%20262%20L%20374%20262%20L%20374%20263%20L%20187%20263%20Z%20M%20189%20263%20L%20374%20263%20L%20374%20264%20L%20189%20264%20Z%20M%20190%20264%20L%20375%20264%20L%20375%20265%20L%20190%20265%20Z%20M%20192%20265%20L%20376%20265%20L%20376%20266%20L%20192%20266%20Z%20M%20193%20266%20L%20376%20266%20L%20376%20267%20L%20193%20267%20Z%20M%20195%20267%20L%20377%20267%20L%20377%20268%20L%20195%20268%20Z%20M%20196%20268%20L%20378%20268%20L%20378%20269%20L%20196%20269%20Z%20M%20198%20269%20L%20378%20269%20L%20378%20270%20L%20198%20270%20Z%20M%20199%20270%20L%20379%20270%20L%20379%20271%20L%20199%20271%20Z%20M%20201%20271%20L%20379%20271%20L%20379%20272%20L%20201%20272%20Z%20M%20202%20272%20L%20380%20272%20L%20380%20273%20L%20202%20273%20Z%20M%20204%20273%20L%20380%20273%20L%20380%20274%20L%20204%20274%20Z%20M%20206%20274%20L%20381%20274%20L%20381%20275%20L%20206%20275%20Z%20M%20207%20275%20L%20381%20275%20L%20381%20276%20L%20207%20276%20Z%20M%20209%20276%20L%20383%20276%20L%20383%20277%20L%20209%20277%20Z%20M%20211%20277%20L%20383%20277%20L%20383%20278%20L%20211%20278%20Z%20M%20213%20278%20L%20383%20278%20L%20383%20279%20L%20213%20279%20Z%20M%20214%20279%20L%20384%20279%20L%20384%20280%20L%20214%20280%20Z%20M%20217%20280%20L%20385%20280%20L%20385%20281%20L%20217%20281%20Z%20M%20218%20281%20L%20385%20281%20L%20385%20282%20L%20218%20282%20Z%20M%20221%20282%20L%20386%20282%20L%20386%20283%20L%20221%20283%20Z%20M%20222%20283%20L%20387%20283%20L%20387%20284%20L%20222%20284%20Z%20M%20224%20284%20L%20387%20284%20L%20387%20285%20L%20224%20285%20Z%20M%20226%20285%20L%20387%20285%20L%20387%20286%20L%20226%20286%20Z%20M%20228%20286%20L%20388%20286%20L%20388%20287%20L%20228%20287%20Z%20M%20230%20287%20L%20388%20287%20L%20388%20288%20L%20230%20288%20Z%20M%20232%20288%20L%20389%20288%20L%20389%20289%20L%20232%20289%20Z%20M%20235%20289%20L%20390%20289%20L%20390%20290%20L%20235%20290%20Z%20M%20236%20290%20L%20390%20290%20L%20390%20291%20L%20236%20291%20Z%20M%20239%20291%20L%20390%20291%20L%20390%20292%20L%20239%20292%20Z%20M%20240%20292%20L%20391%20292%20L%20391%20293%20L%20240%20293%20Z%20M%20243%20293%20L%20392%20293%20L%20392%20294%20L%20243%20294%20Z%20M%20245%20294%20L%20392%20294%20L%20392%20295%20L%20245%20295%20Z%20M%20247%20295%20L%20392%20295%20L%20392%20296%20L%20247%20296%20Z%20M%20249%20296%20L%20393%20296%20L%20393%20297%20L%20249%20297%20Z%20M%20251%20297%20L%20394%20297%20L%20394%20298%20L%20251%20298%20Z%20M%20253%20298%20L%20394%20298%20L%20394%20299%20L%20253%20299%20Z%20M%20255%20299%20L%20394%20299%20L%20394%20300%20L%20255%20300%20Z%20M%20257%20300%20L%20395%20300%20L%20395%20301%20L%20257%20301%20Z%20M%20259%20301%20L%20395%20301%20L%20395%20302%20L%20259%20302%20Z%20M%20261%20302%20L%20396%20302%20L%20396%20303%20L%20261%20303%20Z%20M%20263%20303%20L%20396%20303%20L%20396%20304%20L%20263%20304%20Z%20M%20265%20304%20L%20397%20304%20L%20397%20305%20L%20265%20305%20Z%20M%20267%20305%20L%20397%20305%20L%20397%20306%20L%20267%20306%20Z%20M%20270%20306%20L%20398%20306%20L%20398%20307%20L%20270%20307%20Z%20M%20272%20307%20L%20398%20307%20L%20398%20308%20L%20272%20308%20Z%20M%20273%20308%20L%20398%20308%20L%20398%20309%20L%20273%20309%20Z%20M%20275%20309%20L%20399%20309%20L%20399%20310%20L%20275%20310%20Z%20M%20277%20310%20L%20399%20310%20L%20399%20311%20L%20277%20311%20Z%20M%20279%20311%20L%20400%20311%20L%20400%20312%20L%20279%20312%20Z%20M%20281%20312%20L%20400%20312%20L%20400%20313%20L%20281%20313%20Z%20M%20283%20313%20L%20400%20313%20L%20400%20314%20L%20283%20314%20Z%20M%20284%20314%20L%20401%20314%20L%20401%20315%20L%20284%20315%20Z%20M%20286%20315%20L%20401%20315%20L%20401%20316%20L%20286%20316%20Z%20M%20288%20316%20L%20401%20316%20L%20401%20317%20L%20288%20317%20Z%20M%20290%20317%20L%20402%20317%20L%20402%20318%20L%20290%20318%20Z%20M%20292%20318%20L%20402%20318%20L%20402%20319%20L%20292%20319%20Z%20M%20293%20319%20L%20403%20319%20L%20403%20320%20L%20293%20320%20Z%20M%20295%20320%20L%20403%20320%20L%20403%20321%20L%20295%20321%20Z%20M%20297%20321%20L%20403%20321%20L%20403%20322%20L%20297%20322%20Z%20M%20299%20322%20L%20404%20322%20L%20404%20323%20L%20299%20323%20Z%20M%20300%20323%20L%20404%20323%20L%20404%20324%20L%20300%20324%20Z%20M%20302%20324%20L%20405%20324%20L%20405%20325%20L%20302%20325%20Z%20M%20303%20325%20L%20405%20325%20L%20405%20326%20L%20303%20326%20Z%20M%20305%20326%20L%20405%20326%20L%20405%20327%20L%20305%20327%20Z%20M%20306%20327%20L%20405%20327%20L%20405%20328%20L%20306%20328%20Z%20M%20308%20328%20L%20406%20328%20L%20406%20329%20L%20308%20329%20Z%20M%20310%20329%20L%20406%20329%20L%20406%20330%20L%20310%20330%20Z%20M%20311%20330%20L%20407%20330%20L%20407%20331%20L%20311%20331%20Z%20M%20313%20331%20L%20407%20331%20L%20407%20332%20L%20313%20332%20Z%20M%20314%20332%20L%20407%20332%20L%20407%20333%20L%20314%20333%20Z%20M%20316%20333%20L%20407%20333%20L%20407%20334%20L%20316%20334%20Z%20M%20317%20334%20L%20408%20334%20L%20408%20335%20L%20317%20335%20Z%20M%20318%20335%20L%20408%20335%20L%20408%20336%20L%20318%20336%20Z%20M%20320%20336%20L%20408%20336%20L%20408%20337%20L%20320%20337%20Z%20M%20321%20337%20L%20408%20337%20L%20408%20338%20L%20321%20338%20Z%20M%20322%20338%20L%20409%20338%20L%20409%20339%20L%20322%20339%20Z%20M%20324%20339%20L%20409%20339%20L%20409%20340%20L%20324%20340%20Z%20M%20325%20340%20L%20409%20340%20L%20409%20341%20L%20325%20341%20Z%20M%20327%20341%20L%20409%20341%20L%20409%20342%20L%20327%20342%20Z%20M%20328%20342%20L%20410%20342%20L%20410%20343%20L%20328%20343%20Z%20M%20329%20343%20L%20410%20343%20L%20410%20344%20L%20329%20344%20Z%20M%20331%20344%20L%20410%20344%20L%20410%20345%20L%20331%20345%20Z%20M%20332%20345%20L%20411%20345%20L%20411%20346%20L%20332%20346%20Z%20M%20333%20346%20L%20411%20346%20L%20411%20347%20L%20333%20347%20Z%20M%20334%20347%20L%20411%20347%20L%20411%20348%20L%20334%20348%20Z%20M%20336%20348%20L%20411%20348%20L%20411%20349%20L%20336%20349%20Z%20M%20337%20349%20L%20412%20349%20L%20412%20350%20L%20337%20350%20Z%20M%20338%20350%20L%20412%20350%20L%20412%20351%20L%20338%20351%20Z%20M%20339%20351%20L%20412%20351%20L%20412%20352%20L%20339%20352%20Z%20M%20340%20352%20L%20412%20352%20L%20412%20353%20L%20340%20353%20Z%20M%20342%20353%20L%20412%20353%20L%20412%20354%20L%20342%20354%20Z%20M%20343%20354%20L%20413%20354%20L%20413%20355%20L%20343%20355%20Z%20M%20344%20355%20L%20413%20355%20L%20413%20356%20L%20344%20356%20Z%20M%20345%20356%20L%20413%20356%20L%20413%20357%20L%20345%20357%20Z%20M%20346%20357%20L%20413%20357%20L%20413%20358%20L%20346%20358%20Z%20M%20347%20358%20L%20414%20358%20L%20414%20359%20L%20347%20359%20Z%20M%20348%20359%20L%20414%20359%20L%20414%20360%20L%20348%20360%20Z%20M%20349%20360%20L%20414%20360%20L%20414%20361%20L%20349%20361%20Z%20M%20350%20361%20L%20414%20361%20L%20414%20362%20L%20350%20362%20Z%20M%20351%20362%20L%20414%20362%20L%20414%20363%20L%20351%20363%20Z%20M%20352%20363%20L%20414%20363%20L%20414%20364%20L%20352%20364%20Z%20M%20353%20364%20L%20415%20364%20L%20415%20365%20L%20353%20365%20Z%20M%20354%20365%20L%20415%20365%20L%20415%20366%20L%20354%20366%20Z%20M%20355%20366%20L%20415%20366%20L%20415%20367%20L%20355%20367%20Z%20M%20356%20367%20L%20415%20367%20L%20415%20368%20L%20356%20368%20Z%20M%20357%20368%20L%20416%20368%20L%20416%20369%20L%20357%20369%20Z%20M%20358%20369%20L%20416%20369%20L%20416%20370%20L%20358%20370%20Z%20M%20359%20370%20L%20416%20370%20L%20416%20371%20L%20359%20371%20Z%20M%20360%20371%20L%20416%20371%20L%20416%20372%20L%20360%20372%20Z%20M%20361%20372%20L%20416%20372%20L%20416%20373%20L%20361%20373%20Z%20M%20362%20373%20L%20416%20373%20L%20416%20374%20L%20362%20374%20Z%20M%20363%20374%20L%20416%20374%20L%20416%20375%20L%20363%20375%20Z%20M%20363%20375%20L%20416%20375%20L%20416%20376%20L%20363%20376%20Z%20M%20364%20376%20L%20417%20376%20L%20417%20377%20L%20364%20377%20Z%20M%20365%20377%20L%20417%20377%20L%20417%20378%20L%20365%20378%20Z%20M%20366%20378%20L%20417%20378%20L%20417%20379%20L%20366%20379%20Z%20M%20367%20379%20L%20417%20379%20L%20417%20380%20L%20367%20380%20Z%20M%20368%20380%20L%20417%20380%20L%20417%20381%20L%20368%20381%20Z%20M%20369%20381%20L%20418%20381%20L%20418%20382%20L%20369%20382%20Z%20M%20369%20382%20L%20418%20382%20L%20418%20383%20L%20369%20383%20Z%20M%20370%20383%20L%20418%20383%20L%20418%20384%20L%20370%20384%20Z%20M%20371%20384%20L%20418%20384%20L%20418%20385%20L%20371%20385%20Z%20M%20372%20385%20L%20418%20385%20L%20418%20386%20L%20372%20386%20Z%20M%20373%20386%20L%20418%20386%20L%20418%20387%20L%20373%20387%20Z%20M%20373%20387%20L%20418%20387%20L%20418%20388%20L%20373%20388%20Z%20M%20374%20388%20L%20418%20388%20L%20418%20389%20L%20374%20389%20Z%20M%20375%20389%20L%20418%20389%20L%20418%20390%20L%20375%20390%20Z%20M%20375%20390%20L%20418%20390%20L%20418%20391%20L%20375%20391%20Z%20M%20376%20391%20L%20418%20391%20L%20418%20392%20L%20376%20392%20Z%20M%20377%20392%20L%20419%20392%20L%20419%20393%20L%20377%20393%20Z%20M%20377%20393%20L%20419%20393%20L%20419%20394%20L%20377%20394%20Z%20M%20378%20394%20L%20419%20394%20L%20419%20395%20L%20378%20395%20Z%20M%20379%20395%20L%20419%20395%20L%20419%20396%20L%20379%20396%20Z%20M%20380%20396%20L%20419%20396%20L%20419%20397%20L%20380%20397%20Z%20M%20380%20397%20L%20419%20397%20L%20419%20398%20L%20380%20398%20Z%20M%20381%20398%20L%20419%20398%20L%20419%20399%20L%20381%20399%20Z%20M%20382%20399%20L%20419%20399%20L%20419%20400%20L%20382%20400%20Z%20M%20382%20400%20L%20419%20400%20L%20419%20401%20L%20382%20401%20Z%20M%20383%20401%20L%20419%20401%20L%20419%20402%20L%20383%20402%20Z%20M%20384%20402%20L%20419%20402%20L%20419%20403%20L%20384%20403%20Z%20M%20384%20403%20L%20419%20403%20L%20419%20404%20L%20384%20404%20Z%20M%20385%20404%20L%20420%20404%20L%20420%20405%20L%20385%20405%20Z%20M%20386%20405%20L%20420%20405%20L%20420%20406%20L%20386%20406%20Z%20M%20386%20406%20L%20420%20406%20L%20420%20407%20L%20386%20407%20Z%20M%20387%20407%20L%20420%20407%20L%20420%20408%20L%20387%20408%20Z%20M%20388%20408%20L%20420%20408%20L%20420%20409%20L%20388%20409%20Z%20M%20388%20409%20L%20420%20409%20L%20420%20410%20L%20388%20410%20Z%20M%20389%20410%20L%20420%20410%20L%20420%20411%20L%20389%20411%20Z%20M%20389%20411%20L%20420%20411%20L%20420%20412%20L%20389%20412%20Z%20M%20390%20412%20L%20420%20412%20L%20420%20413%20L%20390%20413%20Z%20M%20390%20413%20L%20420%20413%20L%20420%20414%20L%20390%20414%20Z%20M%20391%20414%20L%20420%20414%20L%20420%20415%20L%20391%20415%20Z%20M%20392%20415%20L%20420%20415%20L%20420%20416%20L%20392%20416%20Z%20M%20392%20416%20L%20420%20416%20L%20420%20417%20L%20392%20417%20Z%20M%20393%20417%20L%20420%20417%20L%20420%20418%20L%20393%20418%20Z%20M%20393%20418%20L%20420%20418%20L%20420%20419%20L%20393%20419%20Z%20M%20394%20419%20L%20420%20419%20L%20420%20420%20L%20394%20420%20Z%20M%20394%20420%20L%20420%20420%20L%20420%20421%20L%20394%20421%20Z%20M%20395%20421%20L%20420%20421%20L%20420%20422%20L%20395%20422%20Z%20M%20395%20422%20L%20420%20422%20L%20420%20423%20L%20395%20423%20Z%20M%20396%20423%20L%20420%20423%20L%20420%20424%20L%20396%20424%20Z%20M%20396%20424%20L%20420%20424%20L%20420%20425%20L%20396%20425%20Z%20M%20397%20425%20L%20420%20425%20L%20420%20426%20L%20397%20426%20Z%20M%20397%20426%20L%20420%20426%20L%20420%20427%20L%20397%20427%20Z%20M%20398%20427%20L%20420%20427%20L%20420%20428%20L%20398%20428%20Z%20M%20399%20428%20L%20420%20428%20L%20420%20429%20L%20399%20429%20Z%20M%20399%20429%20L%20420%20429%20L%20420%20430%20L%20399%20430%20Z%20M%20399%20430%20L%20420%20430%20L%20420%20431%20L%20399%20431%20Z%20M%20400%20431%20L%20420%20431%20L%20420%20432%20L%20400%20432%20Z%20M%20400%20432%20L%20420%20432%20L%20420%20433%20L%20400%20433%20Z%20M%20401%20433%20L%20420%20433%20L%20420%20434%20L%20401%20434%20Z%20M%20401%20434%20L%20420%20434%20L%20420%20435%20L%20401%20435%20Z%20M%20402%20435%20L%20420%20435%20L%20420%20436%20L%20402%20436%20Z%20M%20402%20436%20L%20420%20436%20L%20420%20437%20L%20402%20437%20Z%20M%20402%20437%20L%20420%20437%20L%20420%20438%20L%20402%20438%20Z%20M%20403%20438%20L%20420%20438%20L%20420%20439%20L%20403%20439%20Z%20M%20403%20439%20L%20420%20439%20L%20420%20440%20L%20403%20440%20Z%20M%20404%20440%20L%20420%20440%20L%20420%20441%20L%20404%20441%20Z%20M%20404%20441%20L%20420%20441%20L%20420%20442%20L%20404%20442%20Z%20M%20405%20442%20L%20420%20442%20L%20420%20443%20L%20405%20443%20Z%20M%20405%20443%20L%20420%20443%20L%20420%20444%20L%20405%20444%20Z%20M%20405%20444%20L%20420%20444%20L%20420%20445%20L%20405%20445%20Z%20M%20406%20445%20L%20420%20445%20L%20420%20446%20L%20406%20446%20Z%20M%20406%20446%20L%20420%20446%20L%20420%20447%20L%20406%20447%20Z%20M%20407%20447%20L%20420%20447%20L%20420%20448%20L%20407%20448%20Z%20M%20407%20448%20L%20420%20448%20L%20420%20449%20L%20407%20449%20Z%20M%20408%20449%20L%20420%20449%20L%20420%20450%20L%20408%20450%20Z%20M%20408%20450%20L%20420%20450%20L%20420%20451%20L%20408%20451%20Z%20M%20408%20451%20L%20420%20451%20L%20420%20452%20L%20408%20452%20Z%20M%20409%20452%20L%20420%20452%20L%20420%20453%20L%20409%20453%20Z%20M%20409%20453%20L%20420%20453%20L%20420%20454%20L%20409%20454%20Z%20M%20409%20454%20L%20420%20454%20L%20420%20455%20L%20409%20455%20Z%20M%20410%20455%20L%20420%20455%20L%20420%20456%20L%20410%20456%20Z%20M%20410%20456%20L%20420%20456%20L%20420%20457%20L%20410%20457%20Z%20M%20410%20457%20L%20420%20457%20L%20420%20458%20L%20410%20458%20Z%20M%20411%20458%20L%20420%20458%20L%20420%20459%20L%20411%20459%20Z%20M%20411%20459%20L%20419%20459%20L%20419%20460%20L%20411%20460%20Z%20M%20412%20460%20L%20419%20460%20L%20419%20461%20L%20412%20461%20Z%20M%20412%20461%20L%20419%20461%20L%20419%20462%20L%20412%20462%20Z%20M%20412%20462%20L%20419%20462%20L%20419%20463%20L%20412%20463%20Z%20M%20412%20463%20L%20419%20463%20L%20419%20464%20L%20412%20464%20Z%20M%20413%20464%20L%20419%20464%20L%20419%20465%20L%20413%20465%20Z%20M%20413%20465%20L%20419%20465%20L%20419%20466%20L%20413%20466%20Z%20M%20413%20466%20L%20419%20466%20L%20419%20467%20L%20413%20467%20Z%20M%20414%20467%20L%20419%20467%20L%20419%20468%20L%20414%20468%20Z%20M%20414%20468%20L%20419%20468%20L%20419%20469%20L%20414%20469%20Z%20M%20414%20469%20L%20419%20469%20L%20419%20470%20L%20414%20470%20Z%20M%20415%20470%20L%20419%20470%20L%20419%20471%20L%20415%20471%20Z%20M%20415%20471%20L%20419%20471%20L%20419%20472%20L%20415%20472%20Z%20M%20415%20472%20L%20419%20472%20L%20419%20473%20L%20415%20473%20Z%20M%20415%20473%20L%20418%20473%20L%20418%20474%20L%20415%20474%20Z%20M%20415%20474%20L%20418%20474%20L%20418%20475%20L%20415%20475%20Z%20M%20416%20475%20L%20418%20475%20L%20418%20476%20L%20416%20476%20Z%20M%20416%20476%20L%20418%20476%20L%20418%20477%20L%20416%20477%20Z%20M%20416%20477%20L%20418%20477%20L%20418%20478%20L%20416%20478%20Z%20M%20417%20478%20L%20418%20478%20L%20418%20479%20L%20417%20479%20Z%22%20fill%3D%22rgb%28101%2C31%2C199%29%22%2F%3E%0D%0A%20%20%3Cpath%20d%3D%22M%20463%20307%20L%20476%20307%20L%20476%20308%20L%20463%20308%20Z%20M%20461%20308%20L%20478%20308%20L%20478%20309%20L%20461%20309%20Z%20M%20457%20309%20L%20482%20309%20L%20482%20310%20L%20457%20310%20Z%20M%20456%20310%20L%20483%20310%20L%20483%20311%20L%20456%20311%20Z%20M%20454%20311%20L%20485%20311%20L%20485%20312%20L%20454%20312%20Z%20M%20453%20312%20L%20486%20312%20L%20486%20313%20L%20453%20313%20Z%20M%20451%20313%20L%20488%20313%20L%20488%20314%20L%20451%20314%20Z%20M%20450%20314%20L%20489%20314%20L%20489%20315%20L%20450%20315%20Z%20M%20449%20315%20L%20490%20315%20L%20490%20316%20L%20449%20316%20Z%20M%20448%20316%20L%20491%20316%20L%20491%20317%20L%20448%20317%20Z%20M%20448%20317%20L%20491%20317%20L%20491%20318%20L%20448%20318%20Z%20M%20447%20318%20L%20492%20318%20L%20492%20319%20L%20447%20319%20Z%20M%20446%20319%20L%20493%20319%20L%20493%20320%20L%20446%20320%20Z%20M%20445%20320%20L%20493%20320%20L%20493%20321%20L%20445%20321%20Z%20M%20445%20321%20L%20494%20321%20L%20494%20322%20L%20445%20322%20Z%20M%20444%20322%20L%20495%20322%20L%20495%20323%20L%20444%20323%20Z%20M%20444%20323%20L%20495%20323%20L%20495%20324%20L%20444%20324%20Z%20M%20443%20324%20L%20495%20324%20L%20495%20325%20L%20443%20325%20Z%20M%20443%20325%20L%20496%20325%20L%20496%20326%20L%20443%20326%20Z%20M%20443%20326%20L%20496%20326%20L%20496%20327%20L%20443%20327%20Z%20M%20442%20327%20L%20497%20327%20L%20497%20328%20L%20442%20328%20Z%20M%20442%20328%20L%20497%20328%20L%20497%20329%20L%20442%20329%20Z%20M%20442%20329%20L%20497%20329%20L%20497%20330%20L%20442%20330%20Z%20M%20442%20330%20L%20497%20330%20L%20497%20331%20L%20442%20331%20Z%20M%20441%20331%20L%20497%20331%20L%20497%20332%20L%20441%20332%20Z%20M%20441%20332%20L%20497%20332%20L%20497%20333%20L%20441%20333%20Z%20M%20441%20333%20L%20497%20333%20L%20497%20334%20L%20441%20334%20Z%20M%20441%20334%20L%20497%20334%20L%20497%20335%20L%20441%20335%20Z%20M%20441%20335%20L%20497%20335%20L%20497%20336%20L%20441%20336%20Z%20M%20441%20336%20L%20497%20336%20L%20497%20337%20L%20441%20337%20Z%20M%20441%20337%20L%20497%20337%20L%20497%20338%20L%20441%20338%20Z%20M%20441%20338%20L%20497%20338%20L%20497%20339%20L%20441%20339%20Z%20M%20442%20339%20L%20497%20339%20L%20497%20340%20L%20442%20340%20Z%20M%20442%20340%20L%20497%20340%20L%20497%20341%20L%20442%20341%20Z%20M%20442%20341%20L%20497%20341%20L%20497%20342%20L%20442%20342%20Z%20M%20442%20342%20L%20497%20342%20L%20497%20343%20L%20442%20343%20Z%20M%20443%20343%20L%20496%20343%20L%20496%20344%20L%20443%20344%20Z%20M%20443%20344%20L%20496%20344%20L%20496%20345%20L%20443%20345%20Z%20M%20443%20345%20L%20495%20345%20L%20495%20346%20L%20443%20346%20Z%20M%20444%20346%20L%20495%20346%20L%20495%20347%20L%20444%20347%20Z%20M%20444%20347%20L%20495%20347%20L%20495%20348%20L%20444%20348%20Z%20M%20445%20348%20L%20494%20348%20L%20494%20349%20L%20445%20349%20Z%20M%20445%20349%20L%20493%20349%20L%20493%20350%20L%20445%20350%20Z%20M%20446%20350%20L%20493%20350%20L%20493%20351%20L%20446%20351%20Z%20M%20447%20351%20L%20492%20351%20L%20492%20352%20L%20447%20352%20Z%20M%20447%20352%20L%20491%20352%20L%20491%20353%20L%20447%20353%20Z%20M%20448%20353%20L%20490%20353%20L%20490%20354%20L%20448%20354%20Z%20M%20449%20354%20L%20490%20354%20L%20490%20355%20L%20449%20355%20Z%20M%20450%20355%20L%20489%20355%20L%20489%20356%20L%20450%20356%20Z%20M%20451%20356%20L%20488%20356%20L%20488%20357%20L%20451%20357%20Z%20M%20452%20357%20L%20486%20357%20L%20486%20358%20L%20452%20358%20Z%20M%20454%20358%20L%20485%20358%20L%20485%20359%20L%20454%20359%20Z%20M%20455%20359%20L%20483%20359%20L%20483%20360%20L%20455%20360%20Z%20M%20457%20360%20L%20482%20360%20L%20482%20361%20L%20457%20361%20Z%20M%20460%20361%20L%20479%20361%20L%20479%20362%20L%20460%20362%20Z%20M%20463%20362%20L%20476%20362%20L%20476%20363%20L%20463%20363%20Z%22%20fill%3D%22rgb%28101%2C28%2C200%29%22%2F%3E%0D%0A%20%20%3Cpath%20d%3D%22M%20469%20378%20L%20470%20378%20L%20470%20379%20L%20469%20379%20Z%20M%20467%20379%20L%20471%20379%20L%20471%20380%20L%20467%20380%20Z%20M%20466%20380%20L%20472%20380%20L%20472%20381%20L%20466%20381%20Z%20M%20466%20381%20L%20473%20381%20L%20473%20382%20L%20466%20382%20Z%20M%20465%20382%20L%20474%20382%20L%20474%20383%20L%20465%20383%20Z%20M%20464%20383%20L%20475%20383%20L%20475%20384%20L%20464%20384%20Z%20M%20463%20384%20L%20475%20384%20L%20475%20385%20L%20463%20385%20Z%20M%20463%20385%20L%20476%20385%20L%20476%20386%20L%20463%20386%20Z%20M%20462%20386%20L%20477%20386%20L%20477%20387%20L%20462%20387%20Z%20M%20462%20387%20L%20477%20387%20L%20477%20388%20L%20462%20388%20Z%20M%20461%20388%20L%20478%20388%20L%20478%20389%20L%20461%20389%20Z%20M%20461%20389%20L%20478%20389%20L%20478%20390%20L%20461%20390%20Z%20M%20460%20390%20L%20479%20390%20L%20479%20391%20L%20460%20391%20Z%20M%20460%20391%20L%20479%20391%20L%20479%20392%20L%20460%20392%20Z%20M%20459%20392%20L%20480%20392%20L%20480%20393%20L%20459%20393%20Z%20M%20458%20393%20L%20480%20393%20L%20480%20394%20L%20458%20394%20Z%20M%20458%20394%20L%20480%20394%20L%20480%20395%20L%20458%20395%20Z%20M%20458%20395%20L%20481%20395%20L%20481%20396%20L%20458%20396%20Z%20M%20457%20396%20L%20481%20396%20L%20481%20397%20L%20457%20397%20Z%20M%20457%20397%20L%20482%20397%20L%20482%20398%20L%20457%20398%20Z%20M%20456%20398%20L%20482%20398%20L%20482%20399%20L%20456%20399%20Z%20M%20456%20399%20L%20483%20399%20L%20483%20400%20L%20456%20400%20Z%20M%20456%20400%20L%20483%20400%20L%20483%20401%20L%20456%20401%20Z%20M%20455%20401%20L%20484%20401%20L%20484%20402%20L%20455%20402%20Z%20M%20455%20402%20L%20484%20402%20L%20484%20403%20L%20455%20403%20Z%20M%20454%20403%20L%20484%20403%20L%20484%20404%20L%20454%20404%20Z%20M%20454%20404%20L%20484%20404%20L%20484%20405%20L%20454%20405%20Z%20M%20454%20405%20L%20484%20405%20L%20484%20406%20L%20454%20406%20Z%20M%20454%20406%20L%20485%20406%20L%20485%20407%20L%20454%20407%20Z%20M%20454%20407%20L%20485%20407%20L%20485%20408%20L%20454%20408%20Z%20M%20453%20408%20L%20486%20408%20L%20486%20409%20L%20453%20409%20Z%20M%20453%20409%20L%20486%20409%20L%20486%20410%20L%20453%20410%20Z%20M%20453%20410%20L%20486%20410%20L%20486%20411%20L%20453%20411%20Z%20M%20452%20411%20L%20486%20411%20L%20486%20412%20L%20452%20412%20Z%20M%20452%20412%20L%20487%20412%20L%20487%20413%20L%20452%20413%20Z%20M%20452%20413%20L%20487%20413%20L%20487%20414%20L%20452%20414%20Z%20M%20452%20414%20L%20487%20414%20L%20487%20415%20L%20452%20415%20Z%20M%20451%20415%20L%20487%20415%20L%20487%20416%20L%20451%20416%20Z%20M%20451%20416%20L%20488%20416%20L%20488%20417%20L%20451%20417%20Z%20M%20451%20417%20L%20488%20417%20L%20488%20418%20L%20451%20418%20Z%20M%20451%20418%20L%20488%20418%20L%20488%20419%20L%20451%20419%20Z%20M%20451%20419%20L%20488%20419%20L%20488%20420%20L%20451%20420%20Z%20M%20450%20420%20L%20488%20420%20L%20488%20421%20L%20450%20421%20Z%20M%20450%20421%20L%20489%20421%20L%20489%20422%20L%20450%20422%20Z%20M%20450%20422%20L%20489%20422%20L%20489%20423%20L%20450%20423%20Z%20M%20450%20423%20L%20489%20423%20L%20489%20424%20L%20450%20424%20Z%20M%20450%20424%20L%20489%20424%20L%20489%20425%20L%20450%20425%20Z%20M%20450%20425%20L%20490%20425%20L%20490%20426%20L%20450%20426%20Z%20M%20449%20426%20L%20490%20426%20L%20490%20427%20L%20449%20427%20Z%20M%20449%20427%20L%20490%20427%20L%20490%20428%20L%20449%20428%20Z%20M%20449%20428%20L%20490%20428%20L%20490%20429%20L%20449%20429%20Z%20M%20449%20429%20L%20490%20429%20L%20490%20430%20L%20449%20430%20Z%20M%20448%20430%20L%20490%20430%20L%20490%20431%20L%20448%20431%20Z%20M%20448%20431%20L%20490%20431%20L%20490%20432%20L%20448%20432%20Z%20M%20448%20432%20L%20490%20432%20L%20490%20433%20L%20448%20433%20Z%20M%20448%20433%20L%20490%20433%20L%20490%20434%20L%20448%20434%20Z%20M%20448%20434%20L%20491%20434%20L%20491%20435%20L%20448%20435%20Z%20M%20448%20435%20L%20491%20435%20L%20491%20436%20L%20448%20436%20Z%20M%20448%20436%20L%20491%20436%20L%20491%20437%20L%20448%20437%20Z%20M%20448%20437%20L%20491%20437%20L%20491%20438%20L%20448%20438%20Z%20M%20448%20438%20L%20491%20438%20L%20491%20439%20L%20448%20439%20Z%20M%20448%20439%20L%20491%20439%20L%20491%20440%20L%20448%20440%20Z%20M%20447%20440%20L%20491%20440%20L%20491%20441%20L%20447%20441%20Z%20M%20447%20441%20L%20491%20441%20L%20491%20442%20L%20447%20442%20Z%20M%20447%20442%20L%20491%20442%20L%20491%20443%20L%20447%20443%20Z%20M%20447%20443%20L%20491%20443%20L%20491%20444%20L%20447%20444%20Z%20M%20447%20444%20L%20492%20444%20L%20492%20445%20L%20447%20445%20Z%20M%20447%20445%20L%20492%20445%20L%20492%20446%20L%20447%20446%20Z%20M%20447%20446%20L%20492%20446%20L%20492%20447%20L%20447%20447%20Z%20M%20447%20447%20L%20492%20447%20L%20492%20448%20L%20447%20448%20Z%20M%20447%20448%20L%20492%20448%20L%20492%20449%20L%20447%20449%20Z%20M%20447%20449%20L%20492%20449%20L%20492%20450%20L%20447%20450%20Z%20M%20447%20450%20L%20492%20450%20L%20492%20451%20L%20447%20451%20Z%20M%20447%20451%20L%20492%20451%20L%20492%20452%20L%20447%20452%20Z%20M%20447%20452%20L%20492%20452%20L%20492%20453%20L%20447%20453%20Z%20M%20447%20453%20L%20492%20453%20L%20492%20454%20L%20447%20454%20Z%20M%20447%20454%20L%20492%20454%20L%20492%20455%20L%20447%20455%20Z%20M%20447%20455%20L%20492%20455%20L%20492%20456%20L%20447%20456%20Z%20M%20447%20456%20L%20492%20456%20L%20492%20457%20L%20447%20457%20Z%20M%20447%20457%20L%20492%20457%20L%20492%20458%20L%20447%20458%20Z%20M%20447%20458%20L%20492%20458%20L%20492%20459%20L%20447%20459%20Z%20M%20447%20459%20L%20492%20459%20L%20492%20460%20L%20447%20460%20Z%20M%20447%20460%20L%20492%20460%20L%20492%20461%20L%20447%20461%20Z%20M%20447%20461%20L%20492%20461%20L%20492%20462%20L%20447%20462%20Z%20M%20447%20462%20L%20492%20462%20L%20492%20463%20L%20447%20463%20Z%20M%20447%20463%20L%20492%20463%20L%20492%20464%20L%20447%20464%20Z%20M%20447%20464%20L%20492%20464%20L%20492%20465%20L%20447%20465%20Z%20M%20447%20465%20L%20492%20465%20L%20492%20466%20L%20447%20466%20Z%20M%20447%20466%20L%20492%20466%20L%20492%20467%20L%20447%20467%20Z%20M%20447%20467%20L%20492%20467%20L%20492%20468%20L%20447%20468%20Z%20M%20447%20468%20L%20492%20468%20L%20492%20469%20L%20447%20469%20Z%20M%20447%20469%20L%20492%20469%20L%20492%20470%20L%20447%20470%20Z%20M%20447%20470%20L%20492%20470%20L%20492%20471%20L%20447%20471%20Z%20M%20447%20471%20L%20492%20471%20L%20492%20472%20L%20447%20472%20Z%20M%20447%20472%20L%20492%20472%20L%20492%20473%20L%20447%20473%20Z%20M%20447%20473%20L%20492%20473%20L%20492%20474%20L%20447%20474%20Z%20M%20447%20474%20L%20492%20474%20L%20492%20475%20L%20447%20475%20Z%20M%20447%20475%20L%20492%20475%20L%20492%20476%20L%20447%20476%20Z%20M%20447%20476%20L%20492%20476%20L%20492%20477%20L%20447%20477%20Z%20M%20447%20477%20L%20492%20477%20L%20492%20478%20L%20447%20478%20Z%20M%20447%20478%20L%20492%20478%20L%20492%20479%20L%20447%20479%20Z%20M%20447%20479%20L%20492%20479%20L%20492%20480%20L%20447%20480%20Z%20M%20447%20480%20L%20492%20480%20L%20492%20481%20L%20447%20481%20Z%20M%20447%20481%20L%20492%20481%20L%20492%20482%20L%20447%20482%20Z%20M%20447%20482%20L%20492%20482%20L%20492%20483%20L%20447%20483%20Z%20M%20447%20483%20L%20491%20483%20L%20491%20484%20L%20447%20484%20Z%20M%20447%20484%20L%20491%20484%20L%20491%20485%20L%20447%20485%20Z%20M%20447%20485%20L%20491%20485%20L%20491%20486%20L%20447%20486%20Z%20M%20448%20486%20L%20491%20486%20L%20491%20487%20L%20448%20487%20Z%20M%20448%20487%20L%20491%20487%20L%20491%20488%20L%20448%20488%20Z%20M%20448%20488%20L%20491%20488%20L%20491%20489%20L%20448%20489%20Z%20M%20448%20489%20L%20491%20489%20L%20491%20490%20L%20448%20490%20Z%20M%20448%20490%20L%20491%20490%20L%20491%20491%20L%20448%20491%20Z%20M%20448%20491%20L%20491%20491%20L%20491%20492%20L%20448%20492%20Z%20M%20448%20492%20L%20491%20492%20L%20491%20493%20L%20448%20493%20Z%20M%20448%20493%20L%20491%20493%20L%20491%20494%20L%20448%20494%20Z%20M%20448%20494%20L%20490%20494%20L%20490%20495%20L%20448%20495%20Z%20M%20448%20495%20L%20490%20495%20L%20490%20496%20L%20448%20496%20Z%20M%20448%20496%20L%20490%20496%20L%20490%20497%20L%20448%20497%20Z%20M%20448%20497%20L%20490%20497%20L%20490%20498%20L%20448%20498%20Z%20M%20448%20498%20L%20490%20498%20L%20490%20499%20L%20448%20499%20Z%20M%20448%20499%20L%20490%20499%20L%20490%20500%20L%20448%20500%20Z%20M%20448%20500%20L%20490%20500%20L%20490%20501%20L%20448%20501%20Z%20M%20448%20501%20L%20490%20501%20L%20490%20502%20L%20448%20502%20Z%20M%20448%20502%20L%20490%20502%20L%20490%20503%20L%20448%20503%20Z%20M%20449%20503%20L%20490%20503%20L%20490%20504%20L%20449%20504%20Z%20M%20449%20504%20L%20490%20504%20L%20490%20505%20L%20449%20505%20Z%20M%20449%20505%20L%20490%20505%20L%20490%20506%20L%20449%20506%20Z%20M%20449%20506%20L%20490%20506%20L%20490%20507%20L%20449%20507%20Z%20M%20449%20507%20L%20490%20507%20L%20490%20508%20L%20449%20508%20Z%20M%20450%20508%20L%20490%20508%20L%20490%20509%20L%20450%20509%20Z%20M%20450%20509%20L%20489%20509%20L%20489%20510%20L%20450%20510%20Z%20M%20450%20510%20L%20489%20510%20L%20489%20511%20L%20450%20511%20Z%20M%20450%20511%20L%20489%20511%20L%20489%20512%20L%20450%20512%20Z%20M%20450%20512%20L%20489%20512%20L%20489%20513%20L%20450%20513%20Z%20M%20450%20513%20L%20489%20513%20L%20489%20514%20L%20450%20514%20Z%20M%20450%20514%20L%20489%20514%20L%20489%20515%20L%20450%20515%20Z%20M%20450%20515%20L%20489%20515%20L%20489%20516%20L%20450%20516%20Z%20M%20450%20516%20L%20488%20516%20L%20488%20517%20L%20450%20517%20Z%20M%20450%20517%20L%20488%20517%20L%20488%20518%20L%20450%20518%20Z%20M%20451%20518%20L%20488%20518%20L%20488%20519%20L%20451%20519%20Z%20M%20451%20519%20L%20488%20519%20L%20488%20520%20L%20451%20520%20Z%20M%20451%20520%20L%20488%20520%20L%20488%20521%20L%20451%20521%20Z%20M%20451%20521%20L%20488%20521%20L%20488%20522%20L%20451%20522%20Z%20M%20451%20522%20L%20488%20522%20L%20488%20523%20L%20451%20523%20Z%20M%20451%20523%20L%20488%20523%20L%20488%20524%20L%20451%20524%20Z%20M%20451%20524%20L%20488%20524%20L%20488%20525%20L%20451%20525%20Z%20M%20452%20525%20L%20487%20525%20L%20487%20526%20L%20452%20526%20Z%20M%20452%20526%20L%20487%20526%20L%20487%20527%20L%20452%20527%20Z%20M%20452%20527%20L%20487%20527%20L%20487%20528%20L%20452%20528%20Z%20M%20452%20528%20L%20487%20528%20L%20487%20529%20L%20452%20529%20Z%20M%20452%20529%20L%20487%20529%20L%20487%20530%20L%20452%20530%20Z%20M%20452%20530%20L%20487%20530%20L%20487%20531%20L%20452%20531%20Z%20M%20452%20531%20L%20487%20531%20L%20487%20532%20L%20452%20532%20Z%20M%20452%20532%20L%20487%20532%20L%20487%20533%20L%20452%20533%20Z%20M%20452%20533%20L%20486%20533%20L%20486%20534%20L%20452%20534%20Z%20M%20452%20534%20L%20486%20534%20L%20486%20535%20L%20452%20535%20Z%20M%20453%20535%20L%20486%20535%20L%20486%20536%20L%20453%20536%20Z%20M%20453%20536%20L%20486%20536%20L%20486%20537%20L%20453%20537%20Z%20M%20453%20537%20L%20486%20537%20L%20486%20538%20L%20453%20538%20Z%20M%20453%20538%20L%20486%20538%20L%20486%20539%20L%20453%20539%20Z%20M%20453%20539%20L%20486%20539%20L%20486%20540%20L%20453%20540%20Z%20M%20453%20540%20L%20486%20540%20L%20486%20541%20L%20453%20541%20Z%20M%20454%20541%20L%20486%20541%20L%20486%20542%20L%20454%20542%20Z%20M%20454%20542%20L%20485%20542%20L%20485%20543%20L%20454%20543%20Z%20M%20454%20543%20L%20485%20543%20L%20485%20544%20L%20454%20544%20Z%20M%20454%20544%20L%20485%20544%20L%20485%20545%20L%20454%20545%20Z%20M%20454%20545%20L%20485%20545%20L%20485%20546%20L%20454%20546%20Z%20M%20454%20546%20L%20485%20546%20L%20485%20547%20L%20454%20547%20Z%20M%20454%20547%20L%20485%20547%20L%20485%20548%20L%20454%20548%20Z%20M%20454%20548%20L%20484%20548%20L%20484%20549%20L%20454%20549%20Z%20M%20454%20549%20L%20484%20549%20L%20484%20550%20L%20454%20550%20Z%20M%20454%20550%20L%20484%20550%20L%20484%20551%20L%20454%20551%20Z%20M%20455%20551%20L%20484%20551%20L%20484%20552%20L%20455%20552%20Z%20M%20455%20552%20L%20484%20552%20L%20484%20553%20L%20455%20553%20Z%20M%20455%20553%20L%20484%20553%20L%20484%20554%20L%20455%20554%20Z%20M%20455%20554%20L%20484%20554%20L%20484%20555%20L%20455%20555%20Z%20M%20455%20555%20L%20484%20555%20L%20484%20556%20L%20455%20556%20Z%20M%20455%20556%20L%20484%20556%20L%20484%20557%20L%20455%20557%20Z%20M%20456%20557%20L%20483%20557%20L%20483%20558%20L%20456%20558%20Z%20M%20456%20558%20L%20483%20558%20L%20483%20559%20L%20456%20559%20Z%20M%20456%20559%20L%20483%20559%20L%20483%20560%20L%20456%20560%20Z%20M%20456%20560%20L%20483%20560%20L%20483%20561%20L%20456%20561%20Z%20M%20456%20561%20L%20483%20561%20L%20483%20562%20L%20456%20562%20Z%20M%20456%20562%20L%20482%20562%20L%20482%20563%20L%20456%20563%20Z%20M%20456%20563%20L%20482%20563%20L%20482%20564%20L%20456%20564%20Z%20M%20456%20564%20L%20482%20564%20L%20482%20565%20L%20456%20565%20Z%20M%20457%20565%20L%20482%20565%20L%20482%20566%20L%20457%20566%20Z%20M%20457%20566%20L%20482%20566%20L%20482%20567%20L%20457%20567%20Z%20M%20457%20567%20L%20482%20567%20L%20482%20568%20L%20457%20568%20Z%20M%20457%20568%20L%20482%20568%20L%20482%20569%20L%20457%20569%20Z%20M%20457%20569%20L%20482%20569%20L%20482%20570%20L%20457%20570%20Z%20M%20457%20570%20L%20481%20570%20L%20481%20571%20L%20457%20571%20Z%20M%20457%20571%20L%20481%20571%20L%20481%20572%20L%20457%20572%20Z%20M%20458%20572%20L%20481%20572%20L%20481%20573%20L%20458%20573%20Z%20M%20458%20573%20L%20481%20573%20L%20481%20574%20L%20458%20574%20Z%20M%20458%20574%20L%20481%20574%20L%20481%20575%20L%20458%20575%20Z%20M%20458%20575%20L%20480%20575%20L%20480%20576%20L%20458%20576%20Z%20M%20458%20576%20L%20480%20576%20L%20480%20577%20L%20458%20577%20Z%20M%20458%20577%20L%20480%20577%20L%20480%20578%20L%20458%20578%20Z%20M%20458%20578%20L%20480%20578%20L%20480%20579%20L%20458%20579%20Z%20M%20459%20579%20L%20480%20579%20L%20480%20580%20L%20459%20580%20Z%20M%20459%20580%20L%20480%20580%20L%20480%20581%20L%20459%20581%20Z%20M%20459%20581%20L%20480%20581%20L%20480%20582%20L%20459%20582%20Z%20M%20459%20582%20L%20480%20582%20L%20480%20583%20L%20459%20583%20Z%20M%20459%20583%20L%20479%20583%20L%20479%20584%20L%20459%20584%20Z%20M%20460%20584%20L%20479%20584%20L%20479%20585%20L%20460%20585%20Z%20M%20460%20585%20L%20479%20585%20L%20479%20586%20L%20460%20586%20Z%20M%20460%20586%20L%20479%20586%20L%20479%20587%20L%20460%20587%20Z%20M%20460%20587%20L%20479%20587%20L%20479%20588%20L%20460%20588%20Z%20M%20460%20588%20L%20479%20588%20L%20479%20589%20L%20460%20589%20Z%20M%20460%20589%20L%20479%20589%20L%20479%20590%20L%20460%20590%20Z%20M%20460%20590%20L%20479%20590%20L%20479%20591%20L%20460%20591%20Z%20M%20460%20591%20L%20478%20591%20L%20478%20592%20L%20460%20592%20Z%20M%20461%20592%20L%20478%20592%20L%20478%20593%20L%20461%20593%20Z%20M%20461%20593%20L%20478%20593%20L%20478%20594%20L%20461%20594%20Z%20M%20461%20594%20L%20478%20594%20L%20478%20595%20L%20461%20595%20Z%20M%20461%20595%20L%20478%20595%20L%20478%20596%20L%20461%20596%20Z%20M%20461%20596%20L%20478%20596%20L%20478%20597%20L%20461%20597%20Z%20M%20461%20597%20L%20477%20597%20L%20477%20598%20L%20461%20598%20Z%20M%20461%20598%20L%20477%20598%20L%20477%20599%20L%20461%20599%20Z%20M%20461%20599%20L%20477%20599%20L%20477%20600%20L%20461%20600%20Z%20M%20462%20600%20L%20477%20600%20L%20477%20601%20L%20462%20601%20Z%20M%20462%20601%20L%20477%20601%20L%20477%20602%20L%20462%20602%20Z%20M%20462%20602%20L%20477%20602%20L%20477%20603%20L%20462%20603%20Z%20M%20462%20603%20L%20477%20603%20L%20477%20604%20L%20462%20604%20Z%20M%20462%20604%20L%20477%20604%20L%20477%20605%20L%20462%20605%20Z%20M%20463%20605%20L%20476%20605%20L%20476%20606%20L%20463%20606%20Z%20M%20463%20606%20L%20476%20606%20L%20476%20607%20L%20463%20607%20Z%20M%20463%20607%20L%20476%20607%20L%20476%20608%20L%20463%20608%20Z%20M%20463%20608%20L%20476%20608%20L%20476%20609%20L%20463%20609%20Z%20M%20463%20609%20L%20475%20609%20L%20475%20610%20L%20463%20610%20Z%20M%20463%20610%20L%20475%20610%20L%20475%20611%20L%20463%20611%20Z%20M%20463%20611%20L%20475%20611%20L%20475%20612%20L%20463%20612%20Z%20M%20463%20612%20L%20475%20612%20L%20475%20613%20L%20463%20613%20Z%20M%20464%20613%20L%20475%20613%20L%20475%20614%20L%20464%20614%20Z%20M%20464%20614%20L%20475%20614%20L%20475%20615%20L%20464%20615%20Z%20M%20464%20615%20L%20475%20615%20L%20475%20616%20L%20464%20616%20Z%20M%20464%20616%20L%20475%20616%20L%20475%20617%20L%20464%20617%20Z%20M%20464%20617%20L%20475%20617%20L%20475%20618%20L%20464%20618%20Z%20M%20464%20618%20L%20475%20618%20L%20475%20619%20L%20464%20619%20Z%20M%20464%20619%20L%20474%20619%20L%20474%20620%20L%20464%20620%20Z%20M%20465%20620%20L%20474%20620%20L%20474%20621%20L%20465%20621%20Z%20M%20465%20621%20L%20474%20621%20L%20474%20622%20L%20465%20622%20Z%20M%20465%20622%20L%20474%20622%20L%20474%20623%20L%20465%20623%20Z%20M%20465%20623%20L%20473%20623%20L%20473%20624%20L%20465%20624%20Z%20M%20465%20624%20L%20473%20624%20L%20473%20625%20L%20465%20625%20Z%20M%20465%20625%20L%20473%20625%20L%20473%20626%20L%20465%20626%20Z%20M%20465%20626%20L%20473%20626%20L%20473%20627%20L%20465%20627%20Z%20M%20465%20627%20L%20473%20627%20L%20473%20628%20L%20465%20628%20Z%20M%20466%20628%20L%20473%20628%20L%20473%20629%20L%20466%20629%20Z%20M%20466%20629%20L%20473%20629%20L%20473%20630%20L%20466%20630%20Z%20M%20466%20630%20L%20472%20630%20L%20472%20631%20L%20466%20631%20Z%20M%20466%20631%20L%20472%20631%20L%20472%20632%20L%20466%20632%20Z%20M%20466%20632%20L%20472%20632%20L%20472%20633%20L%20466%20633%20Z%20M%20466%20633%20L%20472%20633%20L%20472%20634%20L%20466%20634%20Z%20M%20467%20634%20L%20472%20634%20L%20472%20635%20L%20467%20635%20Z%20M%20467%20635%20L%20472%20635%20L%20472%20636%20L%20467%20636%20Z%20M%20467%20636%20L%20471%20636%20L%20471%20637%20L%20467%20637%20Z%20M%20467%20637%20L%20471%20637%20L%20471%20638%20L%20467%20638%20Z%20M%20467%20638%20L%20471%20638%20L%20471%20639%20L%20467%20639%20Z%20M%20467%20639%20L%20471%20639%20L%20471%20640%20L%20467%20640%20Z%20M%20467%20640%20L%20471%20640%20L%20471%20641%20L%20467%20641%20Z%20M%20467%20641%20L%20471%20641%20L%20471%20642%20L%20467%20642%20Z%20M%20467%20642%20L%20471%20642%20L%20471%20643%20L%20467%20643%20Z%20M%20468%20643%20L%20471%20643%20L%20471%20644%20L%20468%20644%20Z%20M%20468%20644%20L%20471%20644%20L%20471%20645%20L%20468%20645%20Z%20M%20468%20645%20L%20470%20645%20L%20470%20646%20L%20468%20646%20Z%20M%20468%20646%20L%20470%20646%20L%20470%20647%20L%20468%20647%20Z%20M%20468%20647%20L%20470%20647%20L%20470%20648%20L%20468%20648%20Z%20M%20469%20648%20L%20470%20648%20L%20470%20649%20L%20469%20649%20Z%22%20fill%3D%22rgb%2883%2C22%2C176%29%22%2F%3E%0D%0A%20%20%3Cpath%20d%3D%22M%20826%2048%20L%20828%2048%20L%20828%2049%20L%20826%2049%20Z%20M%20825%2049%20L%20828%2049%20L%20828%2050%20L%20825%2050%20Z%20M%20825%2050%20L%20828%2050%20L%20828%2051%20L%20825%2051%20Z%20M%20824%2051%20L%20828%2051%20L%20828%2052%20L%20824%2052%20Z%20M%20824%2052%20L%20828%2052%20L%20828%2053%20L%20824%2053%20Z%20M%20823%2053%20L%20828%2053%20L%20828%2054%20L%20823%2054%20Z%20M%20822%2054%20L%20829%2054%20L%20829%2055%20L%20822%2055%20Z%20M%20821%2055%20L%20829%2055%20L%20829%2056%20L%20821%2056%20Z%20M%20821%2056%20L%20829%2056%20L%20829%2057%20L%20821%2057%20Z%20M%20820%2057%20L%20829%2057%20L%20829%2058%20L%20820%2058%20Z%20M%20820%2058%20L%20829%2058%20L%20829%2059%20L%20820%2059%20Z%20M%20819%2059%20L%20830%2059%20L%20830%2060%20L%20819%2060%20Z%20M%20818%2060%20L%20830%2060%20L%20830%2061%20L%20818%2061%20Z%20M%20817%2061%20L%20830%2061%20L%20830%2062%20L%20817%2062%20Z%20M%20817%2062%20L%20830%2062%20L%20830%2063%20L%20817%2063%20Z%20M%20816%2063%20L%20830%2063%20L%20830%2064%20L%20816%2064%20Z%20M%20815%2064%20L%20830%2064%20L%20830%2065%20L%20815%2065%20Z%20M%20814%2065%20L%20830%2065%20L%20830%2066%20L%20814%2066%20Z%20M%20813%2066%20L%20830%2066%20L%20830%2067%20L%20813%2067%20Z%20M%20813%2067%20L%20830%2067%20L%20830%2068%20L%20813%2068%20Z%20M%20812%2068%20L%20830%2068%20L%20830%2069%20L%20812%2069%20Z%20M%20811%2069%20L%20830%2069%20L%20830%2070%20L%20811%2070%20Z%20M%20810%2070%20L%20830%2070%20L%20830%2071%20L%20810%2071%20Z%20M%20810%2071%20L%20830%2071%20L%20830%2072%20L%20810%2072%20Z%20M%20809%2072%20L%20830%2072%20L%20830%2073%20L%20809%2073%20Z%20M%20808%2073%20L%20830%2073%20L%20830%2074%20L%20808%2074%20Z%20M%20807%2074%20L%20831%2074%20L%20831%2075%20L%20807%2075%20Z%20M%20806%2075%20L%20831%2075%20L%20831%2076%20L%20806%2076%20Z%20M%20806%2076%20L%20831%2076%20L%20831%2077%20L%20806%2077%20Z%20M%20804%2077%20L%20831%2077%20L%20831%2078%20L%20804%2078%20Z%20M%20804%2078%20L%20831%2078%20L%20831%2079%20L%20804%2079%20Z%20M%20803%2079%20L%20831%2079%20L%20831%2080%20L%20803%2080%20Z%20M%20802%2080%20L%20831%2080%20L%20831%2081%20L%20802%2081%20Z%20M%20801%2081%20L%20831%2081%20L%20831%2082%20L%20801%2082%20Z%20M%20800%2082%20L%20831%2082%20L%20831%2083%20L%20800%2083%20Z%20M%20799%2083%20L%20831%2083%20L%20831%2084%20L%20799%2084%20Z%20M%20798%2084%20L%20831%2084%20L%20831%2085%20L%20798%2085%20Z%20M%20797%2085%20L%20831%2085%20L%20831%2086%20L%20797%2086%20Z%20M%20796%2086%20L%20831%2086%20L%20831%2087%20L%20796%2087%20Z%20M%20795%2087%20L%20831%2087%20L%20831%2088%20L%20795%2088%20Z%20M%20794%2088%20L%20832%2088%20L%20832%2089%20L%20794%2089%20Z%20M%20793%2089%20L%20832%2089%20L%20832%2090%20L%20793%2090%20Z%20M%20792%2090%20L%20832%2090%20L%20832%2091%20L%20792%2091%20Z%20M%20791%2091%20L%20832%2091%20L%20832%2092%20L%20791%2092%20Z%20M%20790%2092%20L%20832%2092%20L%20832%2093%20L%20790%2093%20Z%20M%20789%2093%20L%20832%2093%20L%20832%2094%20L%20789%2094%20Z%20M%20788%2094%20L%20832%2094%20L%20832%2095%20L%20788%2095%20Z%20M%20787%2095%20L%20832%2095%20L%20832%2096%20L%20787%2096%20Z%20M%20786%2096%20L%20832%2096%20L%20832%2097%20L%20786%2097%20Z%20M%20784%2097%20L%20832%2097%20L%20832%2098%20L%20784%2098%20Z%20M%20783%2098%20L%20831%2098%20L%20831%2099%20L%20783%2099%20Z%20M%20782%2099%20L%20832%2099%20L%20832%20100%20L%20782%20100%20Z%20M%20781%20100%20L%20831%20100%20L%20831%20101%20L%20781%20101%20Z%20M%20779%20101%20L%20831%20101%20L%20831%20102%20L%20779%20102%20Z%20M%20779%20102%20L%20831%20102%20L%20831%20103%20L%20779%20103%20Z%20M%20777%20103%20L%20831%20103%20L%20831%20104%20L%20777%20104%20Z%20M%20776%20104%20L%20831%20104%20L%20831%20105%20L%20776%20105%20Z%20M%20774%20105%20L%20831%20105%20L%20831%20106%20L%20774%20106%20Z%20M%20773%20106%20L%20831%20106%20L%20831%20107%20L%20773%20107%20Z%20M%20772%20107%20L%20831%20107%20L%20831%20108%20L%20772%20108%20Z%20M%20770%20108%20L%20831%20108%20L%20831%20109%20L%20770%20109%20Z%20M%20769%20109%20L%20831%20109%20L%20831%20110%20L%20769%20110%20Z%20M%20767%20110%20L%20831%20110%20L%20831%20111%20L%20767%20111%20Z%20M%20766%20111%20L%20831%20111%20L%20831%20112%20L%20766%20112%20Z%20M%20765%20112%20L%20831%20112%20L%20831%20113%20L%20765%20113%20Z%20M%20764%20113%20L%20831%20113%20L%20831%20114%20L%20764%20114%20Z%20M%20762%20114%20L%20830%20114%20L%20830%20115%20L%20762%20115%20Z%20M%20761%20115%20L%20830%20115%20L%20830%20116%20L%20761%20116%20Z%20M%20759%20116%20L%20830%20116%20L%20830%20117%20L%20759%20117%20Z%20M%20758%20117%20L%20830%20117%20L%20830%20118%20L%20758%20118%20Z%20M%20756%20118%20L%20830%20118%20L%20830%20119%20L%20756%20119%20Z%20M%20754%20119%20L%20830%20119%20L%20830%20120%20L%20754%20120%20Z%20M%20753%20120%20L%20830%20120%20L%20830%20121%20L%20753%20121%20Z%20M%20751%20121%20L%20830%20121%20L%20830%20122%20L%20751%20122%20Z%20M%20750%20122%20L%20830%20122%20L%20830%20123%20L%20750%20123%20Z%20M%20748%20123%20L%20830%20123%20L%20830%20124%20L%20748%20124%20Z%20M%20747%20124%20L%20830%20124%20L%20830%20125%20L%20747%20125%20Z%20M%20745%20125%20L%20830%20125%20L%20830%20126%20L%20745%20126%20Z%20M%20744%20126%20L%20829%20126%20L%20829%20127%20L%20744%20127%20Z%20M%20742%20127%20L%20829%20127%20L%20829%20128%20L%20742%20128%20Z%20M%20740%20128%20L%20829%20128%20L%20829%20129%20L%20740%20129%20Z%20M%20738%20129%20L%20829%20129%20L%20829%20130%20L%20738%20130%20Z%20M%20737%20130%20L%20829%20130%20L%20829%20131%20L%20737%20131%20Z%20M%20735%20131%20L%20828%20131%20L%20828%20132%20L%20735%20132%20Z%20M%20733%20132%20L%20828%20132%20L%20828%20133%20L%20733%20133%20Z%20M%20732%20133%20L%20828%20133%20L%20828%20134%20L%20732%20134%20Z%20M%20730%20134%20L%20828%20134%20L%20828%20135%20L%20730%20135%20Z%20M%20728%20135%20L%20828%20135%20L%20828%20136%20L%20728%20136%20Z%20M%20726%20136%20L%20828%20136%20L%20828%20137%20L%20726%20137%20Z%20M%20725%20137%20L%20828%20137%20L%20828%20138%20L%20725%20138%20Z%20M%20723%20138%20L%20827%20138%20L%20827%20139%20L%20723%20139%20Z%20M%20721%20139%20L%20827%20139%20L%20827%20140%20L%20721%20140%20Z%20M%20720%20140%20L%20827%20140%20L%20827%20141%20L%20720%20141%20Z%20M%20718%20141%20L%20827%20141%20L%20827%20142%20L%20718%20142%20Z%20M%20717%20142%20L%20826%20142%20L%20826%20143%20L%20717%20143%20Z%20M%20714%20143%20L%20826%20143%20L%20826%20144%20L%20714%20144%20Z%20M%20713%20144%20L%20826%20144%20L%20826%20145%20L%20713%20145%20Z%20M%20711%20145%20L%20826%20145%20L%20826%20146%20L%20711%20146%20Z%20M%20709%20146%20L%20826%20146%20L%20826%20147%20L%20709%20147%20Z%20M%20707%20147%20L%20826%20147%20L%20826%20148%20L%20707%20148%20Z%20M%20706%20148%20L%20825%20148%20L%20825%20149%20L%20706%20149%20Z%20M%20704%20149%20L%20825%20149%20L%20825%20150%20L%20704%20150%20Z%20M%20702%20150%20L%20825%20150%20L%20825%20151%20L%20702%20151%20Z%20M%20700%20151%20L%20825%20151%20L%20825%20152%20L%20700%20152%20Z%20M%20698%20152%20L%20825%20152%20L%20825%20153%20L%20698%20153%20Z%20M%20697%20153%20L%20824%20153%20L%20824%20154%20L%20697%20154%20Z%20M%20695%20154%20L%20824%20154%20L%20824%20155%20L%20695%20155%20Z%20M%20693%20155%20L%20824%20155%20L%20824%20156%20L%20693%20156%20Z%20M%20691%20156%20L%20823%20156%20L%20823%20157%20L%20691%20157%20Z%20M%20690%20157%20L%20823%20157%20L%20823%20158%20L%20690%20158%20Z%20M%20687%20158%20L%20823%20158%20L%20823%20159%20L%20687%20159%20Z%20M%20686%20159%20L%20823%20159%20L%20823%20160%20L%20686%20160%20Z%20M%20684%20160%20L%20823%20160%20L%20823%20161%20L%20684%20161%20Z%20M%20683%20161%20L%20822%20161%20L%20822%20162%20L%20683%20162%20Z%20M%20681%20162%20L%20822%20162%20L%20822%20163%20L%20681%20163%20Z%20M%20679%20163%20L%20822%20163%20L%20822%20164%20L%20679%20164%20Z%20M%20677%20164%20L%20821%20164%20L%20821%20165%20L%20677%20165%20Z%20M%20675%20165%20L%20821%20165%20L%20821%20166%20L%20675%20166%20Z%20M%20674%20166%20L%20821%20166%20L%20821%20167%20L%20674%20167%20Z%20M%20671%20167%20L%20820%20167%20L%20820%20168%20L%20671%20168%20Z%20M%20670%20168%20L%20820%20168%20L%20820%20169%20L%20670%20169%20Z%20M%20668%20169%20L%20820%20169%20L%20820%20170%20L%20668%20170%20Z%20M%20667%20170%20L%20819%20170%20L%20819%20171%20L%20667%20171%20Z%20M%20665%20171%20L%20819%20171%20L%20819%20172%20L%20665%20172%20Z%20M%20663%20172%20L%20819%20172%20L%20819%20173%20L%20663%20173%20Z%20M%20661%20173%20L%20818%20173%20L%20818%20174%20L%20661%20174%20Z%20M%20660%20174%20L%20818%20174%20L%20818%20175%20L%20660%20175%20Z%20M%20658%20175%20L%20817%20175%20L%20817%20176%20L%20658%20176%20Z%20M%20657%20176%20L%20817%20176%20L%20817%20177%20L%20657%20177%20Z%20M%20655%20177%20L%20817%20177%20L%20817%20178%20L%20655%20178%20Z%20M%20654%20178%20L%20816%20178%20L%20816%20179%20L%20654%20179%20Z%20M%20652%20179%20L%20816%20179%20L%20816%20180%20L%20652%20180%20Z%20M%20650%20180%20L%20815%20180%20L%20815%20181%20L%20650%20181%20Z%20M%20649%20181%20L%20815%20181%20L%20815%20182%20L%20649%20182%20Z%20M%20647%20182%20L%20815%20182%20L%20815%20183%20L%20647%20183%20Z%20M%20647%20183%20L%20814%20183%20L%20814%20184%20L%20647%20184%20Z%20M%20645%20184%20L%20814%20184%20L%20814%20185%20L%20645%20185%20Z%20M%20643%20185%20L%20814%20185%20L%20814%20186%20L%20643%20186%20Z%20M%20641%20186%20L%20813%20186%20L%20813%20187%20L%20641%20187%20Z%20M%20640%20187%20L%20813%20187%20L%20813%20188%20L%20640%20188%20Z%20M%20639%20188%20L%20812%20188%20L%20812%20189%20L%20639%20189%20Z%20M%20637%20189%20L%20812%20189%20L%20812%20190%20L%20637%20190%20Z%20M%20636%20190%20L%20811%20190%20L%20811%20191%20L%20636%20191%20Z%20M%20634%20191%20L%20811%20191%20L%20811%20192%20L%20634%20192%20Z%20M%20633%20192%20L%20810%20192%20L%20810%20193%20L%20633%20193%20Z%20M%20632%20193%20L%20810%20193%20L%20810%20194%20L%20632%20194%20Z%20M%20631%20194%20L%20810%20194%20L%20810%20195%20L%20631%20195%20Z%20M%20629%20195%20L%20809%20195%20L%20809%20196%20L%20629%20196%20Z%20M%20628%20196%20L%20808%20196%20L%20808%20197%20L%20628%20197%20Z%20M%20627%20197%20L%20808%20197%20L%20808%20198%20L%20627%20198%20Z%20M%20625%20198%20L%20807%20198%20L%20807%20199%20L%20625%20199%20Z%20M%20624%20199%20L%20807%20199%20L%20807%20200%20L%20624%20200%20Z%20M%20623%20200%20L%20806%20200%20L%20806%20201%20L%20623%20201%20Z%20M%20621%20201%20L%20806%20201%20L%20806%20202%20L%20621%20202%20Z%20M%20620%20202%20L%20805%20202%20L%20805%20203%20L%20620%20203%20Z%20M%20619%20203%20L%20804%20203%20L%20804%20204%20L%20619%20204%20Z%20M%20618%20204%20L%20804%20204%20L%20804%20205%20L%20618%20205%20Z%20M%20617%20205%20L%20803%20205%20L%20803%20206%20L%20617%20206%20Z%20M%20615%20206%20L%20803%20206%20L%20803%20207%20L%20615%20207%20Z%20M%20614%20207%20L%20802%20207%20L%20802%20208%20L%20614%20208%20Z%20M%20613%20208%20L%20802%20208%20L%20802%20209%20L%20613%20209%20Z%20M%20612%20209%20L%20801%20209%20L%20801%20210%20L%20612%20210%20Z%20M%20611%20210%20L%20800%20210%20L%20800%20211%20L%20611%20211%20Z%20M%20610%20211%20L%20800%20211%20L%20800%20212%20L%20610%20212%20Z%20M%20609%20212%20L%20799%20212%20L%20799%20213%20L%20609%20213%20Z%20M%20607%20213%20L%20799%20213%20L%20799%20214%20L%20607%20214%20Z%20M%20607%20214%20L%20798%20214%20L%20798%20215%20L%20607%20215%20Z%20M%20605%20215%20L%20797%20215%20L%20797%20216%20L%20605%20216%20Z%20M%20604%20216%20L%20797%20216%20L%20797%20217%20L%20604%20217%20Z%20M%20603%20217%20L%20796%20217%20L%20796%20218%20L%20603%20218%20Z%20M%20602%20218%20L%20795%20218%20L%20795%20219%20L%20602%20219%20Z%20M%20601%20219%20L%20795%20219%20L%20795%20220%20L%20601%20220%20Z%20M%20600%20220%20L%20794%20220%20L%20794%20221%20L%20600%20221%20Z%20M%20599%20221%20L%20793%20221%20L%20793%20222%20L%20599%20222%20Z%20M%20598%20222%20L%20792%20222%20L%20792%20223%20L%20598%20223%20Z%20M%20597%20223%20L%20791%20223%20L%20791%20224%20L%20597%20224%20Z%20M%20596%20224%20L%20791%20224%20L%20791%20225%20L%20596%20225%20Z%20M%20595%20225%20L%20790%20225%20L%20790%20226%20L%20595%20226%20Z%20M%20594%20226%20L%20789%20226%20L%20789%20227%20L%20594%20227%20Z%20M%20593%20227%20L%20789%20227%20L%20789%20228%20L%20593%20228%20Z%20M%20592%20228%20L%20788%20228%20L%20788%20229%20L%20592%20229%20Z%20M%20592%20229%20L%20787%20229%20L%20787%20230%20L%20592%20230%20Z%20M%20590%20230%20L%20786%20230%20L%20786%20231%20L%20590%20231%20Z%20M%20590%20231%20L%20785%20231%20L%20785%20232%20L%20590%20232%20Z%20M%20589%20232%20L%20784%20232%20L%20784%20233%20L%20589%20233%20Z%20M%20588%20233%20L%20784%20233%20L%20784%20234%20L%20588%20234%20Z%20M%20587%20234%20L%20782%20234%20L%20782%20235%20L%20587%20235%20Z%20M%20586%20235%20L%20782%20235%20L%20782%20236%20L%20586%20236%20Z%20M%20585%20236%20L%20780%20236%20L%20780%20237%20L%20585%20237%20Z%20M%20584%20237%20L%20780%20237%20L%20780%20238%20L%20584%20238%20Z%20M%20583%20238%20L%20779%20238%20L%20779%20239%20L%20583%20239%20Z%20M%20582%20239%20L%20778%20239%20L%20778%20240%20L%20582%20240%20Z%20M%20582%20240%20L%20777%20240%20L%20777%20241%20L%20582%20241%20Z%20M%20581%20241%20L%20776%20241%20L%20776%20242%20L%20581%20242%20Z%20M%20580%20242%20L%20775%20242%20L%20775%20243%20L%20580%20243%20Z%20M%20579%20243%20L%20774%20243%20L%20774%20244%20L%20579%20244%20Z%20M%20578%20244%20L%20773%20244%20L%20773%20245%20L%20578%20245%20Z%20M%20577%20245%20L%20772%20245%20L%20772%20246%20L%20577%20246%20Z%20M%20577%20246%20L%20771%20246%20L%20771%20247%20L%20577%20247%20Z%20M%20576%20247%20L%20770%20247%20L%20770%20248%20L%20576%20248%20Z%20M%20575%20248%20L%20769%20248%20L%20769%20249%20L%20575%20249%20Z%20M%20574%20249%20L%20768%20249%20L%20768%20250%20L%20574%20250%20Z%20M%20573%20250%20L%20766%20250%20L%20766%20251%20L%20573%20251%20Z%20M%20573%20251%20L%20766%20251%20L%20766%20252%20L%20573%20252%20Z%20M%20572%20252%20L%20764%20252%20L%20764%20253%20L%20572%20253%20Z%20M%20571%20253%20L%20763%20253%20L%20763%20254%20L%20571%20254%20Z%20M%20570%20254%20L%20762%20254%20L%20762%20255%20L%20570%20255%20Z%20M%20570%20255%20L%20761%20255%20L%20761%20256%20L%20570%20256%20Z%20M%20569%20256%20L%20760%20256%20L%20760%20257%20L%20569%20257%20Z%20M%20568%20257%20L%20758%20257%20L%20758%20258%20L%20568%20258%20Z%20M%20568%20258%20L%20757%20258%20L%20757%20259%20L%20568%20259%20Z%20M%20567%20259%20L%20756%20259%20L%20756%20260%20L%20567%20260%20Z%20M%20566%20260%20L%20754%20260%20L%20754%20261%20L%20566%20261%20Z%20M%20566%20261%20L%20753%20261%20L%20753%20262%20L%20566%20262%20Z%20M%20565%20262%20L%20752%20262%20L%20752%20263%20L%20565%20263%20Z%20M%20564%20263%20L%20750%20263%20L%20750%20264%20L%20564%20264%20Z%20M%20564%20264%20L%20749%20264%20L%20749%20265%20L%20564%20265%20Z%20M%20563%20265%20L%20747%20265%20L%20747%20266%20L%20563%20266%20Z%20M%20562%20266%20L%20746%20266%20L%20746%20267%20L%20562%20267%20Z%20M%20562%20267%20L%20744%20267%20L%20744%20268%20L%20562%20268%20Z%20M%20561%20268%20L%20743%20268%20L%20743%20269%20L%20561%20269%20Z%20M%20561%20269%20L%20741%20269%20L%20741%20270%20L%20561%20270%20Z%20M%20560%20270%20L%20740%20270%20L%20740%20271%20L%20560%20271%20Z%20M%20559%20271%20L%20738%20271%20L%20738%20272%20L%20559%20272%20Z%20M%20558%20272%20L%20736%20272%20L%20736%20273%20L%20558%20273%20Z%20M%20558%20273%20L%20734%20273%20L%20734%20274%20L%20558%20274%20Z%20M%20557%20274%20L%20733%20274%20L%20733%20275%20L%20557%20275%20Z%20M%20557%20275%20L%20731%20275%20L%20731%20276%20L%20557%20276%20Z%20M%20556%20276%20L%20729%20276%20L%20729%20277%20L%20556%20277%20Z%20M%20556%20277%20L%20727%20277%20L%20727%20278%20L%20556%20278%20Z%20M%20555%20278%20L%20725%20278%20L%20725%20279%20L%20555%20279%20Z%20M%20554%20279%20L%20724%20279%20L%20724%20280%20L%20554%20280%20Z%20M%20554%20280%20L%20722%20280%20L%20722%20281%20L%20554%20281%20Z%20M%20553%20281%20L%20720%20281%20L%20720%20282%20L%20553%20282%20Z%20M%20553%20282%20L%20718%20282%20L%20718%20283%20L%20553%20283%20Z%20M%20552%20283%20L%20716%20283%20L%20716%20284%20L%20552%20284%20Z%20M%20552%20284%20L%20714%20284%20L%20714%20285%20L%20552%20285%20Z%20M%20551%20285%20L%20712%20285%20L%20712%20286%20L%20551%20286%20Z%20M%20550%20286%20L%20710%20286%20L%20710%20287%20L%20550%20287%20Z%20M%20550%20287%20L%20708%20287%20L%20708%20288%20L%20550%20288%20Z%20M%20549%20288%20L%20707%20288%20L%20707%20289%20L%20549%20289%20Z%20M%20549%20289%20L%20704%20289%20L%20704%20290%20L%20549%20290%20Z%20M%20548%20290%20L%20702%20290%20L%20702%20291%20L%20548%20291%20Z%20M%20548%20291%20L%20700%20291%20L%20700%20292%20L%20548%20292%20Z%20M%20547%20292%20L%20698%20292%20L%20698%20293%20L%20547%20293%20Z%20M%20547%20293%20L%20696%20293%20L%20696%20294%20L%20547%20294%20Z%20M%20546%20294%20L%20694%20294%20L%20694%20295%20L%20546%20295%20Z%20M%20546%20295%20L%20691%20295%20L%20691%20296%20L%20546%20296%20Z%20M%20545%20296%20L%20689%20296%20L%20689%20297%20L%20545%20297%20Z%20M%20545%20297%20L%20687%20297%20L%20687%20298%20L%20545%20298%20Z%20M%20544%20298%20L%20685%20298%20L%20685%20299%20L%20544%20299%20Z%20M%20544%20299%20L%20683%20299%20L%20683%20300%20L%20544%20300%20Z%20M%20544%20300%20L%20681%20300%20L%20681%20301%20L%20544%20301%20Z%20M%20543%20301%20L%20680%20301%20L%20680%20302%20L%20543%20302%20Z%20M%20543%20302%20L%20677%20302%20L%20677%20303%20L%20543%20303%20Z%20M%20542%20303%20L%20676%20303%20L%20676%20304%20L%20542%20304%20Z%20M%20542%20304%20L%20673%20304%20L%20673%20305%20L%20542%20305%20Z%20M%20541%20305%20L%20671%20305%20L%20671%20306%20L%20541%20306%20Z%20M%20541%20306%20L%20669%20306%20L%20669%20307%20L%20541%20307%20Z%20M%20540%20307%20L%20667%20307%20L%20667%20308%20L%20540%20308%20Z%20M%20540%20308%20L%20665%20308%20L%20665%20309%20L%20540%20309%20Z%20M%20540%20309%20L%20663%20309%20L%20663%20310%20L%20540%20310%20Z%20M%20539%20310%20L%20662%20310%20L%20662%20311%20L%20539%20311%20Z%20M%20539%20311%20L%20660%20311%20L%20660%20312%20L%20539%20312%20Z%20M%20538%20312%20L%20658%20312%20L%20658%20313%20L%20538%20313%20Z%20M%20538%20313%20L%20656%20313%20L%20656%20314%20L%20538%20314%20Z%20M%20537%20314%20L%20655%20314%20L%20655%20315%20L%20537%20315%20Z%20M%20537%20315%20L%20652%20315%20L%20652%20316%20L%20537%20316%20Z%20M%20537%20316%20L%20651%20316%20L%20651%20317%20L%20537%20317%20Z%20M%20537%20317%20L%20649%20317%20L%20649%20318%20L%20537%20318%20Z%20M%20536%20318%20L%20647%20318%20L%20647%20319%20L%20536%20319%20Z%20M%20536%20319%20L%20645%20319%20L%20645%20320%20L%20536%20320%20Z%20M%20535%20320%20L%20643%20320%20L%20643%20321%20L%20535%20321%20Z%20M%20535%20321%20L%20642%20321%20L%20642%20322%20L%20535%20322%20Z%20M%20535%20322%20L%20640%20322%20L%20640%20323%20L%20535%20323%20Z%20M%20534%20323%20L%20638%20323%20L%20638%20324%20L%20534%20324%20Z%20M%20534%20324%20L%20636%20324%20L%20636%20325%20L%20534%20325%20Z%20M%20533%20325%20L%20635%20325%20L%20635%20326%20L%20533%20326%20Z%20M%20533%20326%20L%20633%20326%20L%20633%20327%20L%20533%20327%20Z%20M%20533%20327%20L%20632%20327%20L%20632%20328%20L%20533%20328%20Z%20M%20533%20328%20L%20631%20328%20L%20631%20329%20L%20533%20329%20Z%20M%20532%20329%20L%20629%20329%20L%20629%20330%20L%20532%20330%20Z%20M%20532%20330%20L%20628%20330%20L%20628%20331%20L%20532%20331%20Z%20M%20532%20331%20L%20626%20331%20L%20626%20332%20L%20532%20332%20Z%20M%20531%20332%20L%20625%20332%20L%20625%20333%20L%20531%20333%20Z%20M%20531%20333%20L%20623%20333%20L%20623%20334%20L%20531%20334%20Z%20M%20531%20334%20L%20622%20334%20L%20622%20335%20L%20531%20335%20Z%20M%20530%20335%20L%20620%20335%20L%20620%20336%20L%20530%20336%20Z%20M%20530%20336%20L%20619%20336%20L%20619%20337%20L%20530%20337%20Z%20M%20530%20337%20L%20617%20337%20L%20617%20338%20L%20530%20338%20Z%20M%20529%20338%20L%20616%20338%20L%20616%20339%20L%20529%20339%20Z%20M%20529%20339%20L%20615%20339%20L%20615%20340%20L%20529%20340%20Z%20M%20529%20340%20L%20613%20340%20L%20613%20341%20L%20529%20341%20Z%20M%20529%20341%20L%20612%20341%20L%20612%20342%20L%20529%20342%20Z%20M%20528%20342%20L%20610%20342%20L%20610%20343%20L%20528%20343%20Z%20M%20528%20343%20L%20609%20343%20L%20609%20344%20L%20528%20344%20Z%20M%20528%20344%20L%20608%20344%20L%20608%20345%20L%20528%20345%20Z%20M%20528%20345%20L%20607%20345%20L%20607%20346%20L%20528%20346%20Z%20M%20528%20346%20L%20606%20346%20L%20606%20347%20L%20528%20347%20Z%20M%20527%20347%20L%20604%20347%20L%20604%20348%20L%20527%20348%20Z%20M%20527%20348%20L%20603%20348%20L%20603%20349%20L%20527%20349%20Z%20M%20527%20349%20L%20602%20349%20L%20602%20350%20L%20527%20350%20Z%20M%20527%20350%20L%20600%20350%20L%20600%20351%20L%20527%20351%20Z%20M%20526%20351%20L%20600%20351%20L%20600%20352%20L%20526%20352%20Z%20M%20526%20352%20L%20598%20352%20L%20598%20353%20L%20526%20353%20Z%20M%20526%20353%20L%20597%20353%20L%20597%20354%20L%20526%20354%20Z%20M%20526%20354%20L%20596%20354%20L%20596%20355%20L%20526%20355%20Z%20M%20526%20355%20L%20595%20355%20L%20595%20356%20L%20526%20356%20Z%20M%20525%20356%20L%20594%20356%20L%20594%20357%20L%20525%20357%20Z%20M%20525%20357%20L%20593%20357%20L%20593%20358%20L%20525%20358%20Z%20M%20525%20358%20L%20592%20358%20L%20592%20359%20L%20525%20359%20Z%20M%20525%20359%20L%20591%20359%20L%20591%20360%20L%20525%20360%20Z%20M%20524%20360%20L%20590%20360%20L%20590%20361%20L%20524%20361%20Z%20M%20524%20361%20L%20589%20361%20L%20589%20362%20L%20524%20362%20Z%20M%20524%20362%20L%20587%20362%20L%20587%20363%20L%20524%20363%20Z%20M%20524%20363%20L%20587%20363%20L%20587%20364%20L%20524%20364%20Z%20M%20524%20364%20L%20585%20364%20L%20585%20365%20L%20524%20365%20Z%20M%20524%20365%20L%20584%20365%20L%20584%20366%20L%20524%20366%20Z%20M%20523%20366%20L%20583%20366%20L%20583%20367%20L%20523%20367%20Z%20M%20523%20367%20L%20583%20367%20L%20583%20368%20L%20523%20368%20Z%20M%20523%20368%20L%20581%20368%20L%20581%20369%20L%20523%20369%20Z%20M%20523%20369%20L%20580%20369%20L%20580%20370%20L%20523%20370%20Z%20M%20523%20370%20L%20580%20370%20L%20580%20371%20L%20523%20371%20Z%20M%20522%20371%20L%20579%20371%20L%20579%20372%20L%20522%20372%20Z%20M%20522%20372%20L%20578%20372%20L%20578%20373%20L%20522%20373%20Z%20M%20522%20373%20L%20577%20373%20L%20577%20374%20L%20522%20374%20Z%20M%20522%20374%20L%20576%20374%20L%20576%20375%20L%20522%20375%20Z%20M%20522%20375%20L%20575%20375%20L%20575%20376%20L%20522%20376%20Z%20M%20522%20376%20L%20574%20376%20L%20574%20377%20L%20522%20377%20Z%20M%20522%20377%20L%20573%20377%20L%20573%20378%20L%20522%20378%20Z%20M%20522%20378%20L%20572%20378%20L%20572%20379%20L%20522%20379%20Z%20M%20521%20379%20L%20571%20379%20L%20571%20380%20L%20521%20380%20Z%20M%20521%20380%20L%20571%20380%20L%20571%20381%20L%20521%20381%20Z%20M%20521%20381%20L%20570%20381%20L%20570%20382%20L%20521%20382%20Z%20M%20521%20382%20L%20569%20382%20L%20569%20383%20L%20521%20383%20Z%20M%20521%20383%20L%20569%20383%20L%20569%20384%20L%20521%20384%20Z%20M%20521%20384%20L%20568%20384%20L%20568%20385%20L%20521%20385%20Z%20M%20521%20385%20L%20567%20385%20L%20567%20386%20L%20521%20386%20Z%20M%20520%20386%20L%20566%20386%20L%20566%20387%20L%20520%20387%20Z%20M%20520%20387%20L%20565%20387%20L%20565%20388%20L%20520%20388%20Z%20M%20520%20388%20L%20564%20388%20L%20564%20389%20L%20520%20389%20Z%20M%20520%20389%20L%20564%20389%20L%20564%20390%20L%20520%20390%20Z%20M%20520%20390%20L%20563%20390%20L%20563%20391%20L%20520%20391%20Z%20M%20520%20391%20L%20563%20391%20L%20563%20392%20L%20520%20392%20Z%20M%20520%20392%20L%20562%20392%20L%20562%20393%20L%20520%20393%20Z%20M%20520%20393%20L%20561%20393%20L%20561%20394%20L%20520%20394%20Z%20M%20520%20394%20L%20560%20394%20L%20560%20395%20L%20520%20395%20Z%20M%20520%20395%20L%20560%20395%20L%20560%20396%20L%20520%20396%20Z%20M%20520%20396%20L%20559%20396%20L%20559%20397%20L%20520%20397%20Z%20M%20520%20397%20L%20558%20397%20L%20558%20398%20L%20520%20398%20Z%20M%20520%20398%20L%20558%20398%20L%20558%20399%20L%20520%20399%20Z%20M%20519%20399%20L%20557%20399%20L%20557%20400%20L%20519%20400%20Z%20M%20519%20400%20L%20556%20400%20L%20556%20401%20L%20519%20401%20Z%20M%20519%20401%20L%20556%20401%20L%20556%20402%20L%20519%20402%20Z%20M%20519%20402%20L%20555%20402%20L%20555%20403%20L%20519%20403%20Z%20M%20519%20403%20L%20554%20403%20L%20554%20404%20L%20519%20404%20Z%20M%20519%20404%20L%20553%20404%20L%20553%20405%20L%20519%20405%20Z%20M%20519%20405%20L%20553%20405%20L%20553%20406%20L%20519%20406%20Z%20M%20519%20406%20L%20552%20406%20L%20552%20407%20L%20519%20407%20Z%20M%20519%20407%20L%20552%20407%20L%20552%20408%20L%20519%20408%20Z%20M%20519%20408%20L%20551%20408%20L%20551%20409%20L%20519%20409%20Z%20M%20519%20409%20L%20550%20409%20L%20550%20410%20L%20519%20410%20Z%20M%20519%20410%20L%20550%20410%20L%20550%20411%20L%20519%20411%20Z%20M%20519%20411%20L%20549%20411%20L%20549%20412%20L%20519%20412%20Z%20M%20519%20412%20L%20549%20412%20L%20549%20413%20L%20519%20413%20Z%20M%20519%20413%20L%20548%20413%20L%20548%20414%20L%20519%20414%20Z%20M%20518%20414%20L%20547%20414%20L%20547%20415%20L%20518%20415%20Z%20M%20518%20415%20L%20547%20415%20L%20547%20416%20L%20518%20416%20Z%20M%20518%20416%20L%20546%20416%20L%20546%20417%20L%20518%20417%20Z%20M%20518%20417%20L%20546%20417%20L%20546%20418%20L%20518%20418%20Z%20M%20518%20418%20L%20545%20418%20L%20545%20419%20L%20518%20419%20Z%20M%20518%20419%20L%20545%20419%20L%20545%20420%20L%20518%20420%20Z%20M%20518%20420%20L%20544%20420%20L%20544%20421%20L%20518%20421%20Z%20M%20518%20421%20L%20543%20421%20L%20543%20422%20L%20518%20422%20Z%20M%20518%20422%20L%20543%20422%20L%20543%20423%20L%20518%20423%20Z%20M%20518%20423%20L%20543%20423%20L%20543%20424%20L%20518%20424%20Z%20M%20518%20424%20L%20542%20424%20L%20542%20425%20L%20518%20425%20Z%20M%20518%20425%20L%20541%20425%20L%20541%20426%20L%20518%20426%20Z%20M%20518%20426%20L%20541%20426%20L%20541%20427%20L%20518%20427%20Z%20M%20518%20427%20L%20541%20427%20L%20541%20428%20L%20518%20428%20Z%20M%20518%20428%20L%20540%20428%20L%20540%20429%20L%20518%20429%20Z%20M%20518%20429%20L%20539%20429%20L%20539%20430%20L%20518%20430%20Z%20M%20518%20430%20L%20539%20430%20L%20539%20431%20L%20518%20431%20Z%20M%20518%20431%20L%20539%20431%20L%20539%20432%20L%20518%20432%20Z%20M%20518%20432%20L%20538%20432%20L%20538%20433%20L%20518%20433%20Z%20M%20518%20433%20L%20538%20433%20L%20538%20434%20L%20518%20434%20Z%20M%20518%20434%20L%20537%20434%20L%20537%20435%20L%20518%20435%20Z%20M%20518%20435%20L%20537%20435%20L%20537%20436%20L%20518%20436%20Z%20M%20518%20436%20L%20536%20436%20L%20536%20437%20L%20518%20437%20Z%20M%20518%20437%20L%20536%20437%20L%20536%20438%20L%20518%20438%20Z%20M%20518%20438%20L%20535%20438%20L%20535%20439%20L%20518%20439%20Z%20M%20518%20439%20L%20535%20439%20L%20535%20440%20L%20518%20440%20Z%20M%20518%20440%20L%20534%20440%20L%20534%20441%20L%20518%20441%20Z%20M%20518%20441%20L%20534%20441%20L%20534%20442%20L%20518%20442%20Z%20M%20518%20442%20L%20534%20442%20L%20534%20443%20L%20518%20443%20Z%20M%20518%20443%20L%20533%20443%20L%20533%20444%20L%20518%20444%20Z%20M%20518%20444%20L%20533%20444%20L%20533%20445%20L%20518%20445%20Z%20M%20519%20445%20L%20532%20445%20L%20532%20446%20L%20519%20446%20Z%20M%20519%20446%20L%20532%20446%20L%20532%20447%20L%20519%20447%20Z%20M%20519%20447%20L%20532%20447%20L%20532%20448%20L%20519%20448%20Z%20M%20519%20448%20L%20531%20448%20L%20531%20449%20L%20519%20449%20Z%20M%20519%20449%20L%20531%20449%20L%20531%20450%20L%20519%20450%20Z%20M%20519%20450%20L%20531%20450%20L%20531%20451%20L%20519%20451%20Z%20M%20519%20451%20L%20530%20451%20L%20530%20452%20L%20519%20452%20Z%20M%20519%20452%20L%20530%20452%20L%20530%20453%20L%20519%20453%20Z%20M%20519%20453%20L%20530%20453%20L%20530%20454%20L%20519%20454%20Z%20M%20519%20454%20L%20529%20454%20L%20529%20455%20L%20519%20455%20Z%20M%20519%20455%20L%20529%20455%20L%20529%20456%20L%20519%20456%20Z%20M%20519%20456%20L%20528%20456%20L%20528%20457%20L%20519%20457%20Z%20M%20519%20457%20L%20528%20457%20L%20528%20458%20L%20519%20458%20Z%20M%20519%20458%20L%20528%20458%20L%20528%20459%20L%20519%20459%20Z%20M%20519%20459%20L%20527%20459%20L%20527%20460%20L%20519%20460%20Z%20M%20519%20460%20L%20527%20460%20L%20527%20461%20L%20519%20461%20Z%20M%20519%20461%20L%20526%20461%20L%20526%20462%20L%20519%20462%20Z%20M%20519%20462%20L%20526%20462%20L%20526%20463%20L%20519%20463%20Z%20M%20520%20463%20L%20526%20463%20L%20526%20464%20L%20520%20464%20Z%20M%20520%20464%20L%20526%20464%20L%20526%20465%20L%20520%20465%20Z%20M%20520%20465%20L%20525%20465%20L%20525%20466%20L%20520%20466%20Z%20M%20520%20466%20L%20525%20466%20L%20525%20467%20L%20520%20467%20Z%20M%20520%20467%20L%20525%20467%20L%20525%20468%20L%20520%20468%20Z%20M%20520%20468%20L%20525%20468%20L%20525%20469%20L%20520%20469%20Z%20M%20520%20469%20L%20524%20469%20L%20524%20470%20L%20520%20470%20Z%20M%20520%20470%20L%20524%20470%20L%20524%20471%20L%20520%20471%20Z%20M%20520%20471%20L%20524%20471%20L%20524%20472%20L%20520%20472%20Z%20M%20520%20472%20L%20523%20472%20L%20523%20473%20L%20520%20473%20Z%20M%20520%20473%20L%20523%20473%20L%20523%20474%20L%20520%20474%20Z%20M%20520%20474%20L%20523%20474%20L%20523%20475%20L%20520%20475%20Z%20M%20520%20475%20L%20523%20475%20L%20523%20476%20L%20520%20476%20Z%20M%20521%20476%20L%20522%20476%20L%20522%20477%20L%20521%20477%20Z%20M%20521%20477%20L%20522%20477%20L%20522%20478%20L%20521%20478%20Z%20M%20521%20478%20L%20522%20478%20L%20522%20479%20L%20521%20479%20Z%22%20fill%3D%22rgb%28102%2C32%2C200%29%22%2F%3E%0D%0A%20%20%3Cpath%20d%3D%22M%20830%20207%20L%20832%20207%20L%20832%20208%20L%20830%20208%20Z%20M%20830%20208%20L%20832%20208%20L%20832%20209%20L%20830%20209%20Z%20M%20829%20209%20L%20832%20209%20L%20832%20210%20L%20829%20210%20Z%20M%20829%20210%20L%20832%20210%20L%20832%20211%20L%20829%20211%20Z%20M%20828%20211%20L%20832%20211%20L%20832%20212%20L%20828%20212%20Z%20M%20828%20212%20L%20832%20212%20L%20832%20213%20L%20828%20213%20Z%20M%20827%20213%20L%20832%20213%20L%20832%20214%20L%20827%20214%20Z%20M%20827%20214%20L%20832%20214%20L%20832%20215%20L%20827%20215%20Z%20M%20826%20215%20L%20832%20215%20L%20832%20216%20L%20826%20216%20Z%20M%20826%20216%20L%20832%20216%20L%20832%20217%20L%20826%20217%20Z%20M%20825%20217%20L%20832%20217%20L%20832%20218%20L%20825%20218%20Z%20M%20825%20218%20L%20832%20218%20L%20832%20219%20L%20825%20219%20Z%20M%20824%20219%20L%20832%20219%20L%20832%20220%20L%20824%20220%20Z%20M%20824%20220%20L%20831%20220%20L%20831%20221%20L%20824%20221%20Z%20M%20823%20221%20L%20831%20221%20L%20831%20222%20L%20823%20222%20Z%20M%20823%20222%20L%20831%20222%20L%20831%20223%20L%20823%20223%20Z%20M%20822%20223%20L%20831%20223%20L%20831%20224%20L%20822%20224%20Z%20M%20821%20224%20L%20831%20224%20L%20831%20225%20L%20821%20225%20Z%20M%20821%20225%20L%20831%20225%20L%20831%20226%20L%20821%20226%20Z%20M%20820%20226%20L%20831%20226%20L%20831%20227%20L%20820%20227%20Z%20M%20820%20227%20L%20830%20227%20L%20830%20228%20L%20820%20228%20Z%20M%20819%20228%20L%20830%20228%20L%20830%20229%20L%20819%20229%20Z%20M%20819%20229%20L%20830%20229%20L%20830%20230%20L%20819%20230%20Z%20M%20818%20230%20L%20830%20230%20L%20830%20231%20L%20818%20231%20Z%20M%20817%20231%20L%20830%20231%20L%20830%20232%20L%20817%20232%20Z%20M%20817%20232%20L%20830%20232%20L%20830%20233%20L%20817%20233%20Z%20M%20816%20233%20L%20830%20233%20L%20830%20234%20L%20816%20234%20Z%20M%20815%20234%20L%20830%20234%20L%20830%20235%20L%20815%20235%20Z%20M%20814%20235%20L%20830%20235%20L%20830%20236%20L%20814%20236%20Z%20M%20814%20236%20L%20829%20236%20L%20829%20237%20L%20814%20237%20Z%20M%20813%20237%20L%20829%20237%20L%20829%20238%20L%20813%20238%20Z%20M%20813%20238%20L%20829%20238%20L%20829%20239%20L%20813%20239%20Z%20M%20812%20239%20L%20829%20239%20L%20829%20240%20L%20812%20240%20Z%20M%20811%20240%20L%20829%20240%20L%20829%20241%20L%20811%20241%20Z%20M%20810%20241%20L%20828%20241%20L%20828%20242%20L%20810%20242%20Z%20M%20809%20242%20L%20828%20242%20L%20828%20243%20L%20809%20243%20Z%20M%20809%20243%20L%20828%20243%20L%20828%20244%20L%20809%20244%20Z%20M%20808%20244%20L%20828%20244%20L%20828%20245%20L%20808%20245%20Z%20M%20807%20245%20L%20828%20245%20L%20828%20246%20L%20807%20246%20Z%20M%20806%20246%20L%20828%20246%20L%20828%20247%20L%20806%20247%20Z%20M%20805%20247%20L%20828%20247%20L%20828%20248%20L%20805%20248%20Z%20M%20804%20248%20L%20827%20248%20L%20827%20249%20L%20804%20249%20Z%20M%20804%20249%20L%20827%20249%20L%20827%20250%20L%20804%20250%20Z%20M%20802%20250%20L%20826%20250%20L%20826%20251%20L%20802%20251%20Z%20M%20802%20251%20L%20826%20251%20L%20826%20252%20L%20802%20252%20Z%20M%20801%20252%20L%20826%20252%20L%20826%20253%20L%20801%20253%20Z%20M%20800%20253%20L%20826%20253%20L%20826%20254%20L%20800%20254%20Z%20M%20799%20254%20L%20826%20254%20L%20826%20255%20L%20799%20255%20Z%20M%20798%20255%20L%20826%20255%20L%20826%20256%20L%20798%20256%20Z%20M%20797%20256%20L%20825%20256%20L%20825%20257%20L%20797%20257%20Z%20M%20796%20257%20L%20825%20257%20L%20825%20258%20L%20796%20258%20Z%20M%20795%20258%20L%20825%20258%20L%20825%20259%20L%20795%20259%20Z%20M%20794%20259%20L%20825%20259%20L%20825%20260%20L%20794%20260%20Z%20M%20793%20260%20L%20825%20260%20L%20825%20261%20L%20793%20261%20Z%20M%20792%20261%20L%20824%20261%20L%20824%20262%20L%20792%20262%20Z%20M%20791%20262%20L%20824%20262%20L%20824%20263%20L%20791%20263%20Z%20M%20790%20263%20L%20824%20263%20L%20824%20264%20L%20790%20264%20Z%20M%20789%20264%20L%20824%20264%20L%20824%20265%20L%20789%20265%20Z%20M%20787%20265%20L%20823%20265%20L%20823%20266%20L%20787%20266%20Z%20M%20786%20266%20L%20823%20266%20L%20823%20267%20L%20786%20267%20Z%20M%20785%20267%20L%20823%20267%20L%20823%20268%20L%20785%20268%20Z%20M%20784%20268%20L%20823%20268%20L%20823%20269%20L%20784%20269%20Z%20M%20783%20269%20L%20822%20269%20L%20822%20270%20L%20783%20270%20Z%20M%20781%20270%20L%20822%20270%20L%20822%20271%20L%20781%20271%20Z%20M%20780%20271%20L%20822%20271%20L%20822%20272%20L%20780%20272%20Z%20M%20778%20272%20L%20821%20272%20L%20821%20273%20L%20778%20273%20Z%20M%20777%20273%20L%20821%20273%20L%20821%20274%20L%20777%20274%20Z%20M%20776%20274%20L%20821%20274%20L%20821%20275%20L%20776%20275%20Z%20M%20775%20275%20L%20821%20275%20L%20821%20276%20L%20775%20276%20Z%20M%20773%20276%20L%20820%20276%20L%20820%20277%20L%20773%20277%20Z%20M%20772%20277%20L%20820%20277%20L%20820%20278%20L%20772%20278%20Z%20M%20770%20278%20L%20819%20278%20L%20819%20279%20L%20770%20279%20Z%20M%20769%20279%20L%20819%20279%20L%20819%20280%20L%20769%20280%20Z%20M%20768%20280%20L%20819%20280%20L%20819%20281%20L%20768%20281%20Z%20M%20766%20281%20L%20819%20281%20L%20819%20282%20L%20766%20282%20Z%20M%20765%20282%20L%20818%20282%20L%20818%20283%20L%20765%20283%20Z%20M%20763%20283%20L%20818%20283%20L%20818%20284%20L%20763%20284%20Z%20M%20762%20284%20L%20817%20284%20L%20817%20285%20L%20762%20285%20Z%20M%20759%20285%20L%20817%20285%20L%20817%20286%20L%20759%20286%20Z%20M%20758%20286%20L%20817%20286%20L%20817%20287%20L%20758%20287%20Z%20M%20755%20287%20L%20817%20287%20L%20817%20288%20L%20755%20288%20Z%20M%20754%20288%20L%20816%20288%20L%20816%20289%20L%20754%20289%20Z%20M%20752%20289%20L%20816%20289%20L%20816%20290%20L%20752%20290%20Z%20M%20750%20290%20L%20815%20290%20L%20815%20291%20L%20750%20291%20Z%20M%20748%20291%20L%20815%20291%20L%20815%20292%20L%20748%20292%20Z%20M%20746%20292%20L%20815%20292%20L%20815%20293%20L%20746%20293%20Z%20M%20744%20293%20L%20814%20293%20L%20814%20294%20L%20744%20294%20Z%20M%20742%20294%20L%20814%20294%20L%20814%20295%20L%20742%20295%20Z%20M%20740%20295%20L%20814%20295%20L%20814%20296%20L%20740%20296%20Z%20M%20738%20296%20L%20813%20296%20L%20813%20297%20L%20738%20297%20Z%20M%20736%20297%20L%20813%20297%20L%20813%20298%20L%20736%20298%20Z%20M%20733%20298%20L%20812%20298%20L%20812%20299%20L%20733%20299%20Z%20M%20732%20299%20L%20812%20299%20L%20812%20300%20L%20732%20300%20Z%20M%20729%20300%20L%20812%20300%20L%20812%20301%20L%20729%20301%20Z%20M%20727%20301%20L%20811%20301%20L%20811%20302%20L%20727%20302%20Z%20M%20725%20302%20L%20811%20302%20L%20811%20303%20L%20725%20303%20Z%20M%20723%20303%20L%20810%20303%20L%20810%20304%20L%20723%20304%20Z%20M%20721%20304%20L%20810%20304%20L%20810%20305%20L%20721%20305%20Z%20M%20718%20305%20L%20810%20305%20L%20810%20306%20L%20718%20306%20Z%20M%20716%20306%20L%20809%20306%20L%20809%20307%20L%20716%20307%20Z%20M%20713%20307%20L%20809%20307%20L%20809%20308%20L%20713%20308%20Z%20M%20711%20308%20L%20808%20308%20L%20808%20309%20L%20711%20309%20Z%20M%20709%20309%20L%20808%20309%20L%20808%20310%20L%20709%20310%20Z%20M%20707%20310%20L%20808%20310%20L%20808%20311%20L%20707%20311%20Z%20M%20705%20311%20L%20807%20311%20L%20807%20312%20L%20705%20312%20Z%20M%20702%20312%20L%20806%20312%20L%20806%20313%20L%20702%20313%20Z%20M%20700%20313%20L%20806%20313%20L%20806%20314%20L%20700%20314%20Z%20M%20698%20314%20L%20806%20314%20L%20806%20315%20L%20698%20315%20Z%20M%20696%20315%20L%20805%20315%20L%20805%20316%20L%20696%20316%20Z%20M%20693%20316%20L%20805%20316%20L%20805%20317%20L%20693%20317%20Z%20M%20692%20317%20L%20804%20317%20L%20804%20318%20L%20692%20318%20Z%20M%20689%20318%20L%20804%20318%20L%20804%20319%20L%20689%20319%20Z%20M%20687%20319%20L%20803%20319%20L%20803%20320%20L%20687%20320%20Z%20M%20684%20320%20L%20802%20320%20L%20802%20321%20L%20684%20321%20Z%20M%20683%20321%20L%20802%20321%20L%20802%20322%20L%20683%20322%20Z%20M%20680%20322%20L%20801%20322%20L%20801%20323%20L%20680%20323%20Z%20M%20678%20323%20L%20801%20323%20L%20801%20324%20L%20678%20324%20Z%20M%20676%20324%20L%20800%20324%20L%20800%20325%20L%20676%20325%20Z%20M%20674%20325%20L%20800%20325%20L%20800%20326%20L%20674%20326%20Z%20M%20672%20326%20L%20799%20326%20L%20799%20327%20L%20672%20327%20Z%20M%20670%20327%20L%20799%20327%20L%20799%20328%20L%20670%20328%20Z%20M%20669%20328%20L%20798%20328%20L%20798%20329%20L%20669%20329%20Z%20M%20666%20329%20L%20797%20329%20L%20797%20330%20L%20666%20330%20Z%20M%20665%20330%20L%20797%20330%20L%20797%20331%20L%20665%20331%20Z%20M%20662%20331%20L%20796%20331%20L%20796%20332%20L%20662%20332%20Z%20M%20661%20332%20L%20796%20332%20L%20796%20333%20L%20661%20333%20Z%20M%20659%20333%20L%20795%20333%20L%20795%20334%20L%20659%20334%20Z%20M%20657%20334%20L%20795%20334%20L%20795%20335%20L%20657%20335%20Z%20M%20655%20335%20L%20794%20335%20L%20794%20336%20L%20655%20336%20Z%20M%20653%20336%20L%20793%20336%20L%20793%20337%20L%20653%20337%20Z%20M%20651%20337%20L%20793%20337%20L%20793%20338%20L%20651%20338%20Z%20M%20649%20338%20L%20792%20338%20L%20792%20339%20L%20649%20339%20Z%20M%20648%20339%20L%20791%20339%20L%20791%20340%20L%20648%20340%20Z%20M%20646%20340%20L%20791%20340%20L%20791%20341%20L%20646%20341%20Z%20M%20645%20341%20L%20790%20341%20L%20790%20342%20L%20645%20342%20Z%20M%20643%20342%20L%20790%20342%20L%20790%20343%20L%20643%20343%20Z%20M%20641%20343%20L%20789%20343%20L%20789%20344%20L%20641%20344%20Z%20M%20639%20344%20L%20788%20344%20L%20788%20345%20L%20639%20345%20Z%20M%20638%20345%20L%20788%20345%20L%20788%20346%20L%20638%20346%20Z%20M%20636%20346%20L%20787%20346%20L%20787%20347%20L%20636%20347%20Z%20M%20635%20347%20L%20786%20347%20L%20786%20348%20L%20635%20348%20Z%20M%20633%20348%20L%20786%20348%20L%20786%20349%20L%20633%20349%20Z%20M%20632%20349%20L%20785%20349%20L%20785%20350%20L%20632%20350%20Z%20M%20630%20350%20L%20784%20350%20L%20784%20351%20L%20630%20351%20Z%20M%20629%20351%20L%20784%20351%20L%20784%20352%20L%20629%20352%20Z%20M%20627%20352%20L%20783%20352%20L%20783%20353%20L%20627%20353%20Z%20M%20626%20353%20L%20782%20353%20L%20782%20354%20L%20626%20354%20Z%20M%20625%20354%20L%20781%20354%20L%20781%20355%20L%20625%20355%20Z%20M%20623%20355%20L%20780%20355%20L%20780%20356%20L%20623%20356%20Z%20M%20622%20356%20L%20780%20356%20L%20780%20357%20L%20622%20357%20Z%20M%20620%20357%20L%20779%20357%20L%20779%20358%20L%20620%20358%20Z%20M%20619%20358%20L%20778%20358%20L%20778%20359%20L%20619%20359%20Z%20M%20618%20359%20L%20777%20359%20L%20777%20360%20L%20618%20360%20Z%20M%20616%20360%20L%20777%20360%20L%20777%20361%20L%20616%20361%20Z%20M%20615%20361%20L%20776%20361%20L%20776%20362%20L%20615%20362%20Z%20M%20614%20362%20L%20775%20362%20L%20775%20363%20L%20614%20363%20Z%20M%20613%20363%20L%20774%20363%20L%20774%20364%20L%20613%20364%20Z%20M%20611%20364%20L%20773%20364%20L%20773%20365%20L%20611%20365%20Z%20M%20610%20365%20L%20773%20365%20L%20773%20366%20L%20610%20366%20Z%20M%20609%20366%20L%20772%20366%20L%20772%20367%20L%20609%20367%20Z%20M%20608%20367%20L%20771%20367%20L%20771%20368%20L%20608%20368%20Z%20M%20607%20368%20L%20770%20368%20L%20770%20369%20L%20607%20369%20Z%20M%20605%20369%20L%20770%20369%20L%20770%20370%20L%20605%20370%20Z%20M%20604%20370%20L%20769%20370%20L%20769%20371%20L%20604%20371%20Z%20M%20603%20371%20L%20768%20371%20L%20768%20372%20L%20603%20372%20Z%20M%20602%20372%20L%20767%20372%20L%20767%20373%20L%20602%20373%20Z%20M%20601%20373%20L%20766%20373%20L%20766%20374%20L%20601%20374%20Z%20M%20600%20374%20L%20765%20374%20L%20765%20375%20L%20600%20375%20Z%20M%20599%20375%20L%20764%20375%20L%20764%20376%20L%20599%20376%20Z%20M%20598%20376%20L%20763%20376%20L%20763%20377%20L%20598%20377%20Z%20M%20597%20377%20L%20762%20377%20L%20762%20378%20L%20597%20378%20Z%20M%20596%20378%20L%20762%20378%20L%20762%20379%20L%20596%20379%20Z%20M%20595%20379%20L%20760%20379%20L%20760%20380%20L%20595%20380%20Z%20M%20594%20380%20L%20760%20380%20L%20760%20381%20L%20594%20381%20Z%20M%20593%20381%20L%20758%20381%20L%20758%20382%20L%20593%20382%20Z%20M%20592%20382%20L%20757%20382%20L%20757%20383%20L%20592%20383%20Z%20M%20591%20383%20L%20756%20383%20L%20756%20384%20L%20591%20384%20Z%20M%20590%20384%20L%20755%20384%20L%20755%20385%20L%20590%20385%20Z%20M%20589%20385%20L%20754%20385%20L%20754%20386%20L%20589%20386%20Z%20M%20588%20386%20L%20753%20386%20L%20753%20387%20L%20588%20387%20Z%20M%20587%20387%20L%20752%20387%20L%20752%20388%20L%20587%20388%20Z%20M%20586%20388%20L%20751%20388%20L%20751%20389%20L%20586%20389%20Z%20M%20586%20389%20L%20751%20389%20L%20751%20390%20L%20586%20390%20Z%20M%20585%20390%20L%20749%20390%20L%20749%20391%20L%20585%20391%20Z%20M%20584%20391%20L%20748%20391%20L%20748%20392%20L%20584%20392%20Z%20M%20583%20392%20L%20747%20392%20L%20747%20393%20L%20583%20393%20Z%20M%20582%20393%20L%20746%20393%20L%20746%20394%20L%20582%20394%20Z%20M%20581%20394%20L%20745%20394%20L%20745%20395%20L%20581%20395%20Z%20M%20580%20395%20L%20744%20395%20L%20744%20396%20L%20580%20396%20Z%20M%20579%20396%20L%20742%20396%20L%20742%20397%20L%20579%20397%20Z%20M%20579%20397%20L%20741%20397%20L%20741%20398%20L%20579%20398%20Z%20M%20578%20398%20L%20740%20398%20L%20740%20399%20L%20578%20399%20Z%20M%20577%20399%20L%20739%20399%20L%20739%20400%20L%20577%20400%20Z%20M%20576%20400%20L%20738%20400%20L%20738%20401%20L%20576%20401%20Z%20M%20575%20401%20L%20737%20401%20L%20737%20402%20L%20575%20402%20Z%20M%20575%20402%20L%20736%20402%20L%20736%20403%20L%20575%20403%20Z%20M%20574%20403%20L%20734%20403%20L%20734%20404%20L%20574%20404%20Z%20M%20573%20404%20L%20733%20404%20L%20733%20405%20L%20573%20405%20Z%20M%20573%20405%20L%20732%20405%20L%20732%20406%20L%20573%20406%20Z%20M%20572%20406%20L%20731%20406%20L%20731%20407%20L%20572%20407%20Z%20M%20571%20407%20L%20729%20407%20L%20729%20408%20L%20571%20408%20Z%20M%20570%20408%20L%20728%20408%20L%20728%20409%20L%20570%20409%20Z%20M%20570%20409%20L%20726%20409%20L%20726%20410%20L%20570%20410%20Z%20M%20569%20410%20L%20725%20410%20L%20725%20411%20L%20569%20411%20Z%20M%20568%20411%20L%20724%20411%20L%20724%20412%20L%20568%20412%20Z%20M%20568%20412%20L%20722%20412%20L%20722%20413%20L%20568%20413%20Z%20M%20567%20413%20L%20721%20413%20L%20721%20414%20L%20567%20414%20Z%20M%20566%20414%20L%20720%20414%20L%20720%20415%20L%20566%20415%20Z%20M%20566%20415%20L%20718%20415%20L%20718%20416%20L%20566%20416%20Z%20M%20565%20416%20L%20717%20416%20L%20717%20417%20L%20565%20417%20Z%20M%20564%20417%20L%20715%20417%20L%20715%20418%20L%20564%20418%20Z%20M%20564%20418%20L%20714%20418%20L%20714%20419%20L%20564%20419%20Z%20M%20563%20419%20L%20712%20419%20L%20712%20420%20L%20563%20420%20Z%20M%20563%20420%20L%20711%20420%20L%20711%20421%20L%20563%20421%20Z%20M%20562%20421%20L%20709%20421%20L%20709%20422%20L%20562%20422%20Z%20M%20562%20422%20L%20707%20422%20L%20707%20423%20L%20562%20423%20Z%20M%20561%20423%20L%20705%20423%20L%20705%20424%20L%20561%20424%20Z%20M%20560%20424%20L%20704%20424%20L%20704%20425%20L%20560%20425%20Z%20M%20560%20425%20L%20703%20425%20L%20703%20426%20L%20560%20426%20Z%20M%20559%20426%20L%20701%20426%20L%20701%20427%20L%20559%20427%20Z%20M%20558%20427%20L%20699%20427%20L%20699%20428%20L%20558%20428%20Z%20M%20558%20428%20L%20698%20428%20L%20698%20429%20L%20558%20429%20Z%20M%20557%20429%20L%20696%20429%20L%20696%20430%20L%20557%20430%20Z%20M%20557%20430%20L%20694%20430%20L%20694%20431%20L%20557%20431%20Z%20M%20556%20431%20L%20693%20431%20L%20693%20432%20L%20556%20432%20Z%20M%20556%20432%20L%20691%20432%20L%20691%20433%20L%20556%20433%20Z%20M%20555%20433%20L%20690%20433%20L%20690%20434%20L%20555%20434%20Z%20M%20555%20434%20L%20688%20434%20L%20688%20435%20L%20555%20435%20Z%20M%20554%20435%20L%20686%20435%20L%20686%20436%20L%20554%20436%20Z%20M%20553%20436%20L%20685%20436%20L%20685%20437%20L%20553%20437%20Z%20M%20553%20437%20L%20683%20437%20L%20683%20438%20L%20553%20438%20Z%20M%20552%20438%20L%20681%20438%20L%20681%20439%20L%20552%20439%20Z%20M%20552%20439%20L%20680%20439%20L%20680%20440%20L%20552%20440%20Z%20M%20551%20440%20L%20678%20440%20L%20678%20441%20L%20551%20441%20Z%20M%20551%20441%20L%20676%20441%20L%20676%20442%20L%20551%20442%20Z%20M%20550%20442%20L%20675%20442%20L%20675%20443%20L%20550%20443%20Z%20M%20550%20443%20L%20673%20443%20L%20673%20444%20L%20550%20444%20Z%20M%20550%20444%20L%20671%20444%20L%20671%20445%20L%20550%20445%20Z%20M%20549%20445%20L%20670%20445%20L%20670%20446%20L%20549%20446%20Z%20M%20548%20446%20L%20668%20446%20L%20668%20447%20L%20548%20447%20Z%20M%20548%20447%20L%20666%20447%20L%20666%20448%20L%20548%20448%20Z%20M%20547%20448%20L%20665%20448%20L%20665%20449%20L%20547%20449%20Z%20M%20547%20449%20L%20663%20449%20L%20663%20450%20L%20547%20450%20Z%20M%20547%20450%20L%20662%20450%20L%20662%20451%20L%20547%20451%20Z%20M%20546%20451%20L%20660%20451%20L%20660%20452%20L%20546%20452%20Z%20M%20546%20452%20L%20659%20452%20L%20659%20453%20L%20546%20453%20Z%20M%20545%20453%20L%20657%20453%20L%20657%20454%20L%20545%20454%20Z%20M%20545%20454%20L%20656%20454%20L%20656%20455%20L%20545%20455%20Z%20M%20544%20455%20L%20654%20455%20L%20654%20456%20L%20544%20456%20Z%20M%20544%20456%20L%20652%20456%20L%20652%20457%20L%20544%20457%20Z%20M%20544%20457%20L%20651%20457%20L%20651%20458%20L%20544%20458%20Z%20M%20543%20458%20L%20650%20458%20L%20650%20459%20L%20543%20459%20Z%20M%20543%20459%20L%20648%20459%20L%20648%20460%20L%20543%20460%20Z%20M%20542%20460%20L%20646%20460%20L%20646%20461%20L%20542%20461%20Z%20M%20542%20461%20L%20645%20461%20L%20645%20462%20L%20542%20462%20Z%20M%20542%20462%20L%20644%20462%20L%20644%20463%20L%20542%20463%20Z%20M%20541%20463%20L%20642%20463%20L%20642%20464%20L%20541%20464%20Z%20M%20541%20464%20L%20641%20464%20L%20641%20465%20L%20541%20465%20Z%20M%20540%20465%20L%20640%20465%20L%20640%20466%20L%20540%20466%20Z%20M%20540%20466%20L%20638%20466%20L%20638%20467%20L%20540%20467%20Z%20M%20540%20467%20L%20637%20467%20L%20637%20468%20L%20540%20468%20Z%20M%20539%20468%20L%20635%20468%20L%20635%20469%20L%20539%20469%20Z%20M%20539%20469%20L%20633%20469%20L%20633%20470%20L%20539%20470%20Z%20M%20539%20470%20L%20632%20470%20L%20632%20471%20L%20539%20471%20Z%20M%20538%20471%20L%20631%20471%20L%20631%20472%20L%20538%20472%20Z%20M%20538%20472%20L%20630%20472%20L%20630%20473%20L%20538%20473%20Z%20M%20538%20473%20L%20628%20473%20L%20628%20474%20L%20538%20474%20Z%20M%20537%20474%20L%20627%20474%20L%20627%20475%20L%20537%20475%20Z%20M%20537%20475%20L%20625%20475%20L%20625%20476%20L%20537%20476%20Z%20M%20537%20476%20L%20624%20476%20L%20624%20477%20L%20537%20477%20Z%20M%20537%20477%20L%20623%20477%20L%20623%20478%20L%20537%20478%20Z%20M%20536%20478%20L%20622%20478%20L%20622%20479%20L%20536%20479%20Z%20M%20536%20479%20L%20621%20479%20L%20621%20480%20L%20536%20480%20Z%20M%20535%20480%20L%20619%20480%20L%20619%20481%20L%20535%20481%20Z%20M%20535%20481%20L%20618%20481%20L%20618%20482%20L%20535%20482%20Z%20M%20535%20482%20L%20617%20482%20L%20617%20483%20L%20535%20483%20Z%20M%20535%20483%20L%20615%20483%20L%20615%20484%20L%20535%20484%20Z%20M%20534%20484%20L%20614%20484%20L%20614%20485%20L%20534%20485%20Z%20M%20534%20485%20L%20613%20485%20L%20613%20486%20L%20534%20486%20Z%20M%20534%20486%20L%20612%20486%20L%20612%20487%20L%20534%20487%20Z%20M%20533%20487%20L%20611%20487%20L%20611%20488%20L%20533%20488%20Z%20M%20533%20488%20L%20609%20488%20L%20609%20489%20L%20533%20489%20Z%20M%20533%20489%20L%20608%20489%20L%20608%20490%20L%20533%20490%20Z%20M%20533%20490%20L%20607%20490%20L%20607%20491%20L%20533%20491%20Z%20M%20533%20491%20L%20606%20491%20L%20606%20492%20L%20533%20492%20Z%20M%20532%20492%20L%20605%20492%20L%20605%20493%20L%20532%20493%20Z%20M%20532%20493%20L%20604%20493%20L%20604%20494%20L%20532%20494%20Z%20M%20532%20494%20L%20603%20494%20L%20603%20495%20L%20532%20495%20Z%20M%20531%20495%20L%20602%20495%20L%20602%20496%20L%20531%20496%20Z%20M%20531%20496%20L%20601%20496%20L%20601%20497%20L%20531%20497%20Z%20M%20531%20497%20L%20600%20497%20L%20600%20498%20L%20531%20498%20Z%20M%20531%20498%20L%20599%20498%20L%20599%20499%20L%20531%20499%20Z%20M%20531%20499%20L%20598%20499%20L%20598%20500%20L%20531%20500%20Z%20M%20531%20500%20L%20597%20500%20L%20597%20501%20L%20531%20501%20Z%20M%20530%20501%20L%20596%20501%20L%20596%20502%20L%20530%20502%20Z%20M%20530%20502%20L%20595%20502%20L%20595%20503%20L%20530%20503%20Z%20M%20530%20503%20L%20594%20503%20L%20594%20504%20L%20530%20504%20Z%20M%20530%20504%20L%20593%20504%20L%20593%20505%20L%20530%20505%20Z%20M%20530%20505%20L%20592%20505%20L%20592%20506%20L%20530%20506%20Z%20M%20529%20506%20L%20591%20506%20L%20591%20507%20L%20529%20507%20Z%20M%20529%20507%20L%20590%20507%20L%20590%20508%20L%20529%20508%20Z%20M%20529%20508%20L%20589%20508%20L%20589%20509%20L%20529%20509%20Z%20M%20529%20509%20L%20589%20509%20L%20589%20510%20L%20529%20510%20Z%20M%20529%20510%20L%20587%20510%20L%20587%20511%20L%20529%20511%20Z%20M%20529%20511%20L%20587%20511%20L%20587%20512%20L%20529%20512%20Z%20M%20528%20512%20L%20586%20512%20L%20586%20513%20L%20528%20513%20Z%20M%20528%20513%20L%20585%20513%20L%20585%20514%20L%20528%20514%20Z%20M%20528%20514%20L%20584%20514%20L%20584%20515%20L%20528%20515%20Z%20M%20528%20515%20L%20584%20515%20L%20584%20516%20L%20528%20516%20Z%20M%20528%20516%20L%20583%20516%20L%20583%20517%20L%20528%20517%20Z%20M%20528%20517%20L%20582%20517%20L%20582%20518%20L%20528%20518%20Z%20M%20528%20518%20L%20581%20518%20L%20581%20519%20L%20528%20519%20Z%20M%20527%20519%20L%20580%20519%20L%20580%20520%20L%20527%20520%20Z%20M%20527%20520%20L%20580%20520%20L%20580%20521%20L%20527%20521%20Z%20M%20527%20521%20L%20579%20521%20L%20579%20522%20L%20527%20522%20Z%20M%20527%20522%20L%20578%20522%20L%20578%20523%20L%20527%20523%20Z%20M%20527%20523%20L%20578%20523%20L%20578%20524%20L%20527%20524%20Z%20M%20527%20524%20L%20577%20524%20L%20577%20525%20L%20527%20525%20Z%20M%20527%20525%20L%20576%20525%20L%20576%20526%20L%20527%20526%20Z%20M%20527%20526%20L%20575%20526%20L%20575%20527%20L%20527%20527%20Z%20M%20527%20527%20L%20575%20527%20L%20575%20528%20L%20527%20528%20Z%20M%20527%20528%20L%20574%20528%20L%20574%20529%20L%20527%20529%20Z%20M%20527%20529%20L%20573%20529%20L%20573%20530%20L%20527%20530%20Z%20M%20526%20530%20L%20572%20530%20L%20572%20531%20L%20526%20531%20Z%20M%20526%20531%20L%20572%20531%20L%20572%20532%20L%20526%20532%20Z%20M%20526%20532%20L%20571%20532%20L%20571%20533%20L%20526%20533%20Z%20M%20526%20533%20L%20570%20533%20L%20570%20534%20L%20526%20534%20Z%20M%20526%20534%20L%20570%20534%20L%20570%20535%20L%20526%20535%20Z%20M%20526%20535%20L%20569%20535%20L%20569%20536%20L%20526%20536%20Z%20M%20526%20536%20L%20569%20536%20L%20569%20537%20L%20526%20537%20Z%20M%20526%20537%20L%20568%20537%20L%20568%20538%20L%20526%20538%20Z%20M%20526%20538%20L%20568%20538%20L%20568%20539%20L%20526%20539%20Z%20M%20526%20539%20L%20567%20539%20L%20567%20540%20L%20526%20540%20Z%20M%20526%20540%20L%20566%20540%20L%20566%20541%20L%20526%20541%20Z%20M%20526%20541%20L%20565%20541%20L%20565%20542%20L%20526%20542%20Z%20M%20526%20542%20L%20565%20542%20L%20565%20543%20L%20526%20543%20Z%20M%20526%20543%20L%20565%20543%20L%20565%20544%20L%20526%20544%20Z%20M%20526%20544%20L%20564%20544%20L%20564%20545%20L%20526%20545%20Z%20M%20526%20545%20L%20563%20545%20L%20563%20546%20L%20526%20546%20Z%20M%20526%20546%20L%20563%20546%20L%20563%20547%20L%20526%20547%20Z%20M%20526%20547%20L%20562%20547%20L%20562%20548%20L%20526%20548%20Z%20M%20526%20548%20L%20562%20548%20L%20562%20549%20L%20526%20549%20Z%20M%20526%20549%20L%20561%20549%20L%20561%20550%20L%20526%20550%20Z%20M%20526%20550%20L%20561%20550%20L%20561%20551%20L%20526%20551%20Z%20M%20526%20551%20L%20560%20551%20L%20560%20552%20L%20526%20552%20Z%20M%20526%20552%20L%20560%20552%20L%20560%20553%20L%20526%20553%20Z%20M%20526%20553%20L%20559%20553%20L%20559%20554%20L%20526%20554%20Z%20M%20526%20554%20L%20559%20554%20L%20559%20555%20L%20526%20555%20Z%20M%20526%20555%20L%20558%20555%20L%20558%20556%20L%20526%20556%20Z%20M%20526%20556%20L%20558%20556%20L%20558%20557%20L%20526%20557%20Z%20M%20526%20557%20L%20558%20557%20L%20558%20558%20L%20526%20558%20Z%20M%20526%20558%20L%20557%20558%20L%20557%20559%20L%20526%20559%20Z%20M%20526%20559%20L%20556%20559%20L%20556%20560%20L%20526%20560%20Z%20M%20526%20560%20L%20556%20560%20L%20556%20561%20L%20526%20561%20Z%20M%20526%20561%20L%20556%20561%20L%20556%20562%20L%20526%20562%20Z%20M%20526%20562%20L%20555%20562%20L%20555%20563%20L%20526%20563%20Z%20M%20526%20563%20L%20555%20563%20L%20555%20564%20L%20526%20564%20Z%20M%20526%20564%20L%20554%20564%20L%20554%20565%20L%20526%20565%20Z%20M%20527%20565%20L%20554%20565%20L%20554%20566%20L%20527%20566%20Z%20M%20527%20566%20L%20554%20566%20L%20554%20567%20L%20527%20567%20Z%20M%20527%20567%20L%20553%20567%20L%20553%20568%20L%20527%20568%20Z%20M%20527%20568%20L%20553%20568%20L%20553%20569%20L%20527%20569%20Z%20M%20527%20569%20L%20552%20569%20L%20552%20570%20L%20527%20570%20Z%20M%20527%20570%20L%20552%20570%20L%20552%20571%20L%20527%20571%20Z%20M%20527%20571%20L%20552%20571%20L%20552%20572%20L%20527%20572%20Z%20M%20527%20572%20L%20551%20572%20L%20551%20573%20L%20527%20573%20Z%20M%20527%20573%20L%20551%20573%20L%20551%20574%20L%20527%20574%20Z%20M%20528%20574%20L%20551%20574%20L%20551%20575%20L%20528%20575%20Z%20M%20528%20575%20L%20550%20575%20L%20550%20576%20L%20528%20576%20Z%20M%20528%20576%20L%20550%20576%20L%20550%20577%20L%20528%20577%20Z%20M%20528%20577%20L%20550%20577%20L%20550%20578%20L%20528%20578%20Z%20M%20528%20578%20L%20549%20578%20L%20549%20579%20L%20528%20579%20Z%20M%20528%20579%20L%20549%20579%20L%20549%20580%20L%20528%20580%20Z%20M%20528%20580%20L%20549%20580%20L%20549%20581%20L%20528%20581%20Z%20M%20529%20581%20L%20549%20581%20L%20549%20582%20L%20529%20582%20Z%20M%20529%20582%20L%20548%20582%20L%20548%20583%20L%20529%20583%20Z%20M%20529%20583%20L%20548%20583%20L%20548%20584%20L%20529%20584%20Z%20M%20529%20584%20L%20548%20584%20L%20548%20585%20L%20529%20585%20Z%20M%20529%20585%20L%20547%20585%20L%20547%20586%20L%20529%20586%20Z%20M%20529%20586%20L%20547%20586%20L%20547%20587%20L%20529%20587%20Z%20M%20530%20587%20L%20547%20587%20L%20547%20588%20L%20530%20588%20Z%20M%20530%20588%20L%20547%20588%20L%20547%20589%20L%20530%20589%20Z%20M%20530%20589%20L%20546%20589%20L%20546%20590%20L%20530%20590%20Z%20M%20530%20590%20L%20546%20590%20L%20546%20591%20L%20530%20591%20Z%20M%20531%20591%20L%20546%20591%20L%20546%20592%20L%20531%20592%20Z%20M%20531%20592%20L%20545%20592%20L%20545%20593%20L%20531%20593%20Z%20M%20531%20593%20L%20545%20593%20L%20545%20594%20L%20531%20594%20Z%20M%20531%20594%20L%20545%20594%20L%20545%20595%20L%20531%20595%20Z%20M%20531%20595%20L%20545%20595%20L%20545%20596%20L%20531%20596%20Z%20M%20531%20596%20L%20545%20596%20L%20545%20597%20L%20531%20597%20Z%20M%20532%20597%20L%20545%20597%20L%20545%20598%20L%20532%20598%20Z%20M%20532%20598%20L%20544%20598%20L%20544%20599%20L%20532%20599%20Z%20M%20532%20599%20L%20544%20599%20L%20544%20600%20L%20532%20600%20Z%20M%20533%20600%20L%20544%20600%20L%20544%20601%20L%20533%20601%20Z%20M%20533%20601%20L%20544%20601%20L%20544%20602%20L%20533%20602%20Z%20M%20533%20602%20L%20543%20602%20L%20543%20603%20L%20533%20603%20Z%20M%20533%20603%20L%20543%20603%20L%20543%20604%20L%20533%20604%20Z%20M%20533%20604%20L%20543%20604%20L%20543%20605%20L%20533%20605%20Z%20M%20534%20605%20L%20543%20605%20L%20543%20606%20L%20534%20606%20Z%20M%20534%20606%20L%20543%20606%20L%20543%20607%20L%20534%20607%20Z%20M%20535%20607%20L%20543%20607%20L%20543%20608%20L%20535%20608%20Z%20M%20535%20608%20L%20543%20608%20L%20543%20609%20L%20535%20609%20Z%20M%20535%20609%20L%20543%20609%20L%20543%20610%20L%20535%20610%20Z%20M%20535%20610%20L%20543%20610%20L%20543%20611%20L%20535%20611%20Z%20M%20536%20611%20L%20543%20611%20L%20543%20612%20L%20536%20612%20Z%20M%20536%20612%20L%20542%20612%20L%20542%20613%20L%20536%20613%20Z%20M%20536%20613%20L%20542%20613%20L%20542%20614%20L%20536%20614%20Z%20M%20537%20614%20L%20542%20614%20L%20542%20615%20L%20537%20615%20Z%20M%20537%20615%20L%20542%20615%20L%20542%20616%20L%20537%20616%20Z%20M%20537%20616%20L%20542%20616%20L%20542%20617%20L%20537%20617%20Z%20M%20538%20617%20L%20542%20617%20L%20542%20618%20L%20538%20618%20Z%20M%20538%20618%20L%20541%20618%20L%20541%20619%20L%20538%20619%20Z%20M%20538%20619%20L%20541%20619%20L%20541%20620%20L%20538%20620%20Z%20M%20539%20620%20L%20541%20620%20L%20541%20621%20L%20539%20621%20Z%20M%20539%20621%20L%20541%20621%20L%20541%20622%20L%20539%20622%20Z%20M%20540%20622%20L%20541%20622%20L%20541%20623%20L%20540%20623%20Z%22%20fill%3D%22rgb%28172%2C107%2C250%29%22%2F%3E%0D%0A%3C%2Fsvg%3E\") center / contain no-repeat}"
		].join("\n");
		const WORDMARK_TEXT = "Wediace";
		const WORDMARK_PLATE = "VIOLET";
		function wordmarkSync() {
			/* Performance: once the text+plate are injected, skip (see headerSync). */
			if (document.querySelector("[data-dsh-aqua-wordmark-plate]") !== null) return;
			const brand = document.querySelector("[class*=\"sidebarCol\"] [class*=\"brand\"]");
			if (brand === null) return;
			for (const svg of brand.querySelectorAll("svg")) svg.style.display = "none";
			let text = brand.querySelector("[data-dsh-aqua-wordmark-text]");
			if (text === null) {
				text = document.createElement("span");
				text.setAttribute("data-dsh-aqua-wordmark-text", "");
				brand.prepend(text);
			}
			if (text.textContent !== WORDMARK_TEXT) text.textContent = WORDMARK_TEXT;
			let plate = brand.querySelector("[data-dsh-aqua-wordmark-plate]");
			if (plate === null) {
				plate = document.createElement("span");
				plate.setAttribute("data-dsh-aqua-wordmark-plate", "");
				text.after(plate);
			}
			if (plate.textContent !== WORDMARK_PLATE) plate.textContent = WORDMARK_PLATE;
		}
		function headerSync() {
			/* the conversation header brand: whale svg + real-text title (探索未至之境) + pill.
			   Performance: once applied, the full-document scans below are skipped — the two
			   querySelectorAll("*") sweeps run at every mutation otherwise (streaming chat
			   mutates the DOM dozens of times a second), which is a perceptible jank source.
			   React may remount the header later; the sentinel then disappears and the scan
			   re-runs exactly once. */
			if (document.querySelector("[data-dsh-aqua-header-title]") !== null) return;
			const title = [...document.querySelectorAll("*")].find((el) => el.childElementCount === 0 && el.textContent.trim() === "探索未至之境");
			if (title === void 0) return;
			const brand = title.parentElement;
			if (brand === null) return;
			/* hide every svg in the brand row: the header brand block (whale + our butterfly) */
			let row = brand;
			for (let depth = 0; depth < 3 && row.parentElement !== null; depth += 1) {
				const svgs = row.querySelectorAll("svg");
				if (svgs.length > 0) {
					for (const svg of svgs) svg.style.display = "none";
					break;
				}
				row = row.parentElement;
			}
			if (brand.querySelector("[data-dsh-aqua-header-glyph]") === null) {
				const glyph = document.createElement("span");
				glyph.setAttribute("data-dsh-aqua-header-glyph", "");
				glyph.setAttribute("aria-hidden", "true");
				brand.prepend(glyph);
			}
			title.setAttribute("data-dsh-aqua-header-title", "");
			if (title.textContent !== "用心去阅读，感受，表达") title.textContent = "用心去阅读，感受，表达";
			/* remove the 预览版 pill */
			const pill = [...document.querySelectorAll("*")].find((el) => el.childElementCount === 0 && el.textContent.trim() === "预览版");
			if (pill !== void 0) pill.remove();
		}
		function startWordmark() {
			if (typeof document === "undefined") return () => {};
			if (document.querySelector("style[data-plugin-css=\"wediace-ui/wordmark.css\"]") === null) {
				const tag = document.createElement("style");
				tag.dataset.plugin = "wediace-ui";
				tag.dataset.pluginCss = "wediace-ui/wordmark.css";
				tag.textContent = WORDMARK_CSS;
				document.head.appendChild(tag);
			}
			wordmarkSync();
			headerSync();
			const observer = new MutationObserver(() => {
				wordmarkSync();
				headerSync();
			});
			observer.observe(document.documentElement, {
				childList: true,
				subtree: true
			});
			return () => {
				observer.disconnect();
			};
		}
		//#endregion
		//#region \0dsh-css:D:\Hermes Work\deepseek-harness\packages\client\ui-aqua\src\client\fonts.module.css.mjs
		const css = "@font-face{font-family:Space Grotesk Variable;font-style:normal;font-display:swap;font-weight:300 700;src:url(data:font/woff2;base64,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)format(\"woff2-variations\");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Space Grotesk Variable;font-style:normal;font-display:swap;font-weight:300 700;src:url(data:font/woff2;base64,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)format(\"woff2-variations\");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Space Grotesk Variable;font-style:normal;font-display:swap;font-weight:300 700;src:url(data:font/woff2;base64,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)format(\"woff2-variations\");unicode-range:U+??,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}";
		const tagId = "wediace-ui/fonts.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "wediace-ui";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		//#endregion
		//#region src/client/index.ts
		/** Required services: theme override stack plus the settings-card surfaces. */
		const inject = [
			"theme",
			"slots",
			"locale"
		];
		/**
		* Client plugin body.
		* @param ctx - client cordis context.
		*/
		function apply(ctx) {
			ctx.effect(() => startWordmark(), "ui-aqua: fixed wordmark");
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "ui-aqua: settings dictionaries");
			const layer = new AquaLayer(ctx);
			const pluginStore = createAquaRowStore();
			const appearanceStore = createAquaRowStore();
			let pluginBound;
			let appearanceBound;
			let revision = 0;
			const payload = () => {
				const s = layer.getSettings();
				return {
					enabled: layer.getEnabled(),
					mode: s.mode,
					blur: s.blur,
					frost: s.frost,
					fluidHue: s.fluidHue,
					fluidDepth: s.fluidDepth,
					bgBrightness: s.bgBrightness,
					dark: layer.getDark(),
					background: s.background,
					wallpaper: s.wallpaper,
					whale: s.whale,
					critters: s.critters,
					mesh: s.mesh,
					spotlight: s.spotlight,
					press: s.press,
					wallpaperBlur: s.wallpaperBlur,
					wallpaperFrost: s.wallpaperFrost,
					videoBlur: s.videoBlur,
					videoBrightness: s.videoBrightness
				};
			};
			// PATCH(0.2.0-rc.2): bind a store instance's actions eagerly - the
			// handle returned by defineStore has create(), not the declared actions.
			pluginBound = pluginBound ?? pluginStore.create().actions;
			appearanceBound = appearanceBound ?? appearanceStore.create().actions;
			const sync = () => {
				const next = payload();
				if (typeof pluginBound?.sync === "function") pluginBound.sync(next, revision);
				if (typeof appearanceBound?.sync === "function") appearanceBound.sync(next, revision);
				revision += 1;
			};
			ctx.effect(() => ctx.on("theme/change", () => {
				sync();
			}), "ui-aqua: appearance scheme sync");
			const pluginInjected = (actions) => {
				pluginBound = actions;
				sync();
				return { setEnabled: (enabled) => {
					layer.setEnabled(enabled);
					sync();
				} };
			};
			const appearanceInjected = (actions) => {
				appearanceBound = actions;
				sync();
				return {
					// PATCH(0.2.0-rc.2): the master switch moved into this row, so
					// its write entry has to live on this inject face too.
					setEnabled: (enabled) => {
						layer.setEnabled(enabled);
						sync();
					},
					setMode: (mode) => {
						layer.setMode(mode);
						sync();
					},
					setBlur: (blur) => {
						layer.setBlur(blur);
						sync();
					},
					setFrost: (frost) => {
						layer.setFrost(frost);
						sync();
					},
					setFluidHue: (fluidHue) => {
						layer.setFluidHue(fluidHue);
						sync();
					},
					setFluidDepth: (fluidDepth) => {
						layer.setFluidDepth(fluidDepth);
						sync();
					},
					setBgBrightness: (bgBrightness) => {
						layer.setBgBrightness(bgBrightness);
						sync();
					},
					setBackground: (background) => {
						layer.setBackground(background);
						sync();
					},
					setWallpaper: (wallpaper) => {
						layer.setWallpaper(wallpaper);
						sync();
					},
					setWhale: (whale) => {
						layer.setWhale(whale);
						sync();
					},
					setCritters: (critters) => {
						layer.setCritters(critters);
						sync();
					},
					setMesh: (mesh) => {
						layer.setMesh(mesh);
						sync();
					},
					setSpotlight: (spotlight) => {
						layer.setSpotlight(spotlight);
						sync();
					},
					setPress: (press) => {
						layer.setPress(press);
						sync();
					},
					setWallpaperBlur: (wallpaperBlur) => {
						layer.setWallpaperBlur(wallpaperBlur);
						sync();
					},
					setWallpaperFrost: (wallpaperFrost) => {
						layer.setWallpaperFrost(wallpaperFrost);
						sync();
					},
					setVideoBlur: (videoBlur) => {
						layer.setVideoBlur(videoBlur);
						sync();
					},
					setVideoBrightness: (videoBrightness) => {
						layer.setVideoBrightness(videoBrightness);
						sync();
					},
					authorizeVideo: () => {
						layer.authorizeVideo();
					}
				};
			};
			// PATCH(0.2.0-rc.2): `settings.plugin.item` no longer exists; the
			// master switch now lives at the top of the Appearance row below.
			void 0 && ctx.slots.inject("settings.general.item", () => ctx.slots.register({
				name: "settings.general.item",
				id: "aqua",
				order: 11,
				store: appearanceStore,
				locale: NS,
				inject: appearanceInjected
			}, AquaAppearanceRow));
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
