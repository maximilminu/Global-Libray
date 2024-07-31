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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
var class_validator_1 = require("class-validator");
var book_entity_1 = require("../../books/entities/book.entity");
var typeorm_1 = require("typeorm");
var Publisher = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('publishers')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _address_decorators;
    var _address_initializers = [];
    var _address_extraInitializers = [];
    var _tax_number_decorators;
    var _tax_number_initializers = [];
    var _tax_number_extraInitializers = [];
    var _books_decorators;
    var _books_initializers = [];
    var _books_extraInitializers = [];
    var Publisher = _classThis = /** @class */ (function () {
        function Publisher_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.address = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _address_initializers, void 0));
            this.tax_number = (__runInitializers(this, _address_extraInitializers), __runInitializers(this, _tax_number_initializers, void 0));
            this.books = (__runInitializers(this, _tax_number_extraInitializers), __runInitializers(this, _books_initializers, void 0));
            __runInitializers(this, _books_extraInitializers);
        }
        return Publisher_1;
    }());
    __setFunctionName(_classThis, "Publisher");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)(), (0, class_validator_1.IsNotEmpty)()];
        _address_decorators = [(0, typeorm_1.Column)(), (0, class_validator_1.IsNotEmpty)()];
        _tax_number_decorators = [(0, typeorm_1.Column)(), (0, class_validator_1.IsNotEmpty)()];
        _books_decorators = [(0, typeorm_1.OneToMany)(function () { return book_entity_1.Book; }, function (book) { return book.publisher; }), (0, class_validator_1.IsNotEmpty)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: function (obj) { return "address" in obj; }, get: function (obj) { return obj.address; }, set: function (obj, value) { obj.address = value; } }, metadata: _metadata }, _address_initializers, _address_extraInitializers);
        __esDecorate(null, null, _tax_number_decorators, { kind: "field", name: "tax_number", static: false, private: false, access: { has: function (obj) { return "tax_number" in obj; }, get: function (obj) { return obj.tax_number; }, set: function (obj, value) { obj.tax_number = value; } }, metadata: _metadata }, _tax_number_initializers, _tax_number_extraInitializers);
        __esDecorate(null, null, _books_decorators, { kind: "field", name: "books", static: false, private: false, access: { has: function (obj) { return "books" in obj; }, get: function (obj) { return obj.books; }, set: function (obj, value) { obj.books = value; } }, metadata: _metadata }, _books_initializers, _books_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Publisher = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Publisher = _classThis;
}();
exports.Publisher = Publisher;
