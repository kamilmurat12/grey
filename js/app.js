(() => {
  var e = {
      807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
    },
    t = {};
  function s(i) {
    var a = t[i];
    if (void 0 !== a) return a.exports;
    var r = (t[i] = { exports: {} });
    return e[i](r, r.exports, s), r.exports;
  }
  (() => {
    "use strict";
    function e(e) {
      this.type = e;
    }
    (e.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          s = t.dataset.da.trim().split(","),
          i = {};
        (i.element = t),
          (i.parent = t.parentNode),
          (i.destination = document.querySelector(s[0].trim())),
          (i.breakpoint = s[1] ? s[1].trim() : "767"),
          (i.place = s[2] ? s[2].trim() : "last"),
          (i.index = this.indexInParent(i.parent, i.element)),
          this.оbjects.push(i);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, s) {
            return Array.prototype.indexOf.call(s, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const s = this.mediaQueries[t],
          i = String.prototype.split.call(s, ","),
          a = window.matchMedia(i[0]),
          r = i[1],
          l = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === r;
          });
        a.addListener(function () {
          e.mediaHandler(a, l);
        }),
          this.mediaHandler(a, l);
      }
    }),
      (e.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (e.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (e.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (e.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (e.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new e("max").init();
    let t = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
        );
      },
    };
    let i = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t));
      },
      a = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      r = (e, t = 500) => (e.hidden ? a(e, t) : i(e, t)),
      l = !0,
      n = (e = 500) => {
        let t = document.querySelector("body");
        if (l) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (l = !1),
            setTimeout(function () {
              l = !0;
            }, e);
        }
      },
      o = (e = 500) => {
        let t = document.querySelector("body");
        if (l) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (l = !1),
            setTimeout(function () {
              l = !0;
            }, e);
        }
      };
    function c(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function d(e, t) {
      const s = Array.from(e).filter(function (e, s, i) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const i = {},
            a = s.dataset[t].split(",");
          (i.value = a[0]),
            (i.type = a[1] ? a[1].trim() : "max"),
            (i.item = s),
            e.push(i);
        });
        let i = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        i = (function (e) {
          return e.filter(function (e, t, s) {
            return s.indexOf(e) === t;
          });
        })(i);
        const a = [];
        if (i.length)
          return (
            i.forEach((t) => {
              const s = t.split(","),
                i = s[1],
                r = s[2],
                l = window.matchMedia(s[0]),
                n = e.filter(function (e) {
                  if (e.value === i && e.type === r) return !0;
                });
              a.push({ itemsArray: n, matchMedia: l });
            }),
            a
          );
      }
    }
    let p = (e, t = !1, s = 500, i = 0) => {
      const a = document.querySelector(e);
      if (a) {
        let r = "",
          l = 0;
        t &&
          ((r = "header.header"), (l = document.querySelector(r).offsetHeight));
        let o = {
          speedAsDuration: !0,
          speed: s,
          header: r,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (n(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(a, "", o);
        else {
          let e = a.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
        }
        c(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else c(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    class u {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`Проснулся, построил селектов: (${e.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const s = this;
        let i = document.createElement("div");
        if (
          (i.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(i, e),
          i.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          i.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            i,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const i = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            a = this.getSelectElement(i).originalSelect;
          if ("click" === s) {
            if (!a.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(i, a, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(i);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(i, a, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === s
                  ? i.classList.add(this.selectClasses.classSelectFocus)
                  : i.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      selectsСlose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          r(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          i = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        i && i.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let i = "";
        return (
          (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (i += t ? s : ""),
          (i += t ? "</span>" : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (i += e.textContent),
          (i += t ? "</span>" : ""),
          (i += t ? "</span>" : ""),
          i
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          i = Array.from(e.options);
        if (i.length > 0) {
          let a = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (i = i.filter((e) => e.value)),
            (a += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            i.forEach((t) => {
              a += this.getOption(t, e);
            }),
            (a += t ? "</div>" : ""),
            a
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          i =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          a = e.dataset.class ? ` ${e.dataset.class}` : "",
          r = !!e.dataset.href && e.dataset.href,
          l = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let n = "";
        return (
          (n += r
            ? `<a ${l} ${i} href="${r}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${a}${s}">`
            : `<button ${i} class="${this.selectClasses.classSelectOption}${a}${s}" data-value="${e.value}" type="button">`),
          (n += this.getSelectElementContent(e)),
          (n += r ? "</a>" : "</button>"),
          n
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && m.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          a = this;
        t.addEventListener("input", function () {
          i.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && a.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && c(`[select]: ${e}`);
      }
    }
    const h = { inputMaskModule: null, selectModule: null };
    let m = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const s = t[e];
              s.parentElement.classList.remove("_form-focus"),
                s.classList.remove("_form-focus"),
                m.removeError(s),
                (s.value = s.dataset.placeholder);
            }
            let s = e.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (h.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const s = t[e].querySelector("select");
                  h.selectModule.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    function f(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function v(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : f(t[s]) && f(e[s]) && Object.keys(t[s]).length > 0 && v(e[s], t[s]);
      });
    }
    const g = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function b() {
      const e = "undefined" != typeof document ? document : {};
      return v(e, g), e;
    }
    const y = {
      document: g,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function S() {
      const e = "undefined" != typeof window ? window : {};
      return v(e, y), e;
    }
    function w(e, t = 0) {
      return setTimeout(e, t);
    }
    function E() {
      return Date.now();
    }
    function x(e, t = "x") {
      const s = S();
      let i, a, r;
      const l = (function (e) {
        const t = S();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((a = l.transform || l.webkitTransform),
            a.split(",").length > 6 &&
              (a = a
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new s.WebKitCSSMatrix("none" === a ? "" : a)))
          : ((r =
              l.MozTransform ||
              l.OTransform ||
              l.MsTransform ||
              l.msTransform ||
              l.transform ||
              l
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = r.toString().split(","))),
        "x" === t &&
          (a = s.WebKitCSSMatrix
            ? r.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (a = s.WebKitCSSMatrix
            ? r.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        a || 0
      );
    }
    function T(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function C(...e) {
      const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
      for (let a = 1; a < e.length; a += 1) {
        const r = e[a];
        if (
          null != r &&
          ((i = r),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
          for (let s = 0, i = e.length; s < i; s += 1) {
            const i = e[s],
              a = Object.getOwnPropertyDescriptor(r, i);
            void 0 !== a &&
              a.enumerable &&
              (T(t[i]) && T(r[i])
                ? r[i].__swiper__
                  ? (t[i] = r[i])
                  : C(t[i], r[i])
                : !T(t[i]) && T(r[i])
                ? ((t[i] = {}), r[i].__swiper__ ? (t[i] = r[i]) : C(t[i], r[i]))
                : (t[i] = r[i]));
          }
        }
      }
      var i;
      return t;
    }
    function A(e, t, s) {
      e.style.setProperty(t, s);
    }
    function L({ swiper: e, targetPosition: t, side: s }) {
      const i = S(),
        a = -e.translate;
      let r,
        l = null;
      const n = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(e.cssModeFrameID);
      const o = t > a ? "next" : "prev",
        c = (e, t) => ("next" === o && e >= t) || ("prev" === o && e <= t),
        d = () => {
          (r = new Date().getTime()), null === l && (l = r);
          const o = Math.max(Math.min((r - l) / n, 1), 0),
            p = 0.5 - Math.cos(o * Math.PI) / 2;
          let u = a + p * (t - a);
          if ((c(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), c(u, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: u });
              }),
              void i.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = i.requestAnimationFrame(d);
        };
      d();
    }
    function M(e) {
      return (
        e.querySelector(".swiper-slide-transform") ||
        (e.shadowEl && e.shadowEl.querySelector(".swiper-slide-transform")) ||
        e
      );
    }
    function O(e, t = "") {
      return [...e.children].filter((e) => e.matches(t));
    }
    function k(e, t = []) {
      const s = document.createElement(e);
      return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
    }
    function P(e, t) {
      return S().getComputedStyle(e, null).getPropertyValue(t);
    }
    function _(e) {
      let t,
        s = e;
      if (s) {
        for (t = 0; null !== (s = s.previousSibling); )
          1 === s.nodeType && (t += 1);
        return t;
      }
    }
    function z(e, t) {
      const s = [];
      let i = e.parentElement;
      for (; i; )
        t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
      return s;
    }
    function I(e, t, s) {
      const i = S();
      return s
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue("width" === t ? "margin-right" : "margin-top")
            ) +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom"
                )
            )
        : e.offsetWidth;
    }
    let $, D, N;
    function B() {
      return (
        $ ||
          ($ = (function () {
            const e = S(),
              t = b();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        $
      );
    }
    function W(e = {}) {
      return (
        D ||
          (D = (function ({ userAgent: e } = {}) {
            const t = B(),
              s = S(),
              i = s.navigator.platform,
              a = e || s.navigator.userAgent,
              r = { ios: !1, android: !1 },
              l = s.screen.width,
              n = s.screen.height,
              o = a.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = a.match(/(iPad).*OS\s([\d_]+)/);
            const d = a.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              u = "Win32" === i;
            let h = "MacIntel" === i;
            return (
              !c &&
                h &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${l}x${n}`) >= 0 &&
                ((c = a.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (h = !1)),
              o && !u && ((r.os = "android"), (r.android = !0)),
              (c || p || d) && ((r.os = "ios"), (r.ios = !0)),
              r
            );
          })(e)),
        D
      );
    }
    function G() {
      return (
        N ||
          (N = (function () {
            const e = S();
            let t = !1;
            function s() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (s()) {
              const s = String(e.navigator.userAgent);
              if (s.includes("Version/")) {
                const [e, i] = s
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                t = e < 16 || (16 === e && i < 2);
              }
            }
            return {
              isSafari: t || s(),
              needPerspectiveFix: t,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        N
      );
    }
    const q = {
      on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const a = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][a](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function a(...s) {
          i.off(e, a),
            a.__emitterProxy && delete a.__emitterProxy,
            t.apply(i, s);
        }
        return (a.__emitterProxy = t), i.on(e, a, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((i, a) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(a, 1);
                  });
            }),
            s)
          : s;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsListeners) return t;
        let s, i, a;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((s = e[0]), (i = e.slice(1, e.length)), (a = t))
          : ((s = e[0].events), (i = e[0].data), (a = e[0].context || t)),
          i.unshift(a);
        return (
          (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(a, [e, ...i]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(a, i);
                });
          }),
          t
        );
      },
    };
    const H = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const s = t.closest(
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
        );
        if (s) {
          const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
          t && t.remove();
        }
      },
      V = (e, t) => {
        if (!e.slides[t]) return;
        const s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading");
      },
      F = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const s = e.slides.length;
        if (!s || !t || t < 0) return;
        t = Math.min(t, s);
        const i =
            "auto" === e.params.slidesPerView
              ? e.slidesPerViewDynamic()
              : Math.ceil(e.params.slidesPerView),
          a = e.activeIndex,
          r = a + i - 1;
        if (e.params.rewind)
          for (let i = a - t; i <= r + t; i += 1) {
            const t = ((i % s) + s) % s;
            t !== a && t > r && V(e, t);
          }
        else
          for (let i = Math.max(r - t, 0); i <= Math.min(r + t, s - 1); i += 1)
            i !== a && i > r && V(e, i);
      };
    const j = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i.clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(P(i, "padding-left") || 0, 10) -
              parseInt(P(i, "padding-right") || 0, 10)),
            (s =
              s -
              parseInt(P(i, "padding-top") || 0, 10) -
              parseInt(P(i, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const i = e.params,
          {
            wrapperEl: a,
            slidesEl: r,
            size: l,
            rtlTranslate: n,
            wrongRTL: o,
          } = e,
          c = e.virtual && i.virtual.enabled,
          d = c ? e.virtual.slides.length : e.slides.length,
          p = O(r, `.${e.params.slideClass}, swiper-slide`),
          u = c ? e.virtual.slides.length : p.length;
        let h = [];
        const m = [],
          f = [];
        let v = i.slidesOffsetBefore;
        "function" == typeof v && (v = i.slidesOffsetBefore.call(e));
        let g = i.slidesOffsetAfter;
        "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
        const b = e.snapGrid.length,
          y = e.slidesGrid.length;
        let S = i.spaceBetween,
          w = -v,
          E = 0,
          x = 0;
        if (void 0 === l) return;
        "string" == typeof S &&
          S.indexOf("%") >= 0 &&
          (S = (parseFloat(S.replace("%", "")) / 100) * l),
          (e.virtualSize = -S),
          p.forEach((e) => {
            n ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          i.centeredSlides &&
            i.cssMode &&
            (A(a, "--swiper-centered-offset-before", ""),
            A(a, "--swiper-centered-offset-after", ""));
        const T = i.grid && i.grid.rows > 1 && e.grid;
        let C;
        T && e.grid.initSlides(u);
        const L =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let a = 0; a < u; a += 1) {
          let r;
          if (
            ((C = 0),
            p[a] && (r = p[a]),
            T && e.grid.updateSlide(a, r, u, t),
            !p[a] || "none" !== P(r, "display"))
          ) {
            if ("auto" === i.slidesPerView) {
              L && (p[a].style[t("width")] = "");
              const l = getComputedStyle(r),
                n = r.style.transform,
                o = r.style.webkitTransform;
              if (
                (n && (r.style.transform = "none"),
                o && (r.style.webkitTransform = "none"),
                i.roundLengths)
              )
                C = e.isHorizontal() ? I(r, "width", !0) : I(r, "height", !0);
              else {
                const e = s(l, "width"),
                  t = s(l, "padding-left"),
                  i = s(l, "padding-right"),
                  a = s(l, "margin-left"),
                  n = s(l, "margin-right"),
                  o = l.getPropertyValue("box-sizing");
                if (o && "border-box" === o) C = e + a + n;
                else {
                  const { clientWidth: s, offsetWidth: l } = r;
                  C = e + t + i + a + n + (l - s);
                }
              }
              n && (r.style.transform = n),
                o && (r.style.webkitTransform = o),
                i.roundLengths && (C = Math.floor(C));
            } else
              (C = (l - (i.slidesPerView - 1) * S) / i.slidesPerView),
                i.roundLengths && (C = Math.floor(C)),
                p[a] && (p[a].style[t("width")] = `${C}px`);
            p[a] && (p[a].swiperSlideSize = C),
              f.push(C),
              i.centeredSlides
                ? ((w = w + C / 2 + E / 2 + S),
                  0 === E && 0 !== a && (w = w - l / 2 - S),
                  0 === a && (w = w - l / 2 - S),
                  Math.abs(w) < 0.001 && (w = 0),
                  i.roundLengths && (w = Math.floor(w)),
                  x % i.slidesPerGroup == 0 && h.push(w),
                  m.push(w))
                : (i.roundLengths && (w = Math.floor(w)),
                  (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                    e.params.slidesPerGroup ==
                    0 && h.push(w),
                  m.push(w),
                  (w = w + C + S)),
              (e.virtualSize += C + S),
              (E = C),
              (x += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, l) + g),
          n &&
            o &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            (a.style.width = `${e.virtualSize + i.spaceBetween}px`),
          i.setWrapperSize &&
            (a.style[t("width")] = `${e.virtualSize + i.spaceBetween}px`),
          T && e.grid.updateWrapperSize(C, h, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < h.length; s += 1) {
            let a = h[s];
            i.roundLengths && (a = Math.floor(a)),
              h[s] <= e.virtualSize - l && t.push(a);
          }
          (h = t),
            Math.floor(e.virtualSize - l) - Math.floor(h[h.length - 1]) > 1 &&
              h.push(e.virtualSize - l);
        }
        if (c && i.loop) {
          const t = f[0] + S;
          if (i.slidesPerGroup > 1) {
            const s = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  i.slidesPerGroup
              ),
              a = t * i.slidesPerGroup;
            for (let e = 0; e < s; e += 1) h.push(h[h.length - 1] + a);
          }
          for (
            let s = 0;
            s < e.virtual.slidesBefore + e.virtual.slidesAfter;
            s += 1
          )
            1 === i.slidesPerGroup && h.push(h[h.length - 1] + t),
              m.push(m[m.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === h.length && (h = [0]), 0 !== i.spaceBetween)) {
          const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
          p.filter(
            (e, t) => !(i.cssMode && !i.loop) || t !== p.length - 1
          ).forEach((e) => {
            e.style[s] = `${S}px`;
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - l;
          h = h.map((e) => (e < 0 ? -v : e > t ? t + g : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < l)
          ) {
            const t = (l - e) / 2;
            h.forEach((e, s) => {
              h[s] = e - t;
            }),
              m.forEach((e, s) => {
                m[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: p,
            snapGrid: h,
            slidesGrid: m,
            slidesSizesGrid: f,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          A(a, "--swiper-centered-offset-before", -h[0] + "px"),
            A(
              a,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (u !== d && e.emit("slidesLengthChange"),
          h.length !== b &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          m.length !== y && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(c || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            s = e.el.classList.contains(t);
          u <= i.maxBackfaceHiddenSlides
            ? s || e.el.classList.add(t)
            : s && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let a,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const l = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              s.push(e);
            });
          else
            for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
              const e = t.activeIndex + a;
              if (e > t.slides.length && !i) break;
              s.push(l(e));
            }
        else s.push(l(t.activeIndex));
        for (a = 0; a < s.length; a += 1)
          if (void 0 !== s[a]) {
            const e = s[a].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          s = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset =
            (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
            s -
            e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: a, snapGrid: r } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let l = -e;
        a && (l = e),
          i.forEach((e) => {
            e.classList.remove(s.slideVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const n = i[e];
          let o = n.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset);
          const c =
              (l + (s.centeredSlides ? t.minTranslate() : 0) - o) /
              (n.swiperSlideSize + s.spaceBetween),
            d =
              (l - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
              (n.swiperSlideSize + s.spaceBetween),
            p = -(l - o),
            u = p + t.slidesSizesGrid[e];
          ((p >= 0 && p < t.size - 1) ||
            (u > 1 && u <= t.size) ||
            (p <= 0 && u >= t.size)) &&
            (t.visibleSlides.push(n),
            t.visibleSlidesIndexes.push(e),
            i[e].classList.add(s.slideVisibleClass)),
            (n.progress = a ? -c : c),
            (n.originalProgress = a ? -d : d);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: a, isBeginning: r, isEnd: l, progressLoop: n } = t;
        const o = r,
          c = l;
        if (0 === i) (a = 0), (r = !0), (l = !0);
        else {
          a = (e - t.minTranslate()) / i;
          const s = Math.abs(e - t.minTranslate()) < 1,
            n = Math.abs(e - t.maxTranslate()) < 1;
          (r = s || a <= 0), (l = n || a >= 1), s && (a = 0), n && (a = 1);
        }
        if (s.loop) {
          const s = t.getSlideIndexByData(0),
            i = t.getSlideIndexByData(t.slides.length - 1),
            a = t.slidesGrid[s],
            r = t.slidesGrid[i],
            l = t.slidesGrid[t.slidesGrid.length - 1],
            o = Math.abs(e);
          (n = o >= a ? (o - a) / l : (o + l - r) / l), n > 1 && (n -= 1);
        }
        Object.assign(t, {
          progress: a,
          progressLoop: n,
          isBeginning: r,
          isEnd: l,
        }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !o && t.emit("reachBeginning toEdge"),
          l && !c && t.emit("reachEnd toEdge"),
          ((o && !r) || (c && !l)) && t.emit("fromEdge"),
          t.emit("progress", a);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: s, slidesEl: i, activeIndex: a } = e,
          r = e.virtual && s.virtual.enabled,
          l = (e) => O(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
        let n;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              s.slideActiveClass,
              s.slideNextClass,
              s.slidePrevClass
            );
          }),
          r)
        )
          if (s.loop) {
            let t = a - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (n = l(`[data-swiper-slide-index="${t}"]`));
          } else n = l(`[data-swiper-slide-index="${a}"]`);
        else n = t[a];
        if (n) {
          n.classList.add(s.slideActiveClass);
          let e = (function (e, t) {
            const s = [];
            for (; e.nextElementSibling; ) {
              const i = e.nextElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(n, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
          let i = (function (e, t) {
            const s = [];
            for (; e.previousElementSibling; ) {
              const i = e.previousElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(n, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && 0 === !i && (i = t[t.length - 1]),
            i && i.classList.add(s.slidePrevClass);
        }
        e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: i,
            params: a,
            activeIndex: r,
            realIndex: l,
            snapIndex: n,
          } = t;
        let o,
          c = e;
        const d = (e) => {
          let s = e - t.virtual.slidesBefore;
          return (
            s < 0 && (s = t.virtual.slides.length + s),
            s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
            s
          );
        };
        if (
          (void 0 === c &&
            (c = (function (e) {
              const { slidesGrid: t, params: s } = e,
                i = e.rtlTranslate ? e.translate : -e.translate;
              let a;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (a = e)
                    : i >= t[e] && i < t[e + 1] && (a = e + 1)
                  : i >= t[e] && (a = e);
              return (
                s.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0), a
              );
            })(t)),
          i.indexOf(s) >= 0)
        )
          o = i.indexOf(s);
        else {
          const e = Math.min(a.slidesPerGroupSkip, c);
          o = e + Math.floor((c - e) / a.slidesPerGroup);
        }
        if ((o >= i.length && (o = i.length - 1), c === r))
          return (
            o !== n && ((t.snapIndex = o), t.emit("snapIndexChange")),
            void (
              t.params.loop &&
              t.virtual &&
              t.params.virtual.enabled &&
              (t.realIndex = d(c))
            )
          );
        let p;
        (p =
          t.virtual && a.virtual.enabled && a.loop
            ? d(c)
            : t.slides[c]
            ? parseInt(
                t.slides[c].getAttribute("data-swiper-slide-index") || c,
                10
              )
            : c),
          Object.assign(t, {
            previousSnapIndex: n,
            snapIndex: o,
            previousRealIndex: l,
            realIndex: p,
            previousIndex: r,
            activeIndex: c,
          }),
          t.initialized && F(t),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          l !== p && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          i = e.closest(`.${s.slideClass}, swiper-slide`);
        let a,
          r = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (r = !0), (a = e);
              break;
            }
        if (!i || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                i.getAttribute("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = a),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const R = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const { params: t, rtlTranslate: s, translate: i, wrapperEl: a } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let r = x(a, e);
        return (r += this.cssOverflowAdjustment()), s && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          { rtlTranslate: i, params: a, wrapperEl: r, progress: l } = s;
        let n,
          o = 0,
          c = 0;
        s.isHorizontal() ? (o = i ? -e : e) : (c = e),
          a.roundLengths && ((o = Math.floor(o)), (c = Math.floor(c))),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? o : c),
          a.cssMode
            ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -o : -c)
            : a.virtualTranslate ||
              (s.isHorizontal()
                ? (o -= s.cssOverflowAdjustment())
                : (c -= s.cssOverflowAdjustment()),
              (r.style.transform = `translate3d(${o}px, ${c}px, 0px)`));
        const d = s.maxTranslate() - s.minTranslate();
        (n = 0 === d ? 0 : (e - s.minTranslate()) / d),
          n !== l && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, a) {
        const r = this,
          { params: l, wrapperEl: n } = r;
        if (r.animating && l.preventInteractionOnTransition) return !1;
        const o = r.minTranslate(),
          c = r.maxTranslate();
        let d;
        if (
          ((d = i && e > o ? o : i && e < c ? c : e),
          r.updateProgress(d),
          l.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) n[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!r.support.smoothScroll)
              return (
                L({ swiper: r, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            n.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(d),
              s &&
                (r.emit("beforeTransitionStart", t, a),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(d),
              s &&
                (r.emit("beforeTransitionStart", t, a),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.wrapperEl.removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      s && r.emit("transitionEnd"));
                  }),
                r.wrapperEl.addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function X({ swiper: e, runCallbacks: t, direction: s, step: i }) {
      const { activeIndex: a, previousIndex: r } = e;
      let l = s;
      if (
        (l || (l = a > r ? "next" : a < r ? "prev" : "reset"),
        e.emit(`transition${i}`),
        t && a !== r)
      ) {
        if ("reset" === l) return void e.emit(`slideResetTransition${i}`);
        e.emit(`slideChangeTransition${i}`),
          "next" === l
            ? e.emit(`slideNextTransition${i}`)
            : e.emit(`slidePrevTransition${i}`);
      }
    }
    const Y = {
      slideTo: function (e = 0, t = this.params.speed, s = !0, i, a) {
        "string" == typeof e && (e = parseInt(e, 10));
        const r = this;
        let l = e;
        l < 0 && (l = 0);
        const {
          params: n,
          snapGrid: o,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: p,
          rtlTranslate: u,
          wrapperEl: h,
          enabled: m,
        } = r;
        if (
          (r.animating && n.preventInteractionOnTransition) ||
          (!m && !i && !a)
        )
          return !1;
        const f = Math.min(r.params.slidesPerGroupSkip, l);
        let v = f + Math.floor((l - f) / r.params.slidesPerGroup);
        v >= o.length && (v = o.length - 1);
        const g = -o[v];
        if (n.normalizeSlideIndex)
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * g),
              s = Math.floor(100 * c[e]),
              i = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (l = e)
                : t >= s && t < i && (l = e + 1)
              : t >= s && (l = e);
          }
        if (r.initialized && l !== p) {
          if (!r.allowSlideNext && g < r.translate && g < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            g > r.translate &&
            g > r.maxTranslate() &&
            (p || 0) !== l
          )
            return !1;
        }
        let b;
        if (
          (l !== (d || 0) && s && r.emit("beforeSlideChangeStart"),
          r.updateProgress(g),
          (b = l > p ? "next" : l < p ? "prev" : "reset"),
          (u && -g === r.translate) || (!u && g === r.translate))
        )
          return (
            r.updateActiveIndex(l),
            n.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== n.effect && r.setTranslate(g),
            "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
            !1
          );
        if (n.cssMode) {
          const e = r.isHorizontal(),
            s = u ? g : -g;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
                ? ((r._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    h[e ? "scrollLeft" : "scrollTop"] = s;
                  }))
                : (h[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._immediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                L({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(g),
          r.updateActiveIndex(l),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, i),
          r.transitionStart(s, b),
          0 === t
            ? r.transitionEnd(s, b)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.wrapperEl.removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, b));
                }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
        if ("string" == typeof e) {
          e = parseInt(e, 10);
        }
        const a = this;
        let r = e;
        return (
          a.params.loop &&
            (a.virtual && a.params.virtual.enabled
              ? (r += a.virtual.slidesBefore)
              : (r = a.getSlideIndexByData(r))),
          a.slideTo(r, t, s, i)
        );
      },
      slideNext: function (e = this.params.speed, t = !0, s) {
        const i = this,
          { enabled: a, params: r, animating: l } = i;
        if (!a) return i;
        let n = r.slidesPerGroup;
        "auto" === r.slidesPerView &&
          1 === r.slidesPerGroup &&
          r.slidesPerGroupAuto &&
          (n = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : n,
          c = i.virtual && r.virtual.enabled;
        if (r.loop) {
          if (l && !c && r.loopPreventsSliding) return !1;
          i.loopFix({ direction: "next" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
        }
        return r.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + o, e, t, s);
      },
      slidePrev: function (e = this.params.speed, t = !0, s) {
        const i = this,
          {
            params: a,
            snapGrid: r,
            slidesGrid: l,
            rtlTranslate: n,
            enabled: o,
            animating: c,
          } = i;
        if (!o) return i;
        const d = i.virtual && a.virtual.enabled;
        if (a.loop) {
          if (c && !d && a.loopPreventsSliding) return !1;
          i.loopFix({ direction: "prev" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
        }
        function p(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = p(n ? i.translate : -i.translate),
          h = r.map((e) => p(e));
        let m = r[h.indexOf(u) - 1];
        if (void 0 === m && a.cssMode) {
          let e;
          r.forEach((t, s) => {
            u >= t && (e = s);
          }),
            void 0 !== e && (m = r[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        if (
          (void 0 !== m &&
            ((f = l.indexOf(m)),
            f < 0 && (f = i.activeIndex - 1),
            "auto" === a.slidesPerView &&
              1 === a.slidesPerGroup &&
              a.slidesPerGroupAuto &&
              ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          a.rewind && i.isBeginning)
        ) {
          const a =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(a, e, t, s);
        }
        return i.slideTo(f, e, t, s);
      },
      slideReset: function (e = this.params.speed, t = !0, s) {
        return this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
        const a = this;
        let r = a.activeIndex;
        const l = Math.min(a.params.slidesPerGroupSkip, r),
          n = l + Math.floor((r - l) / a.params.slidesPerGroup),
          o = a.rtlTranslate ? a.translate : -a.translate;
        if (o >= a.snapGrid[n]) {
          const e = a.snapGrid[n];
          o - e > (a.snapGrid[n + 1] - e) * i && (r += a.params.slidesPerGroup);
        } else {
          const e = a.snapGrid[n - 1];
          o - e <= (a.snapGrid[n] - e) * i && (r -= a.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, a.slidesGrid.length - 1)),
          a.slideTo(r, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, slidesEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let a,
          r = e.clickedIndex;
        const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (a = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          )),
            t.centeredSlides
              ? r < e.loopedSlides - i / 2 ||
                r > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (r = e.getSlideIndex(
                    O(s, `${l}[data-swiper-slide-index="${a}"]`)[0]
                  )),
                  w(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - i
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  O(s, `${l}[data-swiper-slide-index="${a}"]`)[0]
                )),
                w(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const U = {
      loopCreate: function (e) {
        const t = this,
          { params: s, slidesEl: i } = t;
        if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
        O(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
          e.setAttribute("data-swiper-slide-index", t);
        }),
          t.loopFix({
            slideRealIndex: e,
            direction: s.centeredSlides ? void 0 : "next",
          });
      },
      loopFix: function ({
        slideRealIndex: e,
        slideTo: t = !0,
        direction: s,
        setTranslate: i,
        activeSlideIndex: a,
        byController: r,
        byMousewheel: l,
      } = {}) {
        const n = this;
        if (!n.params.loop) return;
        n.emit("beforeLoopFix");
        const {
          slides: o,
          allowSlidePrev: c,
          allowSlideNext: d,
          slidesEl: p,
          params: u,
        } = n;
        if (
          ((n.allowSlidePrev = !0),
          (n.allowSlideNext = !0),
          n.virtual && u.virtual.enabled)
        )
          return (
            t &&
              (u.centeredSlides || 0 !== n.snapIndex
                ? u.centeredSlides && n.snapIndex < u.slidesPerView
                  ? n.slideTo(n.virtual.slides.length + n.snapIndex, 0, !1, !0)
                  : n.snapIndex === n.snapGrid.length - 1 &&
                    n.slideTo(n.virtual.slidesBefore, 0, !1, !0)
                : n.slideTo(n.virtual.slides.length, 0, !1, !0)),
            (n.allowSlidePrev = c),
            (n.allowSlideNext = d),
            void n.emit("loopFix")
          );
        const h =
          "auto" === u.slidesPerView
            ? n.slidesPerViewDynamic()
            : Math.ceil(parseFloat(u.slidesPerView, 10));
        let m = u.loopedSlides || h;
        m % u.slidesPerGroup != 0 &&
          (m += u.slidesPerGroup - (m % u.slidesPerGroup)),
          (n.loopedSlides = m);
        const f = [],
          v = [];
        let g = n.activeIndex;
        void 0 === a
          ? (a = n.getSlideIndex(
              n.slides.filter((e) =>
                e.classList.contains(u.slideActiveClass)
              )[0]
            ))
          : (g = a);
        const b = "next" === s || !s,
          y = "prev" === s || !s;
        let S = 0,
          w = 0;
        if (a < m) {
          S = Math.max(m - a, u.slidesPerGroup);
          for (let e = 0; e < m - a; e += 1) {
            const t = e - Math.floor(e / o.length) * o.length;
            f.push(o.length - t - 1);
          }
        } else if (a > n.slides.length - 2 * m) {
          w = Math.max(a - (n.slides.length - 2 * m), u.slidesPerGroup);
          for (let e = 0; e < w; e += 1) {
            const t = e - Math.floor(e / o.length) * o.length;
            v.push(t);
          }
        }
        if (
          (y &&
            f.forEach((e) => {
              p.prepend(n.slides[e]);
            }),
          b &&
            v.forEach((e) => {
              p.append(n.slides[e]);
            }),
          n.recalcSlides(),
          "auto" === u.slidesPerView && n.updateSlides(),
          u.watchSlidesProgress && n.updateSlidesOffset(),
          t)
        )
          if (f.length > 0 && y)
            if (void 0 === e) {
              const e = n.slidesGrid[g],
                t = n.slidesGrid[g + S] - e;
              l
                ? n.setTranslate(n.translate - t)
                : (n.slideTo(g + S, 0, !1, !0),
                  i &&
                    (n.touches[n.isHorizontal() ? "startX" : "startY"] += t));
            } else i && n.slideToLoop(e, 0, !1, !0);
          else if (v.length > 0 && b)
            if (void 0 === e) {
              const e = n.slidesGrid[g],
                t = n.slidesGrid[g - w] - e;
              l
                ? n.setTranslate(n.translate - t)
                : (n.slideTo(g - w, 0, !1, !0),
                  i &&
                    (n.touches[n.isHorizontal() ? "startX" : "startY"] += t));
            } else n.slideToLoop(e, 0, !1, !0);
        if (
          ((n.allowSlidePrev = c),
          (n.allowSlideNext = d),
          n.controller && n.controller.control && !r)
        ) {
          const t = {
            slideRealIndex: e,
            slideTo: !1,
            direction: s,
            setTranslate: i,
            activeSlideIndex: a,
            byController: !0,
          };
          Array.isArray(n.controller.control)
            ? n.controller.control.forEach((e) => {
                !e.destroyed && e.params.loop && e.loopFix(t);
              })
            : n.controller.control instanceof n.constructor &&
              n.controller.control.params.loop &&
              n.controller.control.loopFix(t);
        }
        n.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { params: t, slidesEl: s } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const i = [];
        e.slides.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          i[t] = e;
        }),
          e.slides.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          i.forEach((e) => {
            s.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
    function Q(e) {
      const t = this,
        s = b(),
        i = S(),
        a = t.touchEventsData;
      a.evCache.push(e);
      const { params: r, touches: l, enabled: n } = t;
      if (!n) return;
      if (!r.simulateTouch && "mouse" === e.pointerType) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let o = e;
      o.originalEvent && (o = o.originalEvent);
      let c = o.target;
      if ("wrapper" === r.touchEventsTarget && !t.wrapperEl.contains(c)) return;
      if ("which" in o && 3 === o.which) return;
      if ("button" in o && o.button > 0) return;
      if (a.isTouched && a.isMoved) return;
      const d = !!r.noSwipingClass && "" !== r.noSwipingClass,
        p = e.composedPath ? e.composedPath() : e.path;
      d && o.target && o.target.shadowRoot && p && (c = p[0]);
      const u = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        h = !(!o.target || !o.target.shadowRoot);
      if (
        r.noSwiping &&
        (h
          ? (function (e, t = this) {
              return (function t(s) {
                if (!s || s === b() || s === S()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
              })(t);
            })(u, c)
          : c.closest(u))
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !c.closest(r.swipeHandler)) return;
      (l.currentX = o.pageX), (l.currentY = o.pageY);
      const m = l.currentX,
        f = l.currentY,
        v = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        g = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (v && (m <= g || m >= i.innerWidth - g)) {
        if ("prevent" !== v) return;
        e.preventDefault();
      }
      Object.assign(a, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (l.startX = m),
        (l.startY = f),
        (a.touchStartTime = E()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (a.allowThresholdMove = !1);
      let y = !0;
      c.matches(a.focusableElements) &&
        ((y = !1), "SELECT" === c.nodeName && (a.isTouched = !1)),
        s.activeElement &&
          s.activeElement.matches(a.focusableElements) &&
          s.activeElement !== c &&
          s.activeElement.blur();
      const w = y && t.allowTouchMove && r.touchStartPreventDefault;
      (!r.touchStartForcePreventDefault && !w) ||
        c.isContentEditable ||
        o.preventDefault(),
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !r.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", o);
    }
    function Z(e) {
      const t = b(),
        s = this,
        i = s.touchEventsData,
        { params: a, touches: r, rtlTranslate: l, enabled: n } = s;
      if (!n) return;
      if (!a.simulateTouch && "mouse" === e.pointerType) return;
      let o = e;
      if ((o.originalEvent && (o = o.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", o)
        );
      const c = i.evCache.findIndex((e) => e.pointerId === o.pointerId);
      c >= 0 && (i.evCache[c] = o);
      const d = i.evCache.length > 1 ? i.evCache[0] : o,
        p = d.pageX,
        u = d.pageY;
      if (o.preventedByNestedSwiper) return (r.startX = p), void (r.startY = u);
      if (!s.allowTouchMove)
        return (
          o.target.matches(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(r, {
              startX: p,
              startY: u,
              prevX: s.touches.currentX,
              prevY: s.touches.currentY,
              currentX: p,
              currentY: u,
            }),
            (i.touchStartTime = E()))
          )
        );
      if (a.touchReleaseOnEdges && !a.loop)
        if (s.isVertical()) {
          if (
            (u < r.startY && s.translate <= s.maxTranslate()) ||
            (u > r.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (p < r.startX && s.translate <= s.maxTranslate()) ||
          (p > r.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        o.target === t.activeElement &&
        o.target.matches(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit("touchMove", o),
        o.targetTouches && o.targetTouches.length > 1)
      )
        return;
      (r.currentX = p), (r.currentY = u);
      const h = r.currentX - r.startX,
        m = r.currentY - r.startY;
      if (s.params.threshold && Math.sqrt(h ** 2 + m ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && r.currentY === r.startY) ||
        (s.isVertical() && r.currentX === r.startX)
          ? (i.isScrolling = !1)
          : h * h + m * m >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(m), Math.abs(h))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > a.touchAngle
              : 90 - e > a.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", o),
        void 0 === i.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (i.startMoving = !0)),
        i.isScrolling ||
          (s.zoom &&
            s.params.zoom &&
            s.params.zoom.enabled &&
            i.evCache.length > 1))
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !a.cssMode && o.cancelable && o.preventDefault(),
        a.touchMoveStopPropagation && !a.nested && o.stopPropagation();
      let f = s.isHorizontal() ? h : m,
        v = s.isHorizontal()
          ? r.currentX - r.previousX
          : r.currentY - r.previousY;
      a.oneWayMovement &&
        ((f = Math.abs(f) * (l ? 1 : -1)), (v = Math.abs(v) * (l ? 1 : -1))),
        (r.diff = f),
        (f *= a.touchRatio),
        l && ((f = -f), (v = -v));
      const g = s.touchesDirection;
      (s.swipeDirection = f > 0 ? "prev" : "next"),
        (s.touchesDirection = v > 0 ? "prev" : "next");
      const y = s.params.loop && !a.cssMode;
      if (!i.isMoved) {
        if (
          (y && s.loopFix({ direction: s.swipeDirection }),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          s.wrapperEl.dispatchEvent(e);
        }
        (i.allowMomentumBounce = !1),
          !a.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", o);
      }
      let S;
      i.isMoved &&
        g !== s.touchesDirection &&
        y &&
        Math.abs(f) >= 1 &&
        (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }),
        (S = !0)),
        s.emit("sliderMove", o),
        (i.isMoved = !0),
        (i.currentTranslate = f + i.startTranslate);
      let w = !0,
        x = a.resistanceRatio;
      if (
        (a.touchReleaseOnEdges && (x = 0),
        f > 0
          ? (y &&
              !S &&
              i.currentTranslate >
                (a.centeredSlides
                  ? s.minTranslate() - s.size / 2
                  : s.minTranslate()) &&
              s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            i.currentTranslate > s.minTranslate() &&
              ((w = !1),
              a.resistance &&
                (i.currentTranslate =
                  s.minTranslate() -
                  1 +
                  (-s.minTranslate() + i.startTranslate + f) ** x)))
          : f < 0 &&
            (y &&
              !S &&
              i.currentTranslate <
                (a.centeredSlides
                  ? s.maxTranslate() + s.size / 2
                  : s.maxTranslate()) &&
              s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  s.slides.length -
                  ("auto" === a.slidesPerView
                    ? s.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(a.slidesPerView, 10))),
              }),
            i.currentTranslate < s.maxTranslate() &&
              ((w = !1),
              a.resistance &&
                (i.currentTranslate =
                  s.maxTranslate() +
                  1 -
                  (s.maxTranslate() - i.startTranslate - f) ** x))),
        w && (o.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        a.threshold > 0)
      ) {
        if (!(Math.abs(f) > a.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (i.currentTranslate = i.startTranslate),
            void (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      a.followFinger &&
        !a.cssMode &&
        (((a.freeMode && a.freeMode.enabled && s.freeMode) ||
          a.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          a.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function K(e) {
      const t = this,
        s = t.touchEventsData,
        i = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
      if (
        (i >= 0 && s.evCache.splice(i, 1),
        ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
      ) {
        if (
          !(
            "pointercancel" === e.type &&
            (t.browser.isSafari || t.browser.isWebView)
          )
        )
          return;
      }
      const {
        params: a,
        touches: r,
        rtlTranslate: l,
        slidesGrid: n,
        enabled: o,
      } = t;
      if (!o) return;
      if (!a.simulateTouch && "mouse" === e.pointerType) return;
      let c = e;
      if (
        (c.originalEvent && (c = c.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", c),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && a.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      a.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = E(),
        p = d - s.touchStartTime;
      if (t.allowClick) {
        const e = c.path || (c.composedPath && c.composedPath());
        t.updateClickedSlide((e && e[0]) || c.target),
          t.emit("tap click", c),
          p < 300 &&
            d - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", c);
      }
      if (
        ((s.lastClickTime = E()),
        w(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === r.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let u;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (u = a.followFinger
          ? l
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        a.cssMode)
      )
        return;
      if (t.params.freeMode && a.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let h = 0,
        m = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < n.length;
        e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
      ) {
        const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        void 0 !== n[e + t]
          ? u >= n[e] && u < n[e + t] && ((h = e), (m = n[e + t] - n[e]))
          : u >= n[e] && ((h = e), (m = n[n.length - 1] - n[n.length - 2]));
      }
      let f = null,
        v = null;
      a.rewind &&
        (t.isBeginning
          ? (v =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (f = 0));
      const g = (u - n[h]) / m,
        b = h < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      if (p > a.longSwipesMs) {
        if (!a.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= a.longSwipesRatio
            ? t.slideTo(a.rewind && t.isEnd ? f : h + b)
            : t.slideTo(h)),
          "prev" === t.swipeDirection &&
            (g > 1 - a.longSwipesRatio
              ? t.slideTo(h + b)
              : null !== v && g < 0 && Math.abs(g) > a.longSwipesRatio
              ? t.slideTo(v)
              : t.slideTo(h));
      } else {
        if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
          ? c.target === t.navigation.nextEl
            ? t.slideTo(h + b)
            : t.slideTo(h)
          : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : h + b),
            "prev" === t.swipeDirection && t.slideTo(null !== v ? v : h));
      }
    }
    function J() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: a, snapGrid: r } = e,
        l = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const n = l && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      n
        ? e.params.loop && !l
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
          (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = a),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function ee(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function te() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let a;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (a = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        a !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    function se(e) {
      H(this, e.target), this.update();
    }
    let ie = !1;
    function ae() {}
    const re = (e, t) => {
      const s = b(),
        { params: i, el: a, wrapperEl: r, device: l } = e,
        n = !!i.nested,
        o = "on" === t ? "addEventListener" : "removeEventListener",
        c = t;
      a[o]("pointerdown", e.onTouchStart, { passive: !1 }),
        s[o]("pointermove", e.onTouchMove, { passive: !1, capture: n }),
        s[o]("pointerup", e.onTouchEnd, { passive: !0 }),
        s[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
        s[o]("pointerout", e.onTouchEnd, { passive: !0 }),
        s[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
        (i.preventClicks || i.preventClicksPropagation) &&
          a[o]("click", e.onClick, !0),
        i.cssMode && r[o]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[c](
              l.ios || l.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              J,
              !0
            )
          : e[c]("observerUpdate", J, !0),
        a[o]("load", e.onLoad, { capture: !0 });
    };
    const le = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const ne = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function oe(e, t) {
      return function (s = {}) {
        const i = Object.keys(s)[0],
          a = s[i];
        "object" == typeof a && null !== a
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in a
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                C(t, s))
              : C(t, s))
          : C(t, s);
      };
    }
    const ce = {
        eventsEmitter: q,
        update: j,
        translate: R,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode ||
              (s.wrapperEl.style.transitionDuration = `${e}ms`),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              X({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const s = this,
              { params: i } = s;
            (s.animating = !1),
              i.cssMode ||
                (s.setTransition(0),
                X({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: Y,
        loop: U,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
              (s.style.cursor = "move"),
              (s.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                });
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = b(),
              { params: s } = e;
            (e.onTouchStart = Q.bind(e)),
              (e.onTouchMove = Z.bind(e)),
              (e.onTouchEnd = K.bind(e)),
              s.cssMode && (e.onScroll = te.bind(e)),
              (e.onClick = ee.bind(e)),
              (e.onLoad = se.bind(e)),
              ie || (t.addEventListener("touchstart", ae), (ie = !0)),
              re(e, "on");
          },
          detachEvents: function () {
            re(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: s, params: i, el: a } = e,
              r = i.breakpoints;
            if (!r || (r && 0 === Object.keys(r).length)) return;
            const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
            if (!l || e.currentBreakpoint === l) return;
            const n = (l in r ? r[l] : void 0) || e.originalParams,
              o = le(e, i),
              c = le(e, n),
              d = i.enabled;
            o && !c
              ? (a.classList.remove(
                  `${i.containerModifierClass}grid`,
                  `${i.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !o &&
                c &&
                (a.classList.add(`${i.containerModifierClass}grid`),
                ((n.grid.fill && "column" === n.grid.fill) ||
                  (!n.grid.fill && "column" === i.grid.fill)) &&
                  a.classList.add(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                const s = i[t] && i[t].enabled,
                  a = n[t] && n[t].enabled;
                s && !a && e[t].disable(), !s && a && e[t].enable();
              });
            const p = n.direction && n.direction !== i.direction,
              u = i.loop && (n.slidesPerView !== i.slidesPerView || p);
            p && s && e.changeDirection(), C(e.params, n);
            const h = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              d && !h ? e.disable() : !d && h && e.enable(),
              (e.currentBreakpoint = l),
              e.emit("_beforeBreakpoint", n),
              u && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
              e.emit("breakpoint", n);
          },
          getBreakpoint: function (e, t = "window", s) {
            if (!e || ("container" === t && !s)) return;
            let i = !1;
            const a = S(),
              r = "window" === t ? a.innerHeight : s.clientHeight,
              l = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: r * t, point: e };
                }
                return { value: e, point: e };
              });
            l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < l.length; e += 1) {
              const { point: r, value: n } = l[e];
              "window" === t
                ? a.matchMedia(`(min-width: ${n}px)`).matches && (i = r)
                : n <= s.clientWidth && (i = r);
            }
            return i || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: s, rtl: i, el: a, device: r } = e,
              l = (function (e, t) {
                const s = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((i) => {
                          e[i] && s.push(t + i);
                        })
                      : "string" == typeof e && s.push(t + e);
                  }),
                  s
                );
              })(
                [
                  "initialized",
                  s.direction,
                  { "free-mode": e.params.freeMode && s.freeMode.enabled },
                  { autoheight: s.autoHeight },
                  { rtl: i },
                  { grid: s.grid && s.grid.rows > 1 },
                  {
                    "grid-column":
                      s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                  },
                  { android: r.android },
                  { ios: r.ios },
                  { "css-mode": s.cssMode },
                  { centered: s.cssMode && s.centeredSlides },
                  { "watch-progress": s.watchSlidesProgress },
                ],
                s.containerModifierClass
              );
            t.push(...l), a.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      de = {};
    class pe {
      constructor(...e) {
        let t, s;
        1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (s = e[0])
          : ([t, s] = e),
          s || (s = {}),
          (s = C({}, s)),
          t && !s.el && (s.el = t);
        const i = b();
        if (
          s.el &&
          "string" == typeof s.el &&
          i.querySelectorAll(s.el).length > 1
        ) {
          const e = [];
          return (
            i.querySelectorAll(s.el).forEach((t) => {
              const i = C({}, s, { el: t });
              e.push(new pe(i));
            }),
            e
          );
        }
        const a = this;
        (a.__swiper__ = !0),
          (a.support = B()),
          (a.device = W({ userAgent: s.userAgent })),
          (a.browser = G()),
          (a.eventsListeners = {}),
          (a.eventsAnyListeners = []),
          (a.modules = [...a.__modules__]),
          s.modules && Array.isArray(s.modules) && a.modules.push(...s.modules);
        const r = {};
        a.modules.forEach((e) => {
          e({
            params: s,
            swiper: a,
            extendParams: oe(s, r),
            on: a.on.bind(a),
            once: a.once.bind(a),
            off: a.off.bind(a),
            emit: a.emit.bind(a),
          });
        });
        const l = C({}, ne, r);
        return (
          (a.params = C({}, l, de, s)),
          (a.originalParams = C({}, a.params)),
          (a.passedParams = C({}, s)),
          a.params &&
            a.params.on &&
            Object.keys(a.params.on).forEach((e) => {
              a.on(e, a.params.on[e]);
            }),
          a.params && a.params.onAny && a.onAny(a.params.onAny),
          Object.assign(a, {
            enabled: a.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === a.params.direction,
            isVertical: () => "vertical" === a.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: a.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          a.emit("_swiper"),
          a.params.init && a.init(),
          a
        );
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: s } = this,
          i = _(O(t, `.${s.slideClass}, swiper-slide`)[0]);
        return _(e) - i;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter(
            (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
          )[0]
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = O(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          a = (s.maxTranslate() - i) * e + i;
        s.translateTo(a, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: s,
          slides: i,
          slidesGrid: a,
          slidesSizesGrid: r,
          size: l,
          activeIndex: n,
        } = this;
        let o = 1;
        if (s.centeredSlides) {
          let e,
            t = i[n].swiperSlideSize;
          for (let s = n + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (o += 1), t > l && (e = !0));
          for (let s = n - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (o += 1), t > l && (e = !0));
        } else if ("current" === e)
          for (let e = n + 1; e < i.length; e += 1) {
            (t ? a[e] + r[e] - a[n] < l : a[e] - a[n] < l) && (o += 1);
          }
        else
          for (let e = n - 1; e >= 0; e -= 1) {
            a[n] - a[e] < l && (o += 1);
          }
        return o;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let a;
        if (
          (s.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && H(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled)
        )
          i(), e.params.autoHeight && e.updateAutoHeight();
        else {
          if (
            ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) &&
            e.isEnd &&
            !e.params.centeredSlides
          ) {
            const t =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides
                : e.slides;
            a = e.slideTo(t.length - 1, 0, !1, !0);
          } else a = e.slideTo(e.activeIndex, 0, !1, !0);
          a || i();
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
            s.el.classList.add(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if (("string" == typeof s && (s = document.querySelector(s)), !s))
          return !1;
        (s.swiper = t), s.shadowEl && (t.isElement = !0);
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let a = (() => {
          if (s && s.shadowRoot && s.shadowRoot.querySelector) {
            return s.shadowRoot.querySelector(i());
          }
          return O(s, i())[0];
        })();
        return (
          !a &&
            t.params.createElements &&
            ((a = k("div", t.params.wrapperClass)),
            s.append(a),
            O(s, `.${t.params.slideClass}`).forEach((e) => {
              a.append(e);
            })),
          Object.assign(t, {
            el: s,
            wrapperEl: a,
            slidesEl: t.isElement ? s : a,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === P(s, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === s.dir.toLowerCase() || "rtl" === P(s, "direction")),
            wrongRTL: "-webkit-box" === P(a, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete
                ? H(t, e)
                : e.addEventListener("load", (e) => {
                    H(t, e.target);
                  });
            }),
            F(t),
            (t.initialized = !0),
            F(t),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const s = this,
          { params: i, el: a, wrapperEl: r, slides: l } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              a.removeAttribute("style"),
              r.removeAttribute("style"),
              l &&
                l.length &&
                l.forEach((e) => {
                  e.classList.remove(
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        C(de, e);
      }
      static get extendedDefaults() {
        return de;
      }
      static get defaults() {
        return ne;
      }
      static installModule(e) {
        pe.prototype.__modules__ || (pe.prototype.__modules__ = []);
        const t = pe.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => pe.installModule(e)), pe)
          : (pe.installModule(e), pe);
      }
    }
    Object.keys(ce).forEach((e) => {
      Object.keys(ce[e]).forEach((t) => {
        pe.prototype[t] = ce[e][t];
      });
    }),
      pe.use([
        function ({ swiper: e, on: t, emit: s }) {
          const i = S();
          let a = null,
            r = null;
          const l = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            n = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== i.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((a = new ResizeObserver((t) => {
                  r = i.requestAnimationFrame(() => {
                    const { width: s, height: i } = e;
                    let a = s,
                      r = i;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: s, target: i }) => {
                        (i && i !== e.el) ||
                          ((a = s ? s.width : (t[0] || t).inlineSize),
                          (r = s ? s.height : (t[0] || t).blockSize));
                      }
                    ),
                      (a === s && r === i) || l();
                  });
                })),
                a.observe(e.el))
              : (i.addEventListener("resize", l),
                i.addEventListener("orientationchange", n));
          }),
            t("destroy", () => {
              r && i.cancelAnimationFrame(r),
                a && a.unobserve && e.el && (a.unobserve(e.el), (a = null)),
                i.removeEventListener("resize", l),
                i.removeEventListener("orientationchange", n);
            });
        },
        function ({ swiper: e, extendParams: t, on: s, emit: i }) {
          const a = [],
            r = S(),
            l = (t, s = {}) => {
              const l = new (r.MutationObserver || r.WebkitMutationObserver)(
                (t) => {
                  if (e.__preventObserver__) return;
                  if (1 === t.length) return void i("observerUpdate", t[0]);
                  const s = function () {
                    i("observerUpdate", t[0]);
                  };
                  r.requestAnimationFrame
                    ? r.requestAnimationFrame(s)
                    : r.setTimeout(s, 0);
                }
              );
              l.observe(t, {
                attributes: void 0 === s.attributes || s.attributes,
                childList: void 0 === s.childList || s.childList,
                characterData: void 0 === s.characterData || s.characterData,
              }),
                a.push(l);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = z(e.el);
                  for (let e = 0; e < t.length; e += 1) l(t[e]);
                }
                l(e.el, { childList: e.params.observeSlideChildren }),
                  l(e.wrapperEl, { attributes: !1 });
              }
            }),
            s("destroy", () => {
              a.forEach((e) => {
                e.disconnect();
              }),
                a.splice(0, a.length);
            });
        },
      ]);
    const ue = pe;
    function he(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function me({ swiper: e, extendParams: t, on: s, emit: i }) {
      const a = "swiper-pagination";
      let r;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${a}-bullet`,
          bulletActiveClass: `${a}-bullet-active`,
          modifierClass: `${a}-`,
          currentClass: `${a}-current`,
          totalClass: `${a}-total`,
          hiddenClass: `${a}-hidden`,
          progressbarFillClass: `${a}-progressbar-fill`,
          progressbarOppositeClass: `${a}-progressbar-opposite`,
          clickableClass: `${a}-clickable`,
          lockClass: `${a}-lock`,
          horizontalClass: `${a}-horizontal`,
          verticalClass: `${a}-vertical`,
          paginationDisabledClass: `${a}-disabled`,
        },
      }),
        (e.pagination = { el: null, bullets: [] });
      let l = 0;
      const n = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
      function o() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          (Array.isArray(e.pagination.el) && 0 === e.pagination.el.length)
        );
      }
      function c(t, s) {
        const { bulletActiveClass: i } = e.params.pagination;
        t &&
          (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          (t.classList.add(`${i}-${s}`),
          (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
            t.classList.add(`${i}-${s}-${s}`));
      }
      function d(t) {
        const s = t.target.closest(he(e.params.pagination.bulletClass));
        if (!s) return;
        t.preventDefault();
        const i = _(s) * e.params.slidesPerGroup;
        if (e.params.loop) {
          if (e.realIndex === i) return;
          const t = e.getSlideIndexByData(i),
            s = e.getSlideIndexByData(e.realIndex);
          t > e.slides.length - e.loopedSlides &&
            e.loopFix({
              direction: t > s ? "next" : "prev",
              activeSlideIndex: t,
              slideTo: !1,
            }),
            e.slideToLoop(i);
        } else e.slideTo(i);
      }
      function p() {
        const t = e.rtl,
          s = e.params.pagination;
        if (o()) return;
        let a,
          d,
          p = e.pagination.el;
        p = n(p);
        const u =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          h = e.params.loop
            ? Math.ceil(u / e.params.slidesPerGroup)
            : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((d = e.previousRealIndex || 0),
              (a =
                e.params.slidesPerGroup > 1
                  ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                  : e.realIndex))
            : void 0 !== e.snapIndex
            ? ((a = e.snapIndex), (d = e.previousSnapIndex))
            : ((d = e.previousIndex || 0), (a = e.activeIndex || 0)),
          "bullets" === s.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const i = e.pagination.bullets;
          let n, o, u;
          if (
            (s.dynamicBullets &&
              ((r = I(i[0], e.isHorizontal() ? "width" : "height", !0)),
              p.forEach((t) => {
                t.style[e.isHorizontal() ? "width" : "height"] =
                  r * (s.dynamicMainBullets + 4) + "px";
              }),
              s.dynamicMainBullets > 1 &&
                void 0 !== d &&
                ((l += a - (d || 0)),
                l > s.dynamicMainBullets - 1
                  ? (l = s.dynamicMainBullets - 1)
                  : l < 0 && (l = 0)),
              (n = Math.max(a - l, 0)),
              (o = n + (Math.min(i.length, s.dynamicMainBullets) - 1)),
              (u = (o + n) / 2)),
            i.forEach((e) => {
              const t = [
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((e) => `${s.bulletActiveClass}${e}`),
              ]
                .map((e) =>
                  "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                )
                .flat();
              e.classList.remove(...t);
            }),
            p.length > 1)
          )
            i.forEach((e) => {
              const t = _(e);
              t === a && e.classList.add(...s.bulletActiveClass.split(" ")),
                s.dynamicBullets &&
                  (t >= n &&
                    t <= o &&
                    e.classList.add(
                      ...`${s.bulletActiveClass}-main`.split(" ")
                    ),
                  t === n && c(e, "prev"),
                  t === o && c(e, "next"));
            });
          else {
            const e = i[a];
            if (
              (e && e.classList.add(...s.bulletActiveClass.split(" ")),
              s.dynamicBullets)
            ) {
              const e = i[n],
                t = i[o];
              for (let e = n; e <= o; e += 1)
                i[e] &&
                  i[e].classList.add(
                    ...`${s.bulletActiveClass}-main`.split(" ")
                  );
              c(e, "prev"), c(t, "next");
            }
          }
          if (s.dynamicBullets) {
            const a = Math.min(i.length, s.dynamicMainBullets + 4),
              l = (r * a - r) / 2 - u * r,
              n = t ? "right" : "left";
            i.forEach((t) => {
              t.style[e.isHorizontal() ? n : "top"] = `${l}px`;
            });
          }
        }
        p.forEach((t, r) => {
          if (
            ("fraction" === s.type &&
              (t.querySelectorAll(he(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(a + 1);
              }),
              t.querySelectorAll(he(s.totalClass)).forEach((e) => {
                e.textContent = s.formatFractionTotal(h);
              })),
            "progressbar" === s.type)
          ) {
            let i;
            i = s.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const r = (a + 1) / h;
            let l = 1,
              n = 1;
            "horizontal" === i ? (l = r) : (n = r),
              t.querySelectorAll(he(s.progressbarFillClass)).forEach((t) => {
                (t.style.transform = `translate3d(0,0,0) scaleX(${l}) scaleY(${n})`),
                  (t.style.transitionDuration = `${e.params.speed}ms`);
              });
          }
          "custom" === s.type && s.renderCustom
            ? ((t.innerHTML = s.renderCustom(e, a + 1, h)),
              0 === r && i("paginationRender", t))
            : (0 === r && i("paginationRender", t), i("paginationUpdate", t)),
            e.params.watchOverflow &&
              e.enabled &&
              t.classList[e.isLocked ? "add" : "remove"](s.lockClass);
        });
      }
      function u() {
        const t = e.params.pagination;
        if (o()) return;
        const s =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length;
        let a = e.pagination.el;
        a = n(a);
        let r = "";
        if ("bullets" === t.type) {
          let i = e.params.loop
            ? Math.ceil(s / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode && e.params.freeMode.enabled && i > s && (i = s);
          for (let s = 0; s < i; s += 1)
            t.renderBullet
              ? (r += t.renderBullet.call(e, s, t.bulletClass))
              : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
        }
        "fraction" === t.type &&
          (r = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          "progressbar" === t.type &&
            (r = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
          (e.pagination.bullets = []),
          a.forEach((s) => {
            "custom" !== t.type && (s.innerHTML = r || ""),
              "bullets" === t.type &&
                e.pagination.bullets.push(
                  ...s.querySelectorAll(he(t.bulletClass))
                );
          }),
          "custom" !== t.type && i("paginationRender", a[0]);
      }
      function h() {
        e.params.pagination = (function (e, t, s, i) {
          return (
            e.params.createElements &&
              Object.keys(i).forEach((a) => {
                if (!s[a] && !0 === s.auto) {
                  let r = O(e.el, `.${i[a]}`)[0];
                  r ||
                    ((r = k("div", i[a])),
                    (r.className = i[a]),
                    e.el.append(r)),
                    (s[a] = r),
                    (t[a] = r);
                }
              }),
            s
          );
        })(e, e.originalParams.pagination, e.params.pagination, {
          el: "swiper-pagination",
        });
        const t = e.params.pagination;
        if (!t.el) return;
        let s;
        "string" == typeof t.el &&
          e.isElement &&
          (s = e.el.shadowRoot.querySelector(t.el)),
          s ||
            "string" != typeof t.el ||
            (s = [...document.querySelectorAll(t.el)]),
          s || (s = t.el),
          s &&
            0 !== s.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              Array.isArray(s) &&
              s.length > 1 &&
              ((s = [...e.el.querySelectorAll(t.el)]),
              s.length > 1 &&
                (s = s.filter((t) => z(t, ".swiper")[0] === e.el)[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(e.pagination, { el: s }),
            (s = n(s)),
            s.forEach((s) => {
              "bullets" === t.type &&
                t.clickable &&
                s.classList.add(t.clickableClass),
                s.classList.add(t.modifierClass + t.type),
                s.classList.add(
                  e.isHorizontal() ? t.horizontalClass : t.verticalClass
                ),
                "bullets" === t.type &&
                  t.dynamicBullets &&
                  (s.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                  (l = 0),
                  t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type &&
                  t.progressbarOpposite &&
                  s.classList.add(t.progressbarOppositeClass),
                t.clickable && s.addEventListener("click", d),
                e.enabled || s.classList.add(t.lockClass);
            }));
      }
      function m() {
        const t = e.params.pagination;
        if (o()) return;
        let s = e.pagination.el;
        s &&
          ((s = n(s)),
          s.forEach((s) => {
            s.classList.remove(t.hiddenClass),
              s.classList.remove(t.modifierClass + t.type),
              s.classList.remove(
                e.isHorizontal() ? t.horizontalClass : t.verticalClass
              ),
              t.clickable && s.removeEventListener("click", d);
          })),
          e.pagination.bullets &&
            e.pagination.bullets.forEach((e) =>
              e.classList.remove(...t.bulletActiveClass.split(" "))
            );
      }
      s("changeDirection", () => {
        if (!e.pagination || !e.pagination.el) return;
        const t = e.params.pagination;
        let { el: s } = e.pagination;
        (s = n(s)),
          s.forEach((s) => {
            s.classList.remove(t.horizontalClass, t.verticalClass),
              s.classList.add(
                e.isHorizontal() ? t.horizontalClass : t.verticalClass
              );
          });
      }),
        s("init", () => {
          !1 === e.params.pagination.enabled ? f() : (h(), u(), p());
        }),
        s("activeIndexChange", () => {
          void 0 === e.snapIndex && p();
        }),
        s("snapIndexChange", () => {
          p();
        }),
        s("snapGridLengthChange", () => {
          u(), p();
        }),
        s("destroy", () => {
          m();
        }),
        s("enable disable", () => {
          let { el: t } = e.pagination;
          t &&
            ((t = n(t)),
            t.forEach((t) =>
              t.classList[e.enabled ? "remove" : "add"](
                e.params.pagination.lockClass
              )
            ));
        }),
        s("lock unlock", () => {
          p();
        }),
        s("click", (t, s) => {
          const a = s.target;
          let { el: r } = e.pagination;
          if (
            (Array.isArray(r) || (r = [r].filter((e) => !!e)),
            e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              r &&
              r.length > 0 &&
              !a.classList.contains(e.params.pagination.bulletClass))
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && a === e.navigation.nextEl) ||
                (e.navigation.prevEl && a === e.navigation.prevEl))
            )
              return;
            const t = r[0].classList.contains(e.params.pagination.hiddenClass);
            i(!0 === t ? "paginationShow" : "paginationHide"),
              r.forEach((t) =>
                t.classList.toggle(e.params.pagination.hiddenClass)
              );
          }
        });
      const f = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: t } = e.pagination;
        t &&
          ((t = n(t)),
          t.forEach((t) =>
            t.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          m();
      };
      Object.assign(e.pagination, {
        enable: () => {
          e.el.classList.remove(e.params.pagination.paginationDisabledClass);
          let { el: t } = e.pagination;
          t &&
            ((t = n(t)),
            t.forEach((t) =>
              t.classList.remove(e.params.pagination.paginationDisabledClass)
            )),
            h(),
            u(),
            p();
        },
        disable: f,
        render: u,
        update: p,
        init: h,
        destroy: m,
      });
    }
    function fe({ swiper: e, extendParams: t, on: s, emit: i, params: a }) {
      let r, l;
      (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        t({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        });
      let n,
        o,
        c,
        d,
        p,
        u,
        h,
        m = a && a.autoplay ? a.autoplay.delay : 3e3,
        f = a && a.autoplay ? a.autoplay.delay : 3e3,
        v = new Date().getTime;
      function g(t) {
        e &&
          !e.destroyed &&
          e.wrapperEl &&
          t.target === e.wrapperEl &&
          (e.wrapperEl.removeEventListener("transitionend", g), T());
      }
      const y = () => {
          if (e.destroyed || !e.autoplay.running) return;
          e.autoplay.paused ? (o = !0) : o && ((f = n), (o = !1));
          const t = e.autoplay.paused ? n : v + f - new Date().getTime();
          (e.autoplay.timeLeft = t),
            i("autoplayTimeLeft", t, t / m),
            (l = requestAnimationFrame(() => {
              y();
            }));
        },
        S = (t) => {
          if (e.destroyed || !e.autoplay.running) return;
          cancelAnimationFrame(l), y();
          let s = void 0 === t ? e.params.autoplay.delay : t;
          (m = e.params.autoplay.delay), (f = e.params.autoplay.delay);
          const a = (() => {
            let t;
            if (
              ((t =
                e.virtual && e.params.virtual.enabled
                  ? e.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active")
                    )[0]
                  : e.slides[e.activeIndex]),
              !t)
            )
              return;
            return parseInt(t.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(a) &&
            a > 0 &&
            void 0 === t &&
            ((s = a), (m = a), (f = a)),
            (n = s);
          const o = e.params.speed,
            c = () => {
              e &&
                !e.destroyed &&
                (e.params.autoplay.reverseDirection
                  ? !e.isBeginning || e.params.loop || e.params.rewind
                    ? (e.slidePrev(o, !0, !0), i("autoplay"))
                    : e.params.autoplay.stopOnLastSlide ||
                      (e.slideTo(e.slides.length - 1, o, !0, !0), i("autoplay"))
                  : !e.isEnd || e.params.loop || e.params.rewind
                  ? (e.slideNext(o, !0, !0), i("autoplay"))
                  : e.params.autoplay.stopOnLastSlide ||
                    (e.slideTo(0, o, !0, !0), i("autoplay")),
                e.params.cssMode &&
                  ((v = new Date().getTime()),
                  requestAnimationFrame(() => {
                    S();
                  })));
            };
          return (
            s > 0
              ? (clearTimeout(r),
                (r = setTimeout(() => {
                  c();
                }, s)))
              : requestAnimationFrame(() => {
                  c();
                }),
            s
          );
        },
        w = () => {
          (e.autoplay.running = !0), S(), i("autoplayStart");
        },
        E = () => {
          (e.autoplay.running = !1),
            clearTimeout(r),
            cancelAnimationFrame(l),
            i("autoplayStop");
        },
        x = (t, s) => {
          if (e.destroyed || !e.autoplay.running) return;
          clearTimeout(r), t || (h = !0);
          const a = () => {
            i("autoplayPause"),
              e.params.autoplay.waitForTransition
                ? e.wrapperEl.addEventListener("transitionend", g)
                : T();
          };
          if (((e.autoplay.paused = !0), s))
            return u && (n = e.params.autoplay.delay), (u = !1), void a();
          const l = n || e.params.autoplay.delay;
          (n = l - (new Date().getTime() - v)),
            (e.isEnd && n < 0 && !e.params.loop) || (n < 0 && (n = 0), a());
        },
        T = () => {
          (e.isEnd && n < 0 && !e.params.loop) ||
            e.destroyed ||
            !e.autoplay.running ||
            ((v = new Date().getTime()),
            h ? ((h = !1), S(n)) : S(),
            (e.autoplay.paused = !1),
            i("autoplayResume"));
        },
        C = () => {
          if (e.destroyed || !e.autoplay.running) return;
          const t = b();
          "hidden" === t.visibilityState && ((h = !0), x(!0)),
            "visible" === t.visibilityState && T();
        },
        A = (e) => {
          "mouse" === e.pointerType && ((h = !0), x(!0));
        },
        L = (t) => {
          "mouse" === t.pointerType && e.autoplay.paused && T();
        };
      s("init", () => {
        e.params.autoplay.enabled &&
          (e.params.autoplay.pauseOnMouseEnter &&
            (e.el.addEventListener("pointerenter", A),
            e.el.addEventListener("pointerleave", L)),
          b().addEventListener("visibilitychange", C),
          (v = new Date().getTime()),
          w());
      }),
        s("destroy", () => {
          e.el.removeEventListener("pointerenter", A),
            e.el.removeEventListener("pointerleave", L),
            b().removeEventListener("visibilitychange", C),
            e.autoplay.running && E();
        }),
        s("beforeTransitionStart", (t, s, i) => {
          !e.destroyed &&
            e.autoplay.running &&
            (i || !e.params.autoplay.disableOnInteraction ? x(!0, !0) : E());
        }),
        s("sliderFirstMove", () => {
          !e.destroyed &&
            e.autoplay.running &&
            (e.params.autoplay.disableOnInteraction
              ? E()
              : ((c = !0),
                (d = !1),
                (h = !1),
                (p = setTimeout(() => {
                  (h = !0), (d = !0), x(!0);
                }, 200))));
        }),
        s("touchEnd", () => {
          if (!e.destroyed && e.autoplay.running && c) {
            if (
              (clearTimeout(p),
              clearTimeout(r),
              e.params.autoplay.disableOnInteraction)
            )
              return (d = !1), void (c = !1);
            d && e.params.cssMode && T(), (d = !1), (c = !1);
          }
        }),
        s("slideChange", () => {
          !e.destroyed && e.autoplay.running && (u = !0);
        }),
        Object.assign(e.autoplay, { start: w, stop: E, pause: x, resume: T });
    }
    function ve(e, t) {
      const s = M(t);
      return (
        s !== t &&
          ((s.style.backfaceVisibility = "hidden"),
          (s.style["-webkit-backface-visibility"] = "hidden")),
        s
      );
    }
    function ge({
      swiper: e,
      duration: t,
      transformElements: s,
      allSlides: i,
    }) {
      const { activeIndex: a } = e;
      if (e.params.virtualTranslate && 0 !== t) {
        let t,
          r = !1;
        (t = i
          ? s
          : s.filter((t) => {
              const s = t.classList.contains("swiper-slide-transform")
                ? ((t) => {
                    if (!t.parentElement)
                      return e.slides.filter(
                        (e) => e.shadowEl && e.shadowEl === t.parentNode
                      )[0];
                    return t.parentElement;
                  })(t)
                : t;
              return e.getSlideIndex(s) === a;
            })),
          t.forEach((t) => {
            !(function (e, t) {
              t &&
                e.addEventListener("transitionend", function s(i) {
                  i.target === e &&
                    (t.call(e, i), e.removeEventListener("transitionend", s));
                });
            })(t, () => {
              if (r) return;
              if (!e || e.destroyed) return;
              (r = !0), (e.animating = !1);
              const t = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0,
              });
              e.wrapperEl.dispatchEvent(t);
            });
          });
      }
    }
    function be({ swiper: e, extendParams: t, on: s }) {
      t({ fadeEffect: { crossFade: !1 } });
      !(function (e) {
        const {
          effect: t,
          swiper: s,
          on: i,
          setTranslate: a,
          setTransition: r,
          overwriteParams: l,
          perspective: n,
          recreateShadows: o,
          getEffectParams: c,
        } = e;
        let d;
        i("beforeInit", () => {
          if (s.params.effect !== t) return;
          s.classNames.push(`${s.params.containerModifierClass}${t}`),
            n &&
              n() &&
              s.classNames.push(`${s.params.containerModifierClass}3d`);
          const e = l ? l() : {};
          Object.assign(s.params, e), Object.assign(s.originalParams, e);
        }),
          i("setTranslate", () => {
            s.params.effect === t && a();
          }),
          i("setTransition", (e, i) => {
            s.params.effect === t && r(i);
          }),
          i("transitionEnd", () => {
            if (s.params.effect === t && o) {
              if (!c || !c().slideShadows) return;
              s.slides.forEach((e) => {
                e.querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                ).forEach((e) => e.remove());
              }),
                o();
            }
          }),
          i("virtualUpdate", () => {
            s.params.effect === t &&
              (s.slides.length || (d = !0),
              requestAnimationFrame(() => {
                d && s.slides && s.slides.length && (a(), (d = !1));
              }));
          });
      })({
        effect: "fade",
        swiper: e,
        on: s,
        setTranslate: () => {
          const { slides: t } = e;
          e.params.fadeEffect;
          for (let s = 0; s < t.length; s += 1) {
            const t = e.slides[s];
            let i = -t.swiperSlideOffset;
            e.params.virtualTranslate || (i -= e.translate);
            let a = 0;
            e.isHorizontal() || ((a = i), (i = 0));
            const r = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(t.progress), 0)
                : 1 + Math.min(Math.max(t.progress, -1), 0),
              l = ve(0, t);
            (l.style.opacity = r),
              (l.style.transform = `translate3d(${i}px, ${a}px, 0px)`);
          }
        },
        setTransition: (t) => {
          const s = e.slides.map((e) => M(e));
          s.forEach((e) => {
            e.style.transitionDuration = `${t}ms`;
          }),
            ge({ swiper: e, duration: t, transformElements: s, allSlides: !0 });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
    }
    function ye() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    document.querySelector(".foto-galery__slider") &&
      new ue(".foto-galery__slider", {
        modules: [fe],
        observer: !0,
        observeParents: !0,
        slidesPerView: "auto",
        spaceBetween: 32,
        speed: 800,
        loop: !0,
        preloadImages: !1,
        lazy: !0,
        effect: "fade",
        autoplay: {
          delay: 3e3,
          disableOnInteraction: !1,
          pauseOnMouseEnter: !0,
          reverseDirection: !1,
        },
        on: {},
      }),
      document.querySelector(".bckg__slider") &&
        new ue(".bckg__slider", {
          modules: [fe],
          observer: !0,
          observeParents: !0,
          slidesPerView: 1,
          spaceBetween: 0,
          speed: 800,
          loop: !0,
          preloadImages: !1,
          lazy: !0,
          effect: "fade",
          autoplay: {
            delay: 3e3,
            disableOnInteraction: !1,
            reverseDirection: !0,
          },
          pagination: { el: ".slider1__bullet", clickable: !0 },
          on: {},
        }),
      window.addEventListener("load", function (e) {
        ye(),
          document.querySelector(".slider1__slider") &&
            new ue(".slider1__slider", {
              modules: [be, me, fe],
              effect: "fade",
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              observer: !0,
              observeParents: !0,
              slidesPerView: 1,
              spaceBetween: 0,
              speed: 800,
              loop: !0,
              preloadImages: !1,
              lazy: !0,
              pagination: { el: ".slider1__bullet", clickable: !0, on: {} },
            });
      });
    var Se = s(807);
    const we = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
    const Ee =
      "object" == typeof global && global && global.Object === Object && global;
    var xe = "object" == typeof self && self && self.Object === Object && self;
    const Te = Ee || xe || Function("return this")();
    const Ce = function () {
      return Te.Date.now();
    };
    var Ae = /\s/;
    const Le = function (e) {
      for (var t = e.length; t-- && Ae.test(e.charAt(t)); );
      return t;
    };
    var Me = /^\s+/;
    const Oe = function (e) {
      return e ? e.slice(0, Le(e) + 1).replace(Me, "") : e;
    };
    const ke = Te.Symbol;
    var Pe = Object.prototype,
      _e = Pe.hasOwnProperty,
      ze = Pe.toString,
      Ie = ke ? ke.toStringTag : void 0;
    const $e = function (e) {
      var t = _e.call(e, Ie),
        s = e[Ie];
      try {
        e[Ie] = void 0;
        var i = !0;
      } catch (e) {}
      var a = ze.call(e);
      return i && (t ? (e[Ie] = s) : delete e[Ie]), a;
    };
    var De = Object.prototype.toString;
    const Ne = function (e) {
      return De.call(e);
    };
    var Be = ke ? ke.toStringTag : void 0;
    const We = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : Be && Be in Object(e)
        ? $e(e)
        : Ne(e);
    };
    const Ge = function (e) {
      return null != e && "object" == typeof e;
    };
    const qe = function (e) {
      return "symbol" == typeof e || (Ge(e) && "[object Symbol]" == We(e));
    };
    var He = /^[-+]0x[0-9a-f]+$/i,
      Ve = /^0b[01]+$/i,
      Fe = /^0o[0-7]+$/i,
      je = parseInt;
    const Re = function (e) {
      if ("number" == typeof e) return e;
      if (qe(e)) return NaN;
      if (we(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = we(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = Oe(e);
      var s = Ve.test(e);
      return s || Fe.test(e)
        ? je(e.slice(2), s ? 2 : 8)
        : He.test(e)
        ? NaN
        : +e;
    };
    var Xe = Math.max,
      Ye = Math.min;
    const Ue = function (e, t, s) {
      var i,
        a,
        r,
        l,
        n,
        o,
        c = 0,
        d = !1,
        p = !1,
        u = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function h(t) {
        var s = i,
          r = a;
        return (i = a = void 0), (c = t), (l = e.apply(r, s));
      }
      function m(e) {
        var s = e - o;
        return void 0 === o || s >= t || s < 0 || (p && e - c >= r);
      }
      function f() {
        var e = Ce();
        if (m(e)) return v(e);
        n = setTimeout(
          f,
          (function (e) {
            var s = t - (e - o);
            return p ? Ye(s, r - (e - c)) : s;
          })(e)
        );
      }
      function v(e) {
        return (n = void 0), u && i ? h(e) : ((i = a = void 0), l);
      }
      function g() {
        var e = Ce(),
          s = m(e);
        if (((i = arguments), (a = this), (o = e), s)) {
          if (void 0 === n)
            return (function (e) {
              return (c = e), (n = setTimeout(f, t)), d ? h(e) : l;
            })(o);
          if (p) return clearTimeout(n), (n = setTimeout(f, t)), h(o);
        }
        return void 0 === n && (n = setTimeout(f, t)), l;
      }
      return (
        (t = Re(t) || 0),
        we(s) &&
          ((d = !!s.leading),
          (r = (p = "maxWait" in s) ? Xe(Re(s.maxWait) || 0, t) : r),
          (u = "trailing" in s ? !!s.trailing : u)),
        (g.cancel = function () {
          void 0 !== n && clearTimeout(n), (c = 0), (i = o = a = n = void 0);
        }),
        (g.flush = function () {
          return void 0 === n ? l : v(Ce());
        }),
        g
      );
    };
    const Qe = function (e, t, s) {
      var i = !0,
        a = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return (
        we(s) &&
          ((i = "leading" in s ? !!s.leading : i),
          (a = "trailing" in s ? !!s.trailing : a)),
        Ue(e, t, { leading: i, maxWait: t, trailing: a })
      );
    };
    var Ze = function () {
        return (
          (Ze =
            Object.assign ||
            function (e) {
              for (var t, s = 1, i = arguments.length; s < i; s++)
                for (var a in (t = arguments[s]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }),
          Ze.apply(this, arguments)
        );
      },
      Ke = null,
      Je = null;
    function et() {
      if (null === Ke) {
        if ("undefined" == typeof document) return (Ke = 0);
        var e = document.body,
          t = document.createElement("div");
        t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
        var s = t.getBoundingClientRect().right;
        e.removeChild(t), (Ke = s);
      }
      return Ke;
    }
    function tt(e) {
      return e && e.ownerDocument && e.ownerDocument.defaultView
        ? e.ownerDocument.defaultView
        : window;
    }
    function st(e) {
      return e && e.ownerDocument ? e.ownerDocument : document;
    }
    Se &&
      window.addEventListener("resize", function () {
        Je !== window.devicePixelRatio &&
          ((Je = window.devicePixelRatio), (Ke = null));
      });
    var it = function (e) {
      return Array.prototype.reduce.call(
        e,
        function (e, t) {
          var s = t.name.match(/data-simplebar-(.+)/);
          if (s) {
            var i = s[1].replace(/\W+(.)/g, function (e, t) {
              return t.toUpperCase();
            });
            switch (t.value) {
              case "true":
                e[i] = !0;
                break;
              case "false":
                e[i] = !1;
                break;
              case void 0:
                e[i] = !0;
                break;
              default:
                e[i] = t.value;
            }
          }
          return e;
        },
        {}
      );
    };
    function at(e, t) {
      var s;
      e && (s = e.classList).add.apply(s, t.split(" "));
    }
    function rt(e, t) {
      e &&
        t.split(" ").forEach(function (t) {
          e.classList.remove(t);
        });
    }
    function lt(e) {
      return ".".concat(e.split(" ").join("."));
    }
    var nt = Object.freeze({
        __proto__: null,
        getElementWindow: tt,
        getElementDocument: st,
        getOptions: it,
        addClasses: at,
        removeClasses: rt,
        classNamesToQuery: lt,
      }),
      ot = tt,
      ct = st,
      dt = it,
      pt = at,
      ut = rt,
      ht = lt,
      mt = (function () {
        function e(t, s) {
          void 0 === s && (s = {});
          var i = this;
          if (
            ((this.removePreventClickId = null),
            (this.minScrollbarWidth = 20),
            (this.stopScrollDelay = 175),
            (this.isScrolling = !1),
            (this.isMouseEntering = !1),
            (this.scrollXTicking = !1),
            (this.scrollYTicking = !1),
            (this.wrapperEl = null),
            (this.contentWrapperEl = null),
            (this.contentEl = null),
            (this.offsetEl = null),
            (this.maskEl = null),
            (this.placeholderEl = null),
            (this.heightAutoObserverWrapperEl = null),
            (this.heightAutoObserverEl = null),
            (this.rtlHelpers = null),
            (this.scrollbarWidth = 0),
            (this.resizeObserver = null),
            (this.mutationObserver = null),
            (this.elStyles = null),
            (this.isRtl = null),
            (this.mouseX = 0),
            (this.mouseY = 0),
            (this.onMouseMove = function () {}),
            (this.onWindowResize = function () {}),
            (this.onStopScrolling = function () {}),
            (this.onMouseEntered = function () {}),
            (this.onScroll = function () {
              var e = ot(i.el);
              i.scrollXTicking ||
                (e.requestAnimationFrame(i.scrollX), (i.scrollXTicking = !0)),
                i.scrollYTicking ||
                  (e.requestAnimationFrame(i.scrollY), (i.scrollYTicking = !0)),
                i.isScrolling ||
                  ((i.isScrolling = !0), pt(i.el, i.classNames.scrolling)),
                i.showScrollbar("x"),
                i.showScrollbar("y"),
                i.onStopScrolling();
            }),
            (this.scrollX = function () {
              i.axis.x.isOverflowing && i.positionScrollbar("x"),
                (i.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              i.axis.y.isOverflowing && i.positionScrollbar("y"),
                (i.scrollYTicking = !1);
            }),
            (this._onStopScrolling = function () {
              ut(i.el, i.classNames.scrolling),
                i.options.autoHide &&
                  (i.hideScrollbar("x"), i.hideScrollbar("y")),
                (i.isScrolling = !1);
            }),
            (this.onMouseEnter = function () {
              i.isMouseEntering ||
                (pt(i.el, i.classNames.mouseEntered),
                i.showScrollbar("x"),
                i.showScrollbar("y"),
                (i.isMouseEntering = !0)),
                i.onMouseEntered();
            }),
            (this._onMouseEntered = function () {
              ut(i.el, i.classNames.mouseEntered),
                i.options.autoHide &&
                  (i.hideScrollbar("x"), i.hideScrollbar("y")),
                (i.isMouseEntering = !1);
            }),
            (this._onMouseMove = function (e) {
              (i.mouseX = e.clientX),
                (i.mouseY = e.clientY),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseMoveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              i.onMouseMove.cancel(),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseLeaveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseLeaveForAxis("y"),
                (i.mouseX = -1),
                (i.mouseY = -1);
            }),
            (this._onWindowResize = function () {
              (i.scrollbarWidth = i.getScrollbarWidth()),
                i.hideNativeScrollbar();
            }),
            (this.onPointerEvent = function (e) {
              var t, s;
              i.axis.x.track.el &&
                i.axis.y.track.el &&
                i.axis.x.scrollbar.el &&
                i.axis.y.scrollbar.el &&
                ((i.axis.x.track.rect =
                  i.axis.x.track.el.getBoundingClientRect()),
                (i.axis.y.track.rect =
                  i.axis.y.track.el.getBoundingClientRect()),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  (t = i.isWithinBounds(i.axis.x.track.rect)),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  (s = i.isWithinBounds(i.axis.y.track.rect)),
                (t || s) &&
                  (e.stopPropagation(),
                  "pointerdown" === e.type &&
                    "touch" !== e.pointerType &&
                    (t &&
                      ((i.axis.x.scrollbar.rect =
                        i.axis.x.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.x.scrollbar.rect)
                        ? i.onDragStart(e, "x")
                        : i.onTrackClick(e, "x")),
                    s &&
                      ((i.axis.y.scrollbar.rect =
                        i.axis.y.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.y.scrollbar.rect)
                        ? i.onDragStart(e, "y")
                        : i.onTrackClick(e, "y")))));
            }),
            (this.drag = function (t) {
              var s, a, r, l, n, o, c, d, p, u, h;
              if (i.draggedAxis && i.contentWrapperEl) {
                var m = i.axis[i.draggedAxis].track,
                  f =
                    null !==
                      (a =
                        null === (s = m.rect) || void 0 === s
                          ? void 0
                          : s[i.axis[i.draggedAxis].sizeAttr]) && void 0 !== a
                      ? a
                      : 0,
                  v = i.axis[i.draggedAxis].scrollbar,
                  g =
                    null !==
                      (l =
                        null === (r = i.contentWrapperEl) || void 0 === r
                          ? void 0
                          : r[i.axis[i.draggedAxis].scrollSizeAttr]) &&
                    void 0 !== l
                      ? l
                      : 0,
                  b = parseInt(
                    null !==
                      (o =
                        null === (n = i.elStyles) || void 0 === n
                          ? void 0
                          : n[i.axis[i.draggedAxis].sizeAttr]) && void 0 !== o
                      ? o
                      : "0px",
                    10
                  );
                t.preventDefault(), t.stopPropagation();
                var y =
                    ("y" === i.draggedAxis ? t.pageY : t.pageX) -
                    (null !==
                      (d =
                        null === (c = m.rect) || void 0 === c
                          ? void 0
                          : c[i.axis[i.draggedAxis].offsetAttr]) && void 0 !== d
                      ? d
                      : 0) -
                    i.axis[i.draggedAxis].dragOffset,
                  S =
                    ((y =
                      "x" === i.draggedAxis && i.isRtl
                        ? (null !==
                            (u =
                              null === (p = m.rect) || void 0 === p
                                ? void 0
                                : p[i.axis[i.draggedAxis].sizeAttr]) &&
                          void 0 !== u
                            ? u
                            : 0) -
                          v.size -
                          y
                        : y) /
                      (f - v.size)) *
                    (g - b);
                "x" === i.draggedAxis &&
                  i.isRtl &&
                  (S = (
                    null === (h = e.getRtlHelpers()) || void 0 === h
                      ? void 0
                      : h.isScrollingToNegative
                  )
                    ? -S
                    : S),
                  (i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr] =
                    S);
              }
            }),
            (this.onEndDrag = function (e) {
              var t = ct(i.el),
                s = ot(i.el);
              e.preventDefault(),
                e.stopPropagation(),
                ut(i.el, i.classNames.dragging),
                t.removeEventListener("mousemove", i.drag, !0),
                t.removeEventListener("mouseup", i.onEndDrag, !0),
                (i.removePreventClickId = s.setTimeout(function () {
                  t.removeEventListener("click", i.preventClick, !0),
                    t.removeEventListener("dblclick", i.preventClick, !0),
                    (i.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.options = Ze(Ze({}, e.defaultOptions), s)),
            (this.classNames = Ze(
              Ze({}, e.defaultOptions.classNames),
              s.classNames
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
            }),
            "object" != typeof this.el || !this.el.nodeName)
          )
            throw new Error(
              "Argument passed to SimpleBar must be an HTML element instead of ".concat(
                this.el
              )
            );
          (this.onMouseMove = Qe(this._onMouseMove, 64)),
            (this.onWindowResize = Ue(this._onWindowResize, 64, {
              leading: !0,
            })),
            (this.onStopScrolling = Ue(
              this._onStopScrolling,
              this.stopScrollDelay
            )),
            (this.onMouseEntered = Ue(
              this._onMouseEntered,
              this.stopScrollDelay
            )),
            this.init();
        }
        return (
          (e.getRtlHelpers = function () {
            if (e.rtlHelpers) return e.rtlHelpers;
            var t = document.createElement("div");
            t.innerHTML =
              '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
            var s = t.firstElementChild,
              i = null == s ? void 0 : s.firstElementChild;
            if (!i) return null;
            document.body.appendChild(s), (s.scrollLeft = 0);
            var a = e.getOffset(s),
              r = e.getOffset(i);
            s.scrollLeft = -999;
            var l = e.getOffset(i);
            return (
              document.body.removeChild(s),
              (e.rtlHelpers = {
                isScrollOriginAtZero: a.left !== r.left,
                isScrollingToNegative: r.left !== l.left,
              }),
              e.rtlHelpers
            );
          }),
          (e.prototype.getScrollbarWidth = function () {
            try {
              return (this.contentWrapperEl &&
                "none" ===
                  getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                    .display) ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : et();
            } catch (e) {
              return et();
            }
          }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              s = ct(e),
              i = ot(e);
            return {
              top: t.top + (i.pageYOffset || s.documentElement.scrollTop),
              left: t.left + (i.pageXOffset || s.documentElement.scrollLeft),
            };
          }),
          (e.prototype.init = function () {
            Se &&
              (this.initDOM(),
              (this.rtlHelpers = e.getRtlHelpers()),
              (this.scrollbarWidth = this.getScrollbarWidth()),
              this.recalculate(),
              this.initListeners());
          }),
          (e.prototype.initDOM = function () {
            var e, t;
            (this.wrapperEl = this.el.querySelector(
              ht(this.classNames.wrapper)
            )),
              (this.contentWrapperEl =
                this.options.scrollableNode ||
                this.el.querySelector(ht(this.classNames.contentWrapper))),
              (this.contentEl =
                this.options.contentNode ||
                this.el.querySelector(ht(this.classNames.contentEl))),
              (this.offsetEl = this.el.querySelector(
                ht(this.classNames.offset)
              )),
              (this.maskEl = this.el.querySelector(ht(this.classNames.mask))),
              (this.placeholderEl = this.findChild(
                this.wrapperEl,
                ht(this.classNames.placeholder)
              )),
              (this.heightAutoObserverWrapperEl = this.el.querySelector(
                ht(this.classNames.heightAutoObserverWrapperEl)
              )),
              (this.heightAutoObserverEl = this.el.querySelector(
                ht(this.classNames.heightAutoObserverEl)
              )),
              (this.axis.x.track.el = this.findChild(
                this.el,
                ""
                  .concat(ht(this.classNames.track))
                  .concat(ht(this.classNames.horizontal))
              )),
              (this.axis.y.track.el = this.findChild(
                this.el,
                ""
                  .concat(ht(this.classNames.track))
                  .concat(ht(this.classNames.vertical))
              )),
              (this.axis.x.scrollbar.el =
                (null === (e = this.axis.x.track.el) || void 0 === e
                  ? void 0
                  : e.querySelector(ht(this.classNames.scrollbar))) || null),
              (this.axis.y.scrollbar.el =
                (null === (t = this.axis.y.track.el) || void 0 === t
                  ? void 0
                  : t.querySelector(ht(this.classNames.scrollbar))) || null),
              this.options.autoHide ||
                (pt(this.axis.x.scrollbar.el, this.classNames.visible),
                pt(this.axis.y.scrollbar.el, this.classNames.visible));
          }),
          (e.prototype.initListeners = function () {
            var e,
              t = this,
              s = ot(this.el);
            if (
              (this.el.addEventListener("mouseenter", this.onMouseEnter),
              this.el.addEventListener("pointerdown", this.onPointerEvent, !0),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              null === (e = this.contentWrapperEl) ||
                void 0 === e ||
                e.addEventListener("scroll", this.onScroll),
              s.addEventListener("resize", this.onWindowResize),
              this.contentEl)
            ) {
              if (window.ResizeObserver) {
                var i = !1,
                  a = s.ResizeObserver || ResizeObserver;
                (this.resizeObserver = new a(function () {
                  i &&
                    s.requestAnimationFrame(function () {
                      t.recalculate();
                    });
                })),
                  this.resizeObserver.observe(this.el),
                  this.resizeObserver.observe(this.contentEl),
                  s.requestAnimationFrame(function () {
                    i = !0;
                  });
              }
              (this.mutationObserver = new s.MutationObserver(function () {
                s.requestAnimationFrame(function () {
                  t.recalculate();
                });
              })),
                this.mutationObserver.observe(this.contentEl, {
                  childList: !0,
                  subtree: !0,
                  characterData: !0,
                });
            }
          }),
          (e.prototype.recalculate = function () {
            if (
              this.heightAutoObserverEl &&
              this.contentEl &&
              this.contentWrapperEl &&
              this.wrapperEl &&
              this.placeholderEl
            ) {
              var e = ot(this.el);
              (this.elStyles = e.getComputedStyle(this.el)),
                (this.isRtl = "rtl" === this.elStyles.direction);
              var t = this.contentEl.offsetWidth,
                s = this.heightAutoObserverEl.offsetHeight <= 1,
                i = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0,
                a = this.contentWrapperEl.offsetWidth,
                r = this.elStyles.overflowX,
                l = this.elStyles.overflowY;
              (this.contentEl.style.padding = ""
                .concat(this.elStyles.paddingTop, " ")
                .concat(this.elStyles.paddingRight, " ")
                .concat(this.elStyles.paddingBottom, " ")
                .concat(this.elStyles.paddingLeft)),
                (this.wrapperEl.style.margin = "-"
                  .concat(this.elStyles.paddingTop, " -")
                  .concat(this.elStyles.paddingRight, " -")
                  .concat(this.elStyles.paddingBottom, " -")
                  .concat(this.elStyles.paddingLeft));
              var n = this.contentEl.scrollHeight,
                o = this.contentEl.scrollWidth;
              (this.contentWrapperEl.style.height = s ? "auto" : "100%"),
                (this.placeholderEl.style.width = i
                  ? "".concat(t || o, "px")
                  : "auto"),
                (this.placeholderEl.style.height = "".concat(n, "px"));
              var c = this.contentWrapperEl.offsetHeight;
              (this.axis.x.isOverflowing = 0 !== t && o > t),
                (this.axis.y.isOverflowing = n > c),
                (this.axis.x.isOverflowing =
                  "hidden" !== r && this.axis.x.isOverflowing),
                (this.axis.y.isOverflowing =
                  "hidden" !== l && this.axis.y.isOverflowing),
                (this.axis.x.forceVisible =
                  "x" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                (this.axis.y.forceVisible =
                  "y" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                this.hideNativeScrollbar();
              var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                p = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
              (this.axis.x.isOverflowing =
                this.axis.x.isOverflowing && o > a - p),
                (this.axis.y.isOverflowing =
                  this.axis.y.isOverflowing && n > c - d),
                (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
                (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
                this.axis.x.scrollbar.el &&
                  (this.axis.x.scrollbar.el.style.width = "".concat(
                    this.axis.x.scrollbar.size,
                    "px"
                  )),
                this.axis.y.scrollbar.el &&
                  (this.axis.y.scrollbar.el.style.height = "".concat(
                    this.axis.y.scrollbar.size,
                    "px"
                  )),
                this.positionScrollbar("x"),
                this.positionScrollbar("y"),
                this.toggleTrackVisibility("x"),
                this.toggleTrackVisibility("y");
            }
          }),
          (e.prototype.getScrollbarSize = function (e) {
            var t, s;
            if (
              (void 0 === e && (e = "y"),
              !this.axis[e].isOverflowing || !this.contentEl)
            )
              return 0;
            var i,
              a = this.contentEl[this.axis[e].scrollSizeAttr],
              r =
                null !==
                  (s =
                    null === (t = this.axis[e].track.el) || void 0 === t
                      ? void 0
                      : t[this.axis[e].offsetSizeAttr]) && void 0 !== s
                  ? s
                  : 0,
              l = r / a;
            return (
              (i = Math.max(~~(l * r), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (i = Math.min(i, this.options.scrollbarMaxSize)),
              i
            );
          }),
          (e.prototype.positionScrollbar = function (t) {
            var s, i, a;
            void 0 === t && (t = "y");
            var r = this.axis[t].scrollbar;
            if (
              this.axis[t].isOverflowing &&
              this.contentWrapperEl &&
              r.el &&
              this.elStyles
            ) {
              var l = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                n =
                  (null === (s = this.axis[t].track.el) || void 0 === s
                    ? void 0
                    : s[this.axis[t].offsetSizeAttr]) || 0,
                o = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
              (c =
                "x" === t &&
                this.isRtl &&
                (null === (i = e.getRtlHelpers()) || void 0 === i
                  ? void 0
                  : i.isScrollOriginAtZero)
                  ? -c
                  : c),
                "x" === t &&
                  this.isRtl &&
                  (c = (
                    null === (a = e.getRtlHelpers()) || void 0 === a
                      ? void 0
                      : a.isScrollingToNegative
                  )
                    ? c
                    : -c);
              var d = c / (l - o),
                p = ~~((n - r.size) * d);
              (p = "x" === t && this.isRtl ? -p + (n - r.size) : p),
                (r.el.style.transform =
                  "x" === t
                    ? "translate3d(".concat(p, "px, 0, 0)")
                    : "translate3d(0, ".concat(p, "px, 0)"));
            }
          }),
          (e.prototype.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              s = this.axis[e].scrollbar.el;
            t &&
              s &&
              this.contentWrapperEl &&
              (this.axis[e].isOverflowing || this.axis[e].forceVisible
                ? ((t.style.visibility = "visible"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "scroll"),
                  this.el.classList.add(
                    "".concat(this.classNames.scrollable, "-").concat(e)
                  ))
                : ((t.style.visibility = "hidden"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "hidden"),
                  this.el.classList.remove(
                    "".concat(this.classNames.scrollable, "-").concat(e)
                  )),
              this.axis[e].isOverflowing
                ? (s.style.display = "block")
                : (s.style.display = "none"));
          }),
          (e.prototype.showScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                !this.axis[e].scrollbar.isVisible &&
                (pt(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !0));
          }),
          (e.prototype.hideScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                this.axis[e].scrollbar.isVisible &&
                (ut(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !1));
          }),
          (e.prototype.hideNativeScrollbar = function () {
            this.offsetEl &&
              ((this.offsetEl.style[this.isRtl ? "left" : "right"] =
                this.axis.y.isOverflowing || this.axis.y.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"));
          }),
          (e.prototype.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e];
            t.track.el &&
              t.scrollbar.el &&
              ((t.track.rect = t.track.el.getBoundingClientRect()),
              (t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(t.track.rect)
                ? (this.showScrollbar(e),
                  pt(t.track.el, this.classNames.hover),
                  this.isWithinBounds(t.scrollbar.rect)
                    ? pt(t.scrollbar.el, this.classNames.hover)
                    : ut(t.scrollbar.el, this.classNames.hover))
                : (ut(t.track.el, this.classNames.hover),
                  this.options.autoHide && this.hideScrollbar(e)));
          }),
          (e.prototype.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              ut(this.axis[e].track.el, this.classNames.hover),
              ut(this.axis[e].scrollbar.el, this.classNames.hover),
              this.options.autoHide && this.hideScrollbar(e);
          }),
          (e.prototype.onDragStart = function (e, t) {
            var s;
            void 0 === t && (t = "y");
            var i = ct(this.el),
              a = ot(this.el),
              r = this.axis[t].scrollbar,
              l = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset =
              l -
              ((null === (s = r.rect) || void 0 === s
                ? void 0
                : s[this.axis[t].offsetAttr]) || 0)),
              (this.draggedAxis = t),
              pt(this.el, this.classNames.dragging),
              i.addEventListener("mousemove", this.drag, !0),
              i.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (i.addEventListener("click", this.preventClick, !0),
                  i.addEventListener("dblclick", this.preventClick, !0))
                : (a.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (e.prototype.onTrackClick = function (e, t) {
            var s,
              i,
              a,
              r,
              l = this;
            void 0 === t && (t = "y");
            var n = this.axis[t];
            if (
              this.options.clickOnTrack &&
              n.scrollbar.el &&
              this.contentWrapperEl
            ) {
              e.preventDefault();
              var o = ot(this.el);
              this.axis[t].scrollbar.rect =
                n.scrollbar.el.getBoundingClientRect();
              var c =
                  null !==
                    (i =
                      null === (s = this.axis[t].scrollbar.rect) || void 0 === s
                        ? void 0
                        : s[this.axis[t].offsetAttr]) && void 0 !== i
                    ? i
                    : 0,
                d = parseInt(
                  null !==
                    (r =
                      null === (a = this.elStyles) || void 0 === a
                        ? void 0
                        : a[this.axis[t].sizeAttr]) && void 0 !== r
                    ? r
                    : "0px",
                  10
                ),
                p = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                u =
                  ("y" === t ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1,
                h = -1 === u ? p - d : p + d,
                m = function () {
                  l.contentWrapperEl &&
                    (-1 === u
                      ? p > h &&
                        ((p -= 40),
                        (l.contentWrapperEl[l.axis[t].scrollOffsetAttr] = p),
                        o.requestAnimationFrame(m))
                      : p < h &&
                        ((p += 40),
                        (l.contentWrapperEl[l.axis[t].scrollOffsetAttr] = p),
                        o.requestAnimationFrame(m)));
                };
              m();
            }
          }),
          (e.prototype.getContentElement = function () {
            return this.contentEl;
          }),
          (e.prototype.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (e.prototype.removeListeners = function () {
            var e = ot(this.el);
            this.el.removeEventListener("mouseenter", this.onMouseEnter),
              this.el.removeEventListener(
                "pointerdown",
                this.onPointerEvent,
                !0
              ),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll
                ),
              e.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.onMouseMove.cancel(),
              this.onWindowResize.cancel(),
              this.onStopScrolling.cancel(),
              this.onMouseEntered.cancel();
          }),
          (e.prototype.unMount = function () {
            this.removeListeners();
          }),
          (e.prototype.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (e.prototype.findChild = function (e, t) {
            var s =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return s.call(e, t);
            })[0];
          }),
          (e.rtlHelpers = null),
          (e.defaultOptions = {
            forceVisible: !1,
            clickOnTrack: !0,
            scrollbarMinSize: 25,
            scrollbarMaxSize: 0,
            ariaLabel: "scrollable content",
            classNames: {
              contentEl: "simplebar-content",
              contentWrapper: "simplebar-content-wrapper",
              offset: "simplebar-offset",
              mask: "simplebar-mask",
              wrapper: "simplebar-wrapper",
              placeholder: "simplebar-placeholder",
              scrollbar: "simplebar-scrollbar",
              track: "simplebar-track",
              heightAutoObserverWrapperEl:
                "simplebar-height-auto-observer-wrapper",
              heightAutoObserverEl: "simplebar-height-auto-observer",
              visible: "simplebar-visible",
              horizontal: "simplebar-horizontal",
              vertical: "simplebar-vertical",
              hover: "simplebar-hover",
              dragging: "simplebar-dragging",
              scrolling: "simplebar-scrolling",
              scrollable: "simplebar-scrollable",
              mouseEntered: "simplebar-mouse-entered",
            },
            scrollableNode: null,
            contentNode: null,
            autoHide: !0,
          }),
          (e.getOptions = dt),
          (e.helpers = nt),
          e
        );
      })(),
      ft = function (e, t) {
        return (
          (ft =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            }),
          ft(e, t)
        );
      };
    var vt = mt.helpers,
      gt = vt.getOptions,
      bt = vt.addClasses,
      yt = (function (e) {
        function t() {
          for (var s = [], i = 0; i < arguments.length; i++)
            s[i] = arguments[i];
          var a = e.apply(this, s) || this;
          return t.instances.set(s[0], a), a;
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function s() {
              this.constructor = e;
            }
            ft(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((s.prototype = t.prototype), new s()));
          })(t, e),
          (t.initDOMLoadedElements = function () {
            document.removeEventListener(
              "DOMContentLoaded",
              this.initDOMLoadedElements
            ),
              window.removeEventListener("load", this.initDOMLoadedElements),
              Array.prototype.forEach.call(
                document.querySelectorAll("[data-simplebar]"),
                function (e) {
                  "init" === e.getAttribute("data-simplebar") ||
                    t.instances.has(e) ||
                    new t(e, gt(e.attributes));
                }
              );
          }),
          (t.removeObserver = function () {
            var e;
            null === (e = t.globalObserver) || void 0 === e || e.disconnect();
          }),
          (t.prototype.initDOM = function () {
            var e,
              t,
              s,
              i = this;
            if (
              !Array.prototype.filter.call(this.el.children, function (e) {
                return e.classList.contains(i.classNames.wrapper);
              }).length
            ) {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  bt(this.wrapperEl, this.classNames.wrapper),
                  bt(this.contentWrapperEl, this.classNames.contentWrapper),
                  bt(this.offsetEl, this.classNames.offset),
                  bt(this.maskEl, this.classNames.mask),
                  bt(this.contentEl, this.classNames.contentEl),
                  bt(this.placeholderEl, this.classNames.placeholder),
                  bt(
                    this.heightAutoObserverWrapperEl,
                    this.classNames.heightAutoObserverWrapperEl
                  ),
                  bt(
                    this.heightAutoObserverEl,
                    this.classNames.heightAutoObserverEl
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl),
                null === (e = this.contentWrapperEl) ||
                  void 0 === e ||
                  e.setAttribute("tabindex", "0"),
                null === (t = this.contentWrapperEl) ||
                  void 0 === t ||
                  t.setAttribute("role", "region"),
                null === (s = this.contentWrapperEl) ||
                  void 0 === s ||
                  s.setAttribute("aria-label", this.options.ariaLabel);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var a = document.createElement("div"),
                r = document.createElement("div");
              bt(a, this.classNames.track),
                bt(r, this.classNames.scrollbar),
                a.appendChild(r),
                (this.axis.x.track.el = a.cloneNode(!0)),
                bt(this.axis.x.track.el, this.classNames.horizontal),
                (this.axis.y.track.el = a.cloneNode(!0)),
                bt(this.axis.y.track.el, this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            mt.prototype.initDOM.call(this),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.prototype.unMount = function () {
            mt.prototype.unMount.call(this), t.instances.delete(this.el);
          }),
          (t.initHtmlApi = function () {
            (this.initDOMLoadedElements =
              this.initDOMLoadedElements.bind(this)),
              "undefined" != typeof MutationObserver &&
                ((this.globalObserver = new MutationObserver(
                  t.handleMutations
                )),
                this.globalObserver.observe(document, {
                  childList: !0,
                  subtree: !0,
                })),
              "complete" === document.readyState ||
              ("loading" !== document.readyState &&
                !document.documentElement.doScroll)
                ? window.setTimeout(this.initDOMLoadedElements)
                : (document.addEventListener(
                    "DOMContentLoaded",
                    this.initDOMLoadedElements
                  ),
                  window.addEventListener("load", this.initDOMLoadedElements));
          }),
          (t.handleMutations = function (e) {
            e.forEach(function (e) {
              e.addedNodes.forEach(function (e) {
                1 === e.nodeType &&
                  (e.hasAttribute("data-simplebar")
                    ? !t.instances.has(e) &&
                      document.documentElement.contains(e) &&
                      new t(e, gt(e.attributes))
                    : e
                        .querySelectorAll("[data-simplebar]")
                        .forEach(function (e) {
                          "init" !== e.getAttribute("data-simplebar") &&
                            !t.instances.has(e) &&
                            document.documentElement.contains(e) &&
                            new t(e, gt(e.attributes));
                        }));
              }),
                e.removedNodes.forEach(function (e) {
                  1 === e.nodeType &&
                    ("init" === e.getAttribute("data-simplebar")
                      ? t.instances.has(e) &&
                        !document.documentElement.contains(e) &&
                        t.instances.get(e).unMount()
                      : Array.prototype.forEach.call(
                          e.querySelectorAll('[data-simplebar="init"]'),
                          function (e) {
                            t.instances.has(e) &&
                              !document.documentElement.contains(e) &&
                              t.instances.get(e).unMount();
                          }
                        ));
                });
            });
          }),
          (t.instances = new WeakMap()),
          t
        );
      })(mt);
    Se && yt.initHtmlApi();
    let St = !1;
    setTimeout(() => {
      if (St) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      t.any() && document.documentElement.classList.add("touch"),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            l &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? n(e)
                  : o(e);
              })(),
              document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        if (document.querySelectorAll("[data-fullscreen]").length && t.any()) {
          function e() {
            let e = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${e}px`);
          }
          window.addEventListener("resize", e), e();
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-showmore]");
        let t, s;
        function r(e) {
          e.forEach((e) => {
            l(e.itemsArray, e.matchMedia);
          });
        }
        function l(e, t) {
          e.forEach((e) => {
            !(function (e, t = !1) {
              e = t ? e.item : e;
              const s = e.querySelector("[data-showmore-content]"),
                r = e.querySelector("[data-showmore-button]"),
                l = n(e, s);
              (t.matches || !t) &&
              l <
                (function (e) {
                  let t = e.offsetHeight;
                  e.style.removeProperty("height");
                  let s = e.offsetHeight;
                  return (e.style.height = `${t}px`), s;
                })(s)
                ? (i(s, 0, l), (r.hidden = !1))
                : (a(s, 0, l), (r.hidden = !0));
            })(e, t);
          });
        }
        function n(e, t) {
          let s = 0;
          if ("items" === (e.dataset.showmore ? e.dataset.showmore : "size")) {
            const e = t.dataset.showmoreContent ? t.dataset.showmoreContent : 3,
              i = t.children;
            for (let t = 1; t < i.length; t++) {
              if (((s += i[t - 1].offsetHeight), t === e)) break;
            }
          } else {
            s = t.dataset.showmoreContent ? t.dataset.showmoreContent : 150;
          }
          return s;
        }
        function o(e) {
          const o = e.target,
            c = e.type;
          if ("click" === c) {
            if (o.closest("[data-showmore-button]")) {
              const e = o
                  .closest("[data-showmore-button]")
                  .closest("[data-showmore]"),
                t = e.querySelector("[data-showmore-content]"),
                s = e.dataset.showmoreButton ? e.dataset.showmoreButton : "500",
                r = n(e, t);
              t.classList.contains("_slide") ||
                (e.classList.contains("_showmore-active")
                  ? i(t, s, r)
                  : a(t, s, r),
                e.classList.toggle("_showmore-active"));
            }
          } else "resize" === c && (t.length && l(t), s.length && r(s));
        }
        e.length &&
          ((t = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.showmoreMedia;
          })),
          t.length && l(t),
          document.addEventListener("click", o),
          window.addEventListener("resize", o),
          (s = d(e, "showmoreMedia")),
          s &&
            s.length &&
            (s.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                l(e.itemsArray, e.matchMedia);
              });
            }),
            r(s)));
      })(),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              m.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && m.validateInput(t));
          });
      })(),
      (function (e) {
        const t = document.forms;
        if (t.length)
          for (const e of t)
            e.addEventListener("submit", function (e) {
              s(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                m.formClean(t);
              });
        async function s(t, s) {
          if (0 === (e ? m.getErrors(t) : 0)) {
            if (t.hasAttribute("data-ajax")) {
              s.preventDefault();
              const e = t.getAttribute("action")
                  ? t.getAttribute("action").trim()
                  : "#",
                a = t.getAttribute("method")
                  ? t.getAttribute("method").trim()
                  : "GET",
                r = new FormData(t);
              t.classList.add("_sending");
              const l = await fetch(e, { method: a, body: r });
              if (l.ok) {
                await l.json();
                t.classList.remove("_sending"), i(t);
              } else alert("Ошибка"), t.classList.remove("_sending");
            } else t.hasAttribute("data-dev") && (s.preventDefault(), i(t));
          } else {
            s.preventDefault();
            const e = t.querySelector("._form-error");
            e && t.hasAttribute("data-goto-error") && p(e, !0, 1e3);
          }
        }
        function i(e) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: e } })
          ),
            m.formClean(e),
            c(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      (h.selectModule = new u({})),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const s = t.closest("[data-goto]"),
                i = s.dataset.goto ? s.dataset.goto : "",
                a = !!s.hasAttribute("data-goto-header"),
                r = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
              p(i, a, r), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              s = t.target;
            if ("navigator" === s.dataset.watch) {
              const e = s.id,
                i =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="${e}"]`));
              t.isIntersecting
                ? i && i.classList.add("_navigator-active")
                : i && i.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e);
      })(),
      (function () {
        St = !0;
        const e = document.querySelector("header.header"),
          t = e.hasAttribute("data-scroll-show"),
          s = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
          i = e.dataset.scroll ? e.dataset.scroll : 1;
        let a,
          r = 0;
        document.addEventListener("windowScroll", function (l) {
          const n = window.scrollY;
          clearTimeout(a),
            n >= i
              ? (!e.classList.contains("_header-scroll") &&
                  e.classList.add("_header-scroll"),
                t &&
                  (n > r
                    ? e.classList.contains("_header-show") &&
                      e.classList.remove("_header-show")
                    : !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show"),
                  (a = setTimeout(() => {
                    !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show");
                  }, s))))
              : (e.classList.contains("_header-scroll") &&
                  e.classList.remove("_header-scroll"),
                t &&
                  e.classList.contains("_header-show") &&
                  e.classList.remove("_header-show")),
            (r = n <= 0 ? 0 : n);
        });
      })();
  })();
})();
