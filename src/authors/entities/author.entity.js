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
exports.Author = void 0;
var book_entity_1 = require("../../books/entities/book.entity");
var typeorm_1 = require("typeorm");
var Author = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('authors')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
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
    var _books_decorators;
    var _books_initializers = [];
    var _books_extraInitializers = [];
    var Author = _classThis = /** @class */ (function () {
        function Author_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.surname = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _surname_initializers, void 0));
            this.legal_id = (__runInitializers(this, _surname_extraInitializers), __runInitializers(this, _legal_id_initializers, void 0));
            this.nationality = (__runInitializers(this, _legal_id_extraInitializers), __runInitializers(this, _nationality_initializers, void 0));
            this.books = (__runInitializers(this, _nationality_extraInitializers), __runInitializers(this, _books_initializers, void 0));
            __runInitializers(this, _books_extraInitializers);
        }
        return Author_1;
    }());
    __setFunctionName(_classThis, "Author");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)()];
        _surname_decorators = [(0, typeorm_1.Column)()];
        _legal_id_decorators = [(0, typeorm_1.Column)()];
        _nationality_decorators = [(0, typeorm_1.Column)()];
        _books_decorators = [(0, typeorm_1.ManyToMany)(function () { return book_entity_1.Book; }, function (book) { return book.authors; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _surname_decorators, { kind: "field", name: "surname", static: false, private: false, access: { has: function (obj) { return "surname" in obj; }, get: function (obj) { return obj.surname; }, set: function (obj, value) { obj.surname = value; } }, metadata: _metadata }, _surname_initializers, _surname_extraInitializers);
        __esDecorate(null, null, _legal_id_decorators, { kind: "field", name: "legal_id", static: false, private: false, access: { has: function (obj) { return "legal_id" in obj; }, get: function (obj) { return obj.legal_id; }, set: function (obj, value) { obj.legal_id = value; } }, metadata: _metadata }, _legal_id_initializers, _legal_id_extraInitializers);
        __esDecorate(null, null, _nationality_decorators, { kind: "field", name: "nationality", static: false, private: false, access: { has: function (obj) { return "nationality" in obj; }, get: function (obj) { return obj.nationality; }, set: function (obj, value) { obj.nationality = value; } }, metadata: _metadata }, _nationality_initializers, _nationality_extraInitializers);
        __esDecorate(null, null, _books_decorators, { kind: "field", name: "books", static: false, private: false, access: { has: function (obj) { return "books" in obj; }, get: function (obj) { return obj.books; }, set: function (obj, value) { obj.books = value; } }, metadata: _metadata }, _books_initializers, _books_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Author = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Author = _classThis;
}();
exports.Author = Author;
