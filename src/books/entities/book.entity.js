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
exports.Book = void 0;
var class_validator_1 = require("class-validator");
var author_entity_1 = require("../../authors/entities/author.entity");
var publisher_entity_1 = require("../../publishers/entities/publisher.entity");
var typeorm_1 = require("typeorm");
var Book = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('books')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _id_publisher_decorators;
    var _id_publisher_initializers = [];
    var _id_publisher_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _category_decorators;
    var _category_initializers = [];
    var _category_extraInitializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _price_extraInitializers = [];
    var _release_date_decorators;
    var _release_date_initializers = [];
    var _release_date_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _publisher_decorators;
    var _publisher_initializers = [];
    var _publisher_extraInitializers = [];
    var _authors_decorators;
    var _authors_initializers = [];
    var _authors_extraInitializers = [];
    var Book = _classThis = /** @class */ (function () {
        function Book_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.id_publisher = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _id_publisher_initializers, void 0));
            this.title = (__runInitializers(this, _id_publisher_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.category = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _category_initializers, void 0));
            this.price = (__runInitializers(this, _category_extraInitializers), __runInitializers(this, _price_initializers, void 0));
            this.release_date = (__runInitializers(this, _price_extraInitializers), __runInitializers(this, _release_date_initializers, void 0));
            this.description = (__runInitializers(this, _release_date_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.publisher = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _publisher_initializers, void 0));
            this.authors = (__runInitializers(this, _publisher_extraInitializers), __runInitializers(this, _authors_initializers, void 0));
            __runInitializers(this, _authors_extraInitializers);
        }
        return Book_1;
    }());
    __setFunctionName(_classThis, "Book");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _id_publisher_decorators = [(0, typeorm_1.Column)(), (0, class_validator_1.IsNotEmpty)()];
        _title_decorators = [(0, typeorm_1.Column)(), (0, class_validator_1.IsNotEmpty)()];
        _category_decorators = [(0, typeorm_1.Column)(), (0, class_validator_1.IsNotEmpty)()];
        _price_decorators = [(0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }), (0, class_validator_1.IsNotEmpty)()];
        _release_date_decorators = [(0, typeorm_1.Column)(), (0, class_validator_1.IsNotEmpty)()];
        _description_decorators = [(0, typeorm_1.Column)(), (0, class_validator_1.IsNotEmpty)()];
        _publisher_decorators = [(0, typeorm_1.ManyToOne)(function () { return publisher_entity_1.Publisher; }, function (publisher) { return publisher.books; }), (0, typeorm_1.JoinColumn)({ name: 'id_publisher' })];
        _authors_decorators = [(0, typeorm_1.ManyToMany)(function () { return author_entity_1.Author; }), (0, typeorm_1.JoinTable)({
                name: 'books_authors',
                joinColumn: { name: 'id_book', referencedColumnName: 'id' },
                inverseJoinColumn: { name: 'id_author', referencedColumnName: 'id' },
            })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _id_publisher_decorators, { kind: "field", name: "id_publisher", static: false, private: false, access: { has: function (obj) { return "id_publisher" in obj; }, get: function (obj) { return obj.id_publisher; }, set: function (obj, value) { obj.id_publisher = value; } }, metadata: _metadata }, _id_publisher_initializers, _id_publisher_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _category_decorators, { kind: "field", name: "category", static: false, private: false, access: { has: function (obj) { return "category" in obj; }, get: function (obj) { return obj.category; }, set: function (obj, value) { obj.category = value; } }, metadata: _metadata }, _category_initializers, _category_extraInitializers);
        __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
        __esDecorate(null, null, _release_date_decorators, { kind: "field", name: "release_date", static: false, private: false, access: { has: function (obj) { return "release_date" in obj; }, get: function (obj) { return obj.release_date; }, set: function (obj, value) { obj.release_date = value; } }, metadata: _metadata }, _release_date_initializers, _release_date_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _publisher_decorators, { kind: "field", name: "publisher", static: false, private: false, access: { has: function (obj) { return "publisher" in obj; }, get: function (obj) { return obj.publisher; }, set: function (obj, value) { obj.publisher = value; } }, metadata: _metadata }, _publisher_initializers, _publisher_extraInitializers);
        __esDecorate(null, null, _authors_decorators, { kind: "field", name: "authors", static: false, private: false, access: { has: function (obj) { return "authors" in obj; }, get: function (obj) { return obj.authors; }, set: function (obj, value) { obj.authors = value; } }, metadata: _metadata }, _authors_initializers, _authors_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Book = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Book = _classThis;
}();
exports.Book = Book;
