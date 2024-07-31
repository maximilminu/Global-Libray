"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAuthorDto = void 0;
var class_validator_1 = require("class-validator");
var CreateAuthorDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _surname_decorators;
    var _surname_initializers = [];
    var _surname_extraInitializers = [];
    var _legal_id_decorators;
    var _legal_id_initializers = [];
    var _legal_id_extraInitializers = [];
    var _nationality_decorators;
    var _nationality_initializers = [];
    var _nationality_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateAuthorDto() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.surname = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _surname_initializers, void 0));
                this.legal_id = (__runInitializers(this, _surname_extraInitializers), __runInitializers(this, _legal_id_initializers, void 0));
                this.nationality = (__runInitializers(this, _legal_id_extraInitializers), __runInitializers(this, _nationality_initializers, void 0));
                __runInitializers(this, _nationality_extraInitializers);
            }
            return CreateAuthorDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _surname_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _legal_id_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _nationality_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _surname_decorators, { kind: "field", name: "surname", static: false, private: false, access: { has: function (obj) { return "surname" in obj; }, get: function (obj) { return obj.surname; }, set: function (obj, value) { obj.surname = value; } }, metadata: _metadata }, _surname_initializers, _surname_extraInitializers);
            __esDecorate(null, null, _legal_id_decorators, { kind: "field", name: "legal_id", static: false, private: false, access: { has: function (obj) { return "legal_id" in obj; }, get: function (obj) { return obj.legal_id; }, set: function (obj, value) { obj.legal_id = value; } }, metadata: _metadata }, _legal_id_initializers, _legal_id_extraInitializers);
            __esDecorate(null, null, _nationality_decorators, { kind: "field", name: "nationality", static: false, private: false, access: { has: function (obj) { return "nationality" in obj; }, get: function (obj) { return obj.nationality; }, set: function (obj, value) { obj.nationality = value; } }, metadata: _metadata }, _nationality_initializers, _nationality_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateAuthorDto = CreateAuthorDto;
